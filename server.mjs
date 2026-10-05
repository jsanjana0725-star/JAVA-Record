import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || (process.env.K_SERVICE ? "0.0.0.0" : "127.0.0.1");
const mimeTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".jpeg", "image/jpeg"],
  [".jpg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"]
]);

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

function sendJson(response, status, body) {
  response.writeHead(status, {
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8",
    "X-Content-Type-Options": "nosniff"
  });
  response.end(JSON.stringify(body));
}

async function readRequestBody(request, limit) {
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > limit) throw new HttpError(413, "That message is too large. Please shorten it.");
    chunks.push(chunk);
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    throw new HttpError(400, "The chat request was not valid JSON.");
  }
}

function validateMessages(body) {
  if (!body || !Array.isArray(body.messages) || body.messages.length < 1 || body.messages.length > 12) {
    throw new HttpError(400, "Send between 1 and 12 recent chat messages.");
  }
  const messages = body.messages.map(message => {
    if (!message || !["user", "model"].includes(message.role) || typeof message.text !== "string") {
      throw new HttpError(400, "A chat message has an invalid format.");
    }
    const text = message.text.trim();
    if (!text || text.length > 1500) throw new HttpError(400, "Each chat message must be 1–1500 characters.");
    return { role: message.role, parts: [{ text }] };
  });
  if (messages[messages.length - 1].role !== "user") {
    throw new HttpError(400, "The latest chat message must be a question.");
  }
  return messages;
}

async function answerQuestion(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    sendJson(response, 405, { error: "Use POST to send a question." });
    return;
  }
  const origin = request.headers.origin;
  if (origin) {
    try {
      if (new URL(origin).host !== request.headers.host) {
        sendJson(response, 403, { error: "Cross-site chat requests are not allowed." });
        return;
      }
    } catch {
      sendJson(response, 403, { error: "The request origin could not be verified." });
      return;
    }
  }
  if (!/^application\/json(?:;|$)/i.test(request.headers["content-type"] || "")) {
    sendJson(response, 415, { error: "Send the question as JSON." });
    return;
  }
  if (!process.env.GEMINI_API_KEY) {
    sendJson(response, 503, { error: "Gemini is not configured yet. Set GEMINI_API_KEY, restart the server, and try again." });
    return;
  }

  try {
    const body = await readRequestBody(request, 24000);
    const contents = validateMessages(body);
    const upstream = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": process.env.GEMINI_API_KEY
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{
            text: "You are Java Buddy, a kind and concise Java programming tutor for a college student. Explain concepts in simple steps and use short, correct Java examples when useful. Focus on Java and programming; politely redirect unrelated questions. Never claim to have compiled or run code. If the question lacks important details, ask one clear follow-up question. Do not ask for passwords, API keys, or private personal information."
          }]
        },
        contents,
        generationConfig: { temperature: 0.35, maxOutputTokens: 900 }
      }),
      signal: AbortSignal.timeout(30000)
    });
    const result = await upstream.json().catch(() => null);
    if (!upstream.ok) {
      console.error(`Gemini API returned HTTP ${upstream.status}.`);
      sendJson(response, 502, { error: "Gemini could not answer just now. Check the API key and Gemini API access, then try again." });
      return;
    }
    const reply = result?.candidates?.[0]?.content?.parts
      ?.map(part => typeof part.text === "string" ? part.text : "")
      .join("")
      .trim();
    if (!reply) {
      sendJson(response, 502, { error: "Gemini returned no text. Please rephrase your question and try again." });
      return;
    }
    sendJson(response, 200, { reply });
  } catch (error) {
    if (error instanceof HttpError) {
      sendJson(response, error.status, { error: error.message });
      return;
    }
    if (error.name === "TimeoutError" || error.name === "AbortError") {
      sendJson(response, 504, { error: "The assistant took too long to respond. Please try again." });
      return;
    }
    console.error("The Gemini request could not be completed.");
    sendJson(response, 502, { error: "The assistant service is temporarily unavailable. Please try again in a moment." });
  }
}

async function serveFile(request, response, pathname) {
  if (!["GET", "HEAD"].includes(request.method)) {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end("Method not allowed");
    return;
  }
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(pathname);
  } catch {
    response.writeHead(400);
    response.end("Invalid URL path");
    return;
  }
  const segments = decodedPath.split(/[\\/]/);
  if (segments.some(segment => segment.startsWith(".") || segment === "node_modules")) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }
  const requestedPath = decodedPath === "/" ? "/index.html" : decodedPath;
  const filePath = path.resolve(root, `.${requestedPath}`);
  if (filePath !== root && !filePath.startsWith(`${root}${path.sep}`)) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }
  const contentType = mimeTypes.get(path.extname(filePath).toLowerCase());
  if (!contentType) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }
  try {
    const contents = await readFile(filePath);
    response.writeHead(200, {
      "Cache-Control": "no-cache",
      "Content-Length": contents.length,
      "Content-Type": contentType,
      "X-Content-Type-Options": "nosniff"
    });
    response.end(request.method === "HEAD" ? undefined : contents);
  } catch (error) {
    if (error.code === "ENOENT" || error.code === "EISDIR") {
      response.writeHead(404);
      response.end("Not found");
      return;
    }
    console.error("A static app file could not be served.");
    response.writeHead(500);
    response.end("Unable to serve this file");
  }
}

const server = createServer((request, response) => {
  let url;
  try {
    url = new URL(request.url, "http://localhost");
  } catch {
    response.writeHead(400);
    response.end("Invalid request URL");
    return;
  }
  if (url.pathname === "/api/chat") {
    answerQuestion(request, response);
    return;
  }
  serveFile(request, response, url.pathname);
});

server.listen(port, host, () => {
  console.log(`Java Programming Digital Record is available at http://localhost:${port}`);
  if (!process.env.GEMINI_API_KEY) console.warn("Set GEMINI_API_KEY to enable Java Buddy chat.");
});
