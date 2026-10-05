const $ = s => document.querySelector(s);
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const ME = { name: "J Sai Sanjana", roll: "25EU02078", year: "II Year", br: "AI&ML", sec: "Section B", sub: "Java Programming" };

/* ---------- Program helper: wraps the body in a class + main() ---------- */
const wrap = (c, b) => `public class ${c} {\n    public static void main(String[] args) {\n${b.replace(/\bpl\(/g, "System.out.println(").split("\n").map(l => "        " + l).join("\n")}\n    }\n}`;
const P = (t, aim, c, b, out, exp, keys) => ({ g: "Programs", t, k: "p", aim, code: wrap(c, b), out, exp, keys });

/* ---------- UNIT I (edit order/titles here once the final Unit-I list is confirmed) ---------- */
/* Source seed for the shared lab repository in labs.js. It is not rendered directly. */
const LEGACY_UNIT1 = [
  { g: "Theory", t: "Java vs C, C++, Python & JavaScript", k: "table",
    h: ["Java", "C", "C++", "Python", "JavaScript"],
    r: [
      ["Programming style", "Object-oriented (class-based)", "Procedural", "Procedural + object-oriented", "Multi-paradigm (OOP, functional)", "Multi-paradigm (event-driven, prototype-based)"],
      ["Execution", "Compiled to bytecode, run by the JVM", "Compiled to machine code", "Compiled to machine code", "Interpreted (bytecode run by Python VM)", "Interpreted / JIT-compiled by the browser or Node.js engine"],
      ["Platform dependency", "Independent (write once, run anywhere)", "Dependent", "Dependent", "Independent", "Independent (needs a JS engine)"],
      ["Typing", "Static, strong", "Static, weak", "Static", "Dynamic, strong", "Dynamic, weak"],
      ["Memory management", "Automatic (garbage collector)", "Manual (malloc / free)", "Manual (new / delete)", "Automatic (reference counting + GC)", "Automatic (garbage collector)"],
      ["Pointers", "Not supported (references only)", "Supported", "Supported", "Not supported", "Not supported"],
      ["Common usage", "Enterprise apps, Android, web back ends", "Operating systems, embedded systems, drivers", "Games, system software, high-performance apps", "AI/ML, data science, scripting, automation", "Web front end, full-stack web apps"]
    ] },
  { g: "Setup", t: "Oracle JDK Installation — Windows", k: "steps",
    aim: "To install Oracle JDK on a Windows system and verify the installation.",
    s: ["Open the Oracle Java downloads page (oracle.com/java/technologies/downloads) and choose the <b>Windows x64 Installer (.exe)</b> of the required JDK version.",
        "Run the downloaded <code>.exe</code> file, click <b>Next</b>, keep the default install folder (for example <code>C:\\Program Files\\Java\\jdk-&lt;version&gt;</code>) and click <b>Install</b>, then <b>Close</b>.",
        "Open <b>Edit the system environment variables → Environment Variables</b>. Under System variables click <b>New</b>: name <code>JAVA_HOME</code>, value = the JDK install folder.",
        "Select <b>Path → Edit → New</b> and add <code>%JAVA_HOME%\\bin</code>. Click OK on all windows.",
        "Open a <b>new</b> Command Prompt and run the verification commands below."],
    cmd: "java -version\njavac -version", out: "java version \"<installed version>\" ...\njavac <installed version>",
    note: "Exact version text depends on the JDK you installed. Seeing both commands respond confirms the JDK and compiler are on the Path." },
  { g: "Setup", t: "OpenJDK Installation — Windows", k: "steps",
    aim: "To install OpenJDK on a Windows system and verify the installation.",
    s: ["Download a Windows x64 OpenJDK build, for example from <b>jdk.java.net</b> (zip) or <b>adoptium.net</b> (Temurin <code>.msi</code> installer).",
        "If you downloaded the installer, run it and enable the options to set <b>JAVA_HOME</b> and add Java to <b>PATH</b>. If you downloaded the zip, extract it to a folder such as <code>C:\\Java\\openjdk-&lt;version&gt;</code>.",
        "For the zip version, create the system variable <code>JAVA_HOME</code> pointing to the extracted folder.",
        "Add <code>%JAVA_HOME%\\bin</code> to the system <b>Path</b> variable.",
        "Open a <b>new</b> Command Prompt and run the verification commands below."],
    cmd: "java -version\njavac -version", out: "openjdk version \"<installed version>\" ...\njavac <installed version>",
    note: "OpenJDK is the free, open-source reference implementation of Java SE; Oracle JDK is built from the same code base with Oracle's licensing and support terms." },

  P("Program 1 — Hello, Java!", "Write a Java program to display \"Hello, Java!\" and demonstrate the basic structure of a Java program.", "HelloJava",
    `pl("Hello, Java!");`, "Hello, Java!",
    "The class HelloJava contains the main() method, where execution begins. println() prints the text and moves to the next line.",
    ["Save as HelloJava.java (file name = public class name)", "main() is the entry point of every Java application", "Every statement ends with a semicolon"]),
  P("Program 2 — Primitive Data Types", "Declare variables of byte, short, int, long, float, double, char and boolean data types and display their values.", "DataTypes",
    `byte b = 10;\nshort s = 1000;\nint i = 100000;\nlong l = 123456789L;\nfloat f = 5.5f;\ndouble d = 19.99;\nchar c = 'A';\nboolean flag = true;\npl("byte: " + b);\npl("short: " + s);\npl("int: " + i);\npl("long: " + l);\npl("float: " + f);\npl("double: " + d);\npl("char: " + c);\npl("boolean: " + flag);`,
    "byte: 10\nshort: 1000\nint: 100000\nlong: 123456789\nfloat: 5.5\ndouble: 19.99\nchar: A\nboolean: true",
    "Each variable is declared with its data type and initialised. The + operator joins the label and the value for printing.",
    ["long literals end with L, float literals end with f", "char uses single quotes", "boolean holds only true or false"]),
  P("Program 3 — Arithmetic on Integers", "Perform addition, subtraction, multiplication, division and modulus operations on two integer variables.", "IntOperations",
    `int a = 17, b = 5;\npl("Sum: " + (a + b));\npl("Difference: " + (a - b));\npl("Product: " + (a * b));\npl("Quotient: " + (a / b));\npl("Remainder: " + (a % b));`,
    "Sum: 22\nDifference: 12\nProduct: 85\nQuotient: 3\nRemainder: 2",
    "The five arithmetic operators are applied to a = 17 and b = 5. Integer division drops the fractional part, and % gives the remainder.",
    ["17 / 5 = 3 in integer division", "% returns the remainder of a division"]),
  P("Program 4 — Arithmetic on Floating-Point Numbers", "Perform arithmetic operations on floating-point numbers and display the results.", "FloatOperations",
    `double x = 7.5, y = 2.0;\npl("Sum: " + (x + y));\npl("Difference: " + (x - y));\npl("Product: " + (x * y));\npl("Quotient: " + (x / y));\npl("Modulus: " + (x % y));`,
    "Sum: 9.5\nDifference: 5.5\nProduct: 15.0\nQuotient: 3.75\nModulus: 1.5",
    "The same operators work on double values; division keeps the fractional part, so 7.5 / 2.0 is 3.75.",
    ["Use double for decimal values", "% also works on floating-point numbers"]),
  P("Program 5 — Character Data Type", "Demonstrate the character data type by displaying a character and its corresponding ASCII/Unicode value.", "CharDemo",
    `char ch = 'A';\nint code = ch;\npl("Character: " + ch);\npl("ASCII/Unicode value: " + code);`,
    "Character: A\nASCII/Unicode value: 65",
    "Assigning a char to an int stores its numeric Unicode (ASCII) code, which is 65 for 'A'.",
    ["char is a 16-bit unsigned Unicode value", "A–Z are 65–90, a–z are 97–122"]),
  P("Program 6 — Boolean Variables and Relational Operators", "Demonstrate boolean variables and boolean expressions using relational operators.", "BooleanDemo",
    `int a = 10, b = 20;\nboolean result = a < b;\npl("Stored result (a < b): " + result);\npl("a > b  : " + (a > b));\npl("a == b : " + (a == b));\npl("a != b : " + (a != b));\npl("a >= b : " + (a >= b));\npl("a <= b : " + (a <= b));`,
    "Stored result (a < b): true\na > b  : false\na == b : false\na != b : true\na >= b : false\na <= b : true",
    "Each relational expression compares a and b and produces a boolean value, which can be printed or stored in a boolean variable.",
    ["Relational operators: <, >, <=, >=, ==, !=", "The result is always true or false"]),
  P("Program 7 — Declaring and Initialising Variables", "Declare and initialize different types of variables and display their values.", "VariablesDemo",
    `String name = "Sanjana";\nint age = 19;\ndouble cgpa = 8.5;\nchar grade = 'A';\nboolean passed = true;\npl("Name: " + name);\npl("Age: " + age);\npl("CGPA: " + cgpa);\npl("Grade: " + grade);\npl("Passed: " + passed);`,
    "Name: Sanjana\nAge: 19\nCGPA: 8.5\nGrade: A\nPassed: true",
    "Variables of different types are declared with initial values and printed using string concatenation.",
    ["Declaration = type + name; initialisation = assigning a value", "String is a class, not a primitive type"]),
  P("Program 8 — Swapping Two Variables", "Swap the values of two variables using a temporary variable.", "SwapDemo",
    `int a = 10, b = 20;\npl("Before swap: a = " + a + ", b = " + b);\nint temp = a;\na = b;\nb = temp;\npl("After swap: a = " + a + ", b = " + b);`,
    "Before swap: a = 10, b = 20\nAfter swap: a = 20, b = 10",
    "The value of a is saved in temp, b is copied into a, and the saved value is copied into b.",
    ["A third variable prevents losing a value", "Order of the three assignments matters"]),
  P("Program 9 — Widening Type Conversion", "Demonstrate widening type conversion.", "WideningDemo",
    `int i = 100;\nlong l = i;\nfloat f = l;\ndouble d = f;\npl("int value: " + i);\npl("long value: " + l);\npl("float value: " + f);\npl("double value: " + d);`,
    "int value: 100\nlong value: 100\nfloat value: 100.0\ndouble value: 100.0",
    "A smaller type is automatically converted to a larger type (int → long → float → double). No data is lost and no cast is needed.",
    ["Order: byte → short → int → long → float → double", "Also called implicit conversion"]),
  P("Program 10 — Narrowing Type Casting", "Demonstrate narrowing type casting.", "NarrowingDemo",
    `double d = 9.78;\nint i = (int) d;\nbyte b = (byte) i;\npl("double value: " + d);\npl("int value after cast: " + i);\npl("byte value after cast: " + b);`,
    "double value: 9.78\nint value after cast: 9\nbyte value after cast: 9",
    "A larger type is converted to a smaller type using an explicit cast. Casting double to int removes the fractional part (it truncates, not rounds).",
    ["Explicit cast syntax: (type) value", "Narrowing may lose data"]),
  P("Program 11 — Character and ASCII Conversion", "Demonstrate character and ASCII conversion.", "AsciiConversion",
    `char ch = 'a';\nint ascii = ch;\nchar next = (char) (ascii + 1);\nint num = 66;\nchar fromNum = (char) num;\npl("Character: " + ch);\npl("ASCII value: " + ascii);\npl("Next character: " + next);\npl("66 as character: " + fromNum);`,
    "Character: a\nASCII value: 97\nNext character: b\n66 as character: B",
    "A char converts to int automatically to give its code; converting an int back to char needs an explicit cast.",
    ["char → int is implicit, int → char needs a cast", "Adding 1 to a code gives the next character"]),
  P("Program 12 — Even or Odd", "Check whether a number is even or odd.", "EvenOdd",
    `int num = 14;\nif (num % 2 == 0) {\n    pl(num + " is Even");\n} else {\n    pl(num + " is Odd");\n}`,
    "14 is Even",
    "If a number divided by 2 leaves remainder 0 it is even; otherwise it is odd.",
    ["Test with num % 2 == 0", "Change num to 7 to see the else branch"]),
  P("Program 13 — Largest of Two Numbers", "Find the largest of two numbers.", "LargestOfTwo",
    `int a = 45, b = 72;\nif (a > b) {\n    pl("Largest number: " + a);\n} else {\n    pl("Largest number: " + b);\n}`,
    "Largest number: 72",
    "The condition a > b is checked; the larger value is printed from the matching branch.",
    ["Uses if-else decision making", "Equal numbers fall in the else branch"]),
  P("Program 14 — Reserved Keywords", "Demonstrate reserved keywords.", "KeywordsDemo",
    `pl("Keywords used: public, class, static, void, int, for, if, else");\nint limit = 3;\nfor (int i = 1; i <= limit; i++) {\n    if (i % 2 == 0) {\n        pl(i + " is even");\n    } else {\n        pl(i + " is odd");\n    }\n}`,
    "Keywords used: public, class, static, void, int, for, if, else\n1 is odd\n2 is even\n3 is odd",
    "The program itself uses reserved words such as public, class, static, void, int, for, if and else. Each has a fixed meaning in Java.",
    ["Reserved keywords cannot be used as identifiers", "All keywords are written in lowercase"]),
  P("Program 15 — Numbers 1 to 10 Using a for Loop", "Use a for loop to display numbers from 1 to 10.", "ForLoopDemo",
    `for (int i = 1; i <= 10; i++) {\n    pl(i);\n}`,
    Array.from({ length: 10 }, (_, i) => i + 1).join("\n"),
    "The loop starts at i = 1, checks i <= 10, prints i and increments it until the condition becomes false.",
    ["for (initialisation; condition; update)", "The loop body runs 10 times"])
];
LEGACY_UNIT1.forEach((x, i) => x.id = "t" + (i + 1));

/* ---------- Official syllabus structure (Units 1 and 2) ---------- */
const SYL1 = {
  "Introduction": ["Introduction"],
  "The History and Evolution of Java": ["Java History and Evolution", "Java Features", "Java’s Magic: Byte Code", "How Java differs from C and C++"],
  "An Overview of Java": ["Object Oriented Programming", "Two Paradigms", "Principles of OOP", "A First Simple Program", "Two Control Statements", "Java keywords"],
  "Data Types, Variables and Arrays": ["The Primitive Types", "Integers", "Floating-Point Types", "Characters", "Booleans", "Variables", "Type Conversion and Casting", "Automatic Type Promotion in Expressions", "Arrays", "Operators"]
};
const SYL2 = {
  "Introducing Classes and Objects": ["Class Fundamentals", "Declaring Objects", "Assigning Object Reference Variables", "Introducing Methods", "Constructors", "The this keyword", "Garbage Collection", "Overloading Methods", "Using Objects as Parameters", "Returning Objects", "Understanding static", "Introducing final", "Introducing Nested and Inner Classes"],
  "String Handling": ["The String Constructors", "StringBuffer Class", "StringTokenizer class"],
  "Inheritance": ["Inheritance Basics", "Using super", "Creating a Multilevel Hierarchy", "Method Overriding", "Dynamic Method Dispatch", "Using Abstract Classes", "Using final with Inheritance"]
};
const UN = [
  { n: 1, t: "Fundamental Java Programming Constructs", syl: SYL1 },
  { n: 2, t: "Classes, Objects, Inheritance, and String Handling", syl: SYL2 },
  { n: 3, t: "Packages and Interfaces, Exception Handling, and IO Streams" },
  { n: 4, t: "Multithreading and Lambda Expressions" },
  { n: 5, t: "Collections Framework and Stream API" }
];
/* Unit 5 has no supplied lab material; an empty theory list keeps its route available. */
UN[4].th = [];
UN[4].lab = [];
UN.forEach(u => {
  if (!u.syl) return;
  u.th = Object.entries(u.syl).flatMap(([g, a]) => a.map(t => ({ g, t })));
  u.th.forEach((x, i) => { x.id = "a" + (i + 1); x.html = BODY[u.n + ":" + x.t.replace("’", "'")]; });
});
LEGACY_UNIT1.forEach(x => x.wk = "Week 1");
LEGACY_UNIT1[0].g = "Comparative Study";
UN[0].lab = [];
const W = (wk, s) => s.split("|").map((t, i) => ({ wk, g: "Programs", t: `Program ${i + 1} — ${t}`, k: "todo", id: `w${wk.slice(5)}-${i + 1}` }));
const LEGACY_UNIT2 = [
  ...W("Week 6", "Student Information System|Employee Information System|Book Details — Multiple Objects|Array of Student Objects|Reference Assignment|Comparing Object References|Calculator Using Methods|Rectangle Operations|Student Constructors|Constructor Overloading|Using this Keyword|Constructor Chaining|Demonstrating Garbage Collection|Object Eligibility for Garbage Collection|Method Overloading|Overloading Area Methods|Passing Student Object|Comparing Employee Salaries|Returning a Student Object|Returning a Bank Account Object|Static Variable|Static Methods|Final Keyword|Blank Final Variable|College and Department — Nested Class|Employee Address — Nested Class|Student Address — Inner Class|Library Management — Inner Class"),
  ...W("Week 7", "String Constructors|StringBuffer Class|StringTokenizer Class|Basic Inheritance|Using super Keyword"),
  ...W("Week 8", "Single Inheritance|Using super Keyword|Multilevel Inheritance|Method Overriding|Dynamic Method Dispatch|super with Method Overriding|Multilevel Inheritance for Salary Calculation|Dynamic Method Dispatch for Bank Accounts|Constructor Execution in Multilevel Inheritance|Banking Application Using Inheritance")
];
UN[1].lab = [];
let nProg = LEGACY_UNIT1.filter(x => x.k === "p").length;
const theoryCount = () => UN.reduce((a, u) => a + (u.th ? u.th.length : 0), 0);
let nTh = theoryCount();

/* ---------- Rendering helpers ---------- */
const code = c => `<div class="cb"><button class="cp">Copy code</button><pre><code>${esc(c)}</code></pre></div>`;
const term = o => `<pre class="out">${esc(o)}</pre>`;
const sec = (h, b) => `<section><h3>${h}</h3>${b}</section>`;
const pend = m => `<div class="pend"><b>${m}</b></div>`;
const textBlock = value => `<p class="preserve">${esc(String(value || "")).replace(/\n/g, "<br>")}</p>`;
const labItems = () => window.labPrograms || [];

function body(x) {
  if (x.labType) {
    const questionTitle = x.labType === "activity" ? "Activity Instructions" : "Problem Statement";
    const codePanel = x.code
      ? sec("Java Code", code(x.code))
      : x.labType === "activity" ? "" : sec("Java Code", `<div class="pend"><b>Code will be added</b><br><span>The supplied record contains this question, but no Java source code was supplied for it.</span></div>`);
    const outputPanel = x.output ? sec("Expected Output", term(x.output)) : "";
    const explanation = x.details ? sec("Notes", textBlock(x.details)) : "";
    const resources = x.resources?.length
      ? sec("Research Tools", `<div class="resource-links">${x.resources.map(resource => `<a href="${esc(resource.url)}" target="_blank" rel="noopener noreferrer">${esc(resource.label)} <span aria-hidden="true">↗</span></a>`).join("")}</div>`)
      : "";
    return sec("Aim", textBlock(x.aim)) + sec(questionTitle, textBlock(x.question)) + resources + codePanel + outputPanel + explanation;
  }
  if (x.k === "todo") return pend("Aim, Java code and output for this program are being added.");
  if (x.k === "table")
    return `<div class="tw"><table><thead><tr><th>Feature</th>${x.h.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${x.r.map(r => `<tr><th>${r[0]}</th>${r.slice(1).map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  if (x.k === "steps")
    return sec("Aim", `<p>${x.aim}</p>`) + sec("Procedure", `<ol class="steps">${x.s.map(s => `<li>${s}</li>`).join("")}</ol>`) +
      sec("Verification", code(x.cmd)) + sec("Output", term(x.out)) + `<div class="note">${x.note}</div>`;
  return sec("Aim / Description", `<p>${x.aim}</p>`) + sec("Java Code", code(x.code)) + sec("Output", term(x.out)) +
    sec("Explanation", `<p>${x.exp}</p>`) + sec("Key Points", `<ul class="k">${x.keys.map(k => `<li>${k}</li>`).join("")}</ul>`);
}
const theoryBody = x => x.html || `<section><h3>${x.t}</h3><p>This Java topic is part of the current unit. Review the unit navigation to continue with the related concepts, examples, and lab activities.</p></section>`;
const gl = (x, lab) => lab ? x.wk + " · " + x.g : (x.g === x.t ? "" : x.g);

const toc = (L, base, cur, lab) => { let g = null; return `<details class="toc"><summary>Topics</summary>` + L.map(x => { const k = gl(x, lab); const h = k !== g && k ? `<div class="gh">${k}</div>` : ""; g = k; return h + `<a href="#${base}/${x.id}" class="${x.id === cur ? "on" : ""}">${x.t}</a>`; }).join("") + `</details>`; };
function cards(L, base, lab) {
  if (!L.length) return pend("No supplied material is available for this section.");
  let out = "", g = null, open = false, n = 0;
  L.forEach(x => {
    const k = lab ? x.wk + " · " + x.g : x.g;
    if (k !== g) { if (open) out += "</div>"; out += `<h2 class="sec-t">${k}</h2><div class="grid">`; open = true; g = k; }
    out += `<a class="card" href="#${base}/${x.id}"><span class="num">${String(++n).padStart(2, "0")}</span><b>${x.t}</b></a>`;
  });
  return out + "</div>";
}
function topic(L, base, id, crumb, bodyFn, lab) {
  const i = L.findIndex(x => x.id === id), x = L[i], p = L[i - 1], q = L[i + 1];
  return `<div class="crumb">${crumb} › ${lab ? x.wk + " › " + x.g : x.g}</div><div class="split">${toc(L, base, id, lab)}<article><h1 class="t">${x.t}</h1>${bodyFn(x)}
    <div class="pager">${p ? `<a href="#${base}/${p.id}">← ${p.t}</a>` : "<span></span>"}${q ? `<a href="#${base}/${q.id}">${q.t} →</a>` : "<span></span>"}</div></article></div>`;
}

function profileCard() {
  return `<aside class="profile-card"><img src="assets/profile.jpeg" alt="${ME.name}" class="profile-photo"><div class="profile-tag">AI&amp;ML</div><h2>${ME.name}</h2><p class="profile-roll">${ME.roll} | ${ME.year} | ${ME.br}-B</p><div class="profile-rule"></div><p class="profile-quote">“Better Code<br>Better Future”</p><div class="profile-info"><span>▣ <b>Subject</b><small>${ME.sub}</small></span><span>▤ <b>College</b><small>VR Siddhartha</small></span><span>⌖ <b>Location</b><small>Vijayawada</small></span></div></aside>`;
}
const javaSymbol = `<svg viewBox="0 0 64 64"><path d="M25 5c9 7-8 8 2 16M38 4c9 7-8 9 2 17M16 27h31l-4 17H20zM47 30h5a6 6 0 0 1 0 12h-6M19 49h27M23 54h19" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/></svg>`;
function unitSidebar(active) {
  return `<aside class="unit-sidebar"><div class="side-head"><span>▣</span> Units</div>${UN.map(unit => `<a href="#u${unit.n}" class="${unit.n === active ? "active" : ""}"><i>${unit.n}</i><span>${unit.t}</span></a>`).join("")}<div class="side-quote">${javaSymbol}<em>“Code today,<br>build tomorrow.”</em></div></aside>`;
}
function unitFrame(active, inner, pageClass = "") {
  return `<div class="record-layout ${pageClass}">${unitSidebar(active)}<div class="record-main">${inner}</div>${profileCard()}</div>`;
}
function unitBanner(unit, activeTab) {
  const tags = {
    1: ["Java Basics", "OOP Concepts", "Control Statements", "Data Types", "Arrays"],
    2: ["Classes", "Objects", "Strings", "Inheritance", "Constructors"],
    3: ["Packages", "Interfaces", "Exceptions", "Byte Streams", "Character Streams"],
    4: ["Threads", "Synchronization", "Lambda", "Method References"],
    5: ["List", "Set", "Map", "Collections", "Streams"]
  }[unit.n] || [];
  return `<section class="unit-banner"><div class="unit-banner-main"><span class="unit-number">${unit.n}</span><div><p>Unit ${unit.n}</p><h1>${unit.t}</h1><div class="topic-pills">${tags.map(tag => `<span>${tag}</span>`).join("")}</div></div></div><div class="banner-code" aria-hidden="true">${javaSymbol}<small>JAVA</small></div></section><nav class="unit-tabs" aria-label="Unit ${unit.n} content"><a href="#u${unit.n}/theory" class="${activeTab === "theory" ? "active" : ""}"><span>▣</span> Theory</a><a href="#u${unit.n}/lab" class="${activeTab === "lab" ? "active" : ""}"><span>▦</span> Weekly Assessment</a></nav>`;
}
function theoryRepository(unit) {
  const topics = unit.th || [];
  let cards = "", group = null, number = 0;
  topics.forEach(item => {
    if (item.g !== group) {
      if (group !== null) cards += "</div>";
      group = item.g;
      cards += `<h3 class="theory-group-heading">${group}</h3><div class="week-repository">`;
    }
    cards += `<a class="lab-card theory-card" href="#u${unit.n}/theory/${item.id}"><span class="lab-icon" aria-hidden="true">▤</span><span class="lab-card-copy"><b><span class="week-label">Topic ${++number}</span><span class="card-separator">·</span>${item.t}</b><small>Unit ${unit.n} <span>·</span> Theory</small><em>Open this topic to review its notes and examples.</em></span><strong>View Details <span aria-hidden="true">→</span></strong></a>`;
  });
  if (group !== null) cards += "</div>";
  return `${unitBanner(unit, "theory")}<section class="assessment-panel theory-panel"><header class="assessment-heading"><div><h2><span aria-hidden="true">▣</span> Theory</h2><p>Topics &amp; Notes — Unit ${unit.n}</p></div><span class="repo-count" id="theoryCount">${topics.length} topics</span></header><div class="lab-filters theory-filters"><label><span aria-hidden="true">⌕</span><input id="theorySearch" type="search" placeholder="Search theory topics…"></label></div><div class="theory-results" id="theoryResults">${cards || pend("No supplied material is available for this section.")}</div></section>`;
}
function theoryTopic(L, base, id, unit) {
  const index = L.findIndex(item => item.id === id), item = L[index], previous = L[index - 1], next = L[index + 1];
  const pager = `<div class="pager">${previous ? `<a href="#${base}/${previous.id}">&larr; ${previous.t}</a>` : "<span></span>"}<a href="#u${unit.n}/theory">&larr; Back to Theory</a>${next ? `<a href="#${base}/${next.id}">${next.t} &rarr;</a>` : "<span></span>"}</div>`;
  return unitFrame(unit.n, `${unitBanner(unit, "theory")}<div class="crumb">Unit ${unit.n} &rsaquo; Theory &rsaquo; ${item.g}</div><div class="split"><details class="toc" open><summary>Theory topics</summary>${L.map(entry => `<a href="#${base}/${entry.id}" class="${entry.id === item.id ? "on" : ""}">${entry.t}</a>`).join("")}</details><article class="detail-article"><div class="program-meta"><span>Unit ${unit.n}</span><span>${item.g}</span></div><h1 class="t">${item.t}</h1>${theoryBody(item)}${pager}</article></div>`, "assessment-page");
}
function labTopic(L, base, id, unit) {
  const index = L.findIndex(item => item.id === id), item = L[index], previous = L[index - 1], next = L[index + 1];
  const pager = `<div class="pager">${previous ? `<a href="#${base}/${previous.id}">&larr; ${previous.title}</a>` : "<span></span>"}<a href="#u${unit.n}/lab">&larr; Back to Weekly Assessment</a>${next ? `<a href="#${base}/${next.id}">${next.title} &rarr;</a>` : "<span></span>"}</div>`;
  return unitFrame(unit.n, `${unitBanner(unit, "lab")}<div class="crumb">Unit ${unit.n} &rsaquo; Weekly Assessment &rsaquo; Week ${item.week}</div><div class="split"><details class="toc" open><summary>Week ${item.week} items</summary>${L.map(entry => `<a href="#${base}/${entry.id}" class="${entry.id === item.id ? "on" : ""}">${entry.title}</a>`).join("")}</details><article class="detail-article"><div class="program-meta"><span>Week ${item.week}</span><span>Unit ${item.unitId}</span><span>${item.topic}</span></div><h1 class="t">${item.title}</h1>${body(item)}${pager}</article></div>`);
}
function repositoryCards(items) {
  return items.map(item => `<a class="lab-card" href="#u${item.unitId}/lab/${item.id}">
    <span class="lab-icon" aria-hidden="true">${item.labType === "activity" ? "▤" : item.code ? "&lt;/&gt;" : "⌘"}</span>
    <span class="lab-card-copy">
      <b><span class="week-label">Week ${item.week}</span><span class="card-separator">·</span>${item.title}</b>
      <small>Unit ${item.unitId} <span>·</span> ${item.labType === "activity" ? item.topic : "Lab"}</small>
      <em>${esc(String(item.question)).replace(/\n/g, " ").slice(0, 155)}${item.question.length > 155 ? "…" : ""}</em>
    </span>
    <strong>View Details <span aria-hidden="true">→</span></strong>
  </a>`).join("") || `<div class="pend"><b>No items match these filters.</b></div>`;
}
function labRepository(unit = UN[0]) {
  const data = labItems(), weeks = [...new Set(data.map(item => item.week))].sort((a, b) => a - b), topics = [...new Set(data.map(item => item.topic))].sort();
  const unitItems = data.filter(item => item.unitId === unit.n);
  return `${unitBanner(unit, "lab")}
    <section class="assessment-panel">
      <header class="assessment-heading"><div><h2><span aria-hidden="true">▦</span> Weekly Assessment</h2><p>Lab Questions &amp; Programs — Unit ${unit.n}</p></div><span class="repo-count" id="repoCount">${unitItems.length} record items</span></header>
      <div class="lab-filters" id="labFilters">
        <label><span aria-hidden="true">⌕</span><input id="labSearch" type="search" placeholder="Search programs…"></label>
        <select id="weekFilter" aria-label="Filter by week"><option value="">All Weeks</option>${weeks.map(week => `<option value="${week}">Week ${week}</option>`).join("")}</select>
        <select id="unitFilter" aria-label="Filter by unit"><option value="">All Units</option>${UN.map(option => `<option value="${option.n}" ${option.n === unit.n ? "selected" : ""}>Unit ${option.n}</option>`).join("")}</select>
        <select id="topicFilter" aria-label="Filter by topic"><option value="">All Topics</option>${topics.map(topic => `<option value="${esc(topic)}">${topic}</option>`).join("")}</select>
      </div>
      <div class="week-repository" id="labResults">${repositoryCards(unitItems)}</div>
    </section>`;
}

function render() {
  const p = (location.hash.slice(1) || "u1/lab").split("/"), r = p[0], sub = p[1], id = p[2];
  const um = r.match(/^u([1-5])$/), u = um && UN[um[1] - 1];
  let html = "", f = "units";
  if (r === "home") {
    f = "home";
    html = `<div class="home-page"><section class="hero"><div><small>Digital Programming Record</small><h1>${ME.name}</h1><h2>Java Programming Record</h2>
      <span class="meta">II Year • AI&amp;ML • Section B</span>
      <p>A structured digital record of Java programming concepts, theory, and laboratory work.</p>
      <div class="btns"><a class="btn" href="#units">Explore Units</a><a class="btn o" href="#lab">Weekly Assessment</a></div></div>
      <div class="win"><pre><i>public class</i> HelloJava {
    <i>public static void</i> <b>main</b>(String[] args) {
        System.out.<b>println</b>(<u>"Hello, Java!"</u>);
    }
}</pre></div></section>
     <div class="stats"><div class="stat"><b>${UN.length}</b><span>Units</span></div><div class="stat"><b>${nTh}</b><span>Theory Topics</span></div><div class="stat"><b>${nProg}</b><span>Lab Record Items</span></div><div class="stat"><b>Java</b><span>Programming</span></div></div></div>`;
  } else if (r === "units") {
    html = `<h1 class="t">Units</h1><div class="grid">${UN.map(x => true
      ? `<a class="card" href="#u${x.n}"><span class="num">UNIT ${x.n}</span><b>${x.t}</b><em>${x.d ? x.d + " · " : ""}${x.th.length} theory topics · Weekly Assessment / Lab</em></a>`
      : `<div class="card lock"><span class="num">UNIT ${x.n}</span><b>${x.t}</b><em>🔒 Topics will be added</em></div>`).join("")}</div>`;
  } else if (u && !sub) {
    html = u.th ? `<div class="crumb">Units</div><span class="num">UNIT ${u.n}</span><h1 class="t">${u.t}</h1>${u.d ? `<p class="sub">${u.d}</p>` : ""}<div class="grid">
      <a class="card" href="#u${u.n}/theory"><span class="num">THEORY</span><b>Syllabus topics</b><em>${u.th.length} topics in official syllabus order</em></a>
      <a class="card" href="#u${u.n}/lab"><span class="num">LAB</span><b>Weekly Assessment / Lab</b><em>${u.lab.length ? [...new Set(u.lab.map(x => x.wk))].join(", ") + " · " + u.lab.length + " items" : "Kept separate from theory"}</em></a></div>`
      : `<h1 class="t">Unit ${u.n} — ${u.t}</h1>${pend("🔒 Topics will be added.")}`;
  } else if (u && u.th && sub === "theory") {
    html = u.th.some(x => x.id === id) ? theoryTopic(u.th, `u${u.n}/theory`, id, u)
      : theoryRepository(u);
  } else if (u && u.lab && sub === "lab") {
    f = "lab";
    html = u.lab.some(x => x.id === id) ? labTopic(u.lab, `u${u.n}/lab`, id, u)
      : labRepository(u);
  } else if (r === "lab") {
    f = "lab";
    html = labRepository(UN[0]);
  } else if (r === "about") {
    f = "about";
    html = `<h1 class="t">About</h1><div class="prof"><div class="av">JS<img src="assets/profile.jpeg" alt="${ME.name}" onerror="this.style.display='none'"></div>
      <div><h2>${ME.name}</h2><dl><dt>Roll No.</dt><dd>${ME.roll}</dd><dt>Year</dt><dd>${ME.year}</dd><dt>Branch</dt><dd>${ME.br}</dd><dt>Section</dt><dd>B</dd><dt>Subject</dt><dd>${ME.sub}</dd></dl></div></div>`;
  } else { location.hash = "#home"; return; }
  if (u && (!sub || ((sub === "theory" || sub === "lab") && !id))) html = unitFrame(u.n, html, sub === "lab" || sub === "theory" ? "assessment-page" : "");
  if (r === "lab") html = unitFrame(UN[0].n, html, "assessment-page");
  $("#main").innerHTML = html;
  document.querySelectorAll("#nav a").forEach(a => a.classList.toggle("on", a.dataset.f === f));
  const d = $(".toc"); if (d) d.open = innerWidth > 860;
  document.body.classList.remove("open");
  document.title = ME.name + " · Java Record";
  window.scrollTo(0, 0);
  enhance();
}

$("#ft").innerHTML = `<b>${ME.name}</b>Java Programming Record<br>II Year • AI&amp;ML • Section B`;
addEventListener("hashchange", render);
$("#mb").onclick = () => document.body.classList.toggle("open");
document.addEventListener("click", e => {
  const b = e.target.closest(".cp");
  if (!b) return;
  navigator.clipboard.writeText(b.parentNode.querySelector("code").textContent).then(() => {
    b.textContent = "Copied ✓";
    setTimeout(() => b.textContent = "Copy", 1500);
  });
});

/* ---------- UX enhancements: syntax colours, progress, search, theme, resume ---------- */
const LS = { get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} } };
const TOK = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|\b(abstract|boolean|break|byte|case|catch|char|class|continue|default|do|double|else|enum|extends|final|finally|float|for|if|implements|import|instanceof|int|interface|long|new|package|private|protected|public|return|short|static|super|switch|this|throw|throws|try|void|while|null|true|false)\b|\b(\d+(?:\.\d+)?[fFLd]?)\b|\b([A-Z][A-Za-z0-9_]*)\b/g;
function hl(t) {
  let o = "", i = 0, m; TOK.lastIndex = 0;
  while ((m = TOK.exec(t))) { o += esc(t.slice(i, m.index)) + `<span class="${m[1] ? "hc" : m[2] ? "hs" : m[3] ? "hk" : m[4] ? "hn" : "ht"}">${esc(m[0])}</span>`; i = TOK.lastIndex; }
  return o + esc(t.slice(i));
}
let VIS = new Set(); try { VIS = new Set(JSON.parse(LS.get("visited") || "[]")); } catch (e) {}
function enhance() {
  const theorySearch = $("#theorySearch");
  if (theorySearch) {
    const cards = [...document.querySelectorAll(".theory-card")], groups = [...document.querySelectorAll(".theory-group-heading")];
    theorySearch.addEventListener("input", () => {
      const query = theorySearch.value.trim().toLowerCase();
      cards.forEach(card => { card.hidden = !!query && !card.textContent.toLowerCase().includes(query); });
      groups.forEach(heading => {
        const groupCards = [];
        for (let node = heading.nextElementSibling; node && !node.classList.contains("theory-group-heading"); node = node.nextElementSibling) {
          if (node.matches(".week-repository")) groupCards.push(...node.querySelectorAll(".theory-card"));
        }
        heading.hidden = groupCards.length > 0 && groupCards.every(card => card.hidden);
      });
      const count = cards.filter(card => !card.hidden).length;
      $("#theoryCount").textContent = `${count} topic${count === 1 ? "" : "s"}`;
    });
  }
  const filters = $("#labFilters");
  if (filters) {
    const search = $("#labSearch"), week = $("#weekFilter"), unit = $("#unitFilter"), topic = $("#topicFilter"), results = $("#labResults");
    const filterRecords = () => {
      const query = search.value.trim().toLowerCase();
      const visible = labItems().filter(item => {
        const haystack = `${item.title} ${item.topic} Week ${item.week} Unit ${item.unitId} ${item.question}`.toLowerCase();
        return (!query || haystack.includes(query)) && (!week.value || item.week === Number(week.value)) && (!unit.value || item.unitId === Number(unit.value)) && (!topic.value || item.topic === topic.value);
      });
      $("#repoCount").textContent = `${visible.length} record items`;
      results.innerHTML = repositoryCards(visible);
    };
    [search, week, unit, topic].forEach(control => control.addEventListener(control === search ? "input" : "change", filterRecords));
  }
  document.querySelectorAll(".cb code").forEach(c => c.innerHTML = hl(c.textContent));
  const h = location.hash.slice(1), parts = h.split("/"), toc = $(".toc");
  if (toc) {
    if (parts.length === 3) { VIS.add(h); LS.set("visited", JSON.stringify([...VIS])); LS.set("last", JSON.stringify({ h, t: ($("h1.t") || {}).textContent })); }
    const links = [...toc.querySelectorAll("a")], cur = links.findIndex(a => a.classList.contains("on"));
    links.forEach(a => a.classList.toggle("done", VIS.has(a.getAttribute("href").slice(1)) && !a.classList.contains("on")));
    const h1 = $("h1.t"); if (h1 && cur >= 0) h1.insertAdjacentHTML("afterend", `<div class="cnt">Topic ${cur + 1} of ${links.length}</div>`);
    const inp = document.createElement("input"); inp.className = "ts"; inp.placeholder = "🔍 Search topics…"; inp.type = "search";
    toc.querySelector("summary").after(inp);
    inp.oninput = () => { const q = inp.value.toLowerCase(); let any = false;
      [...toc.children].reverse().forEach(e => { if (e.tagName === "A") { e.hidden = !e.textContent.toLowerCase().includes(q); if (!e.hidden) any = true; } else if (e.classList.contains("gh")) { e.hidden = !any; any = false; } }); };
  }
  if (parts[0] === "home") { const l = JSON.parse(LS.get("last") || "null"); if (l && l.t) $(".hero").insertAdjacentHTML("afterend", `<a class="card resume" href="#${l.h}"><span class="num">RESUME</span><div><b>Continue where you left off</b><br><em>${esc(l.t)} →</em></div></a>`); }
}
const pg = document.body.appendChild(Object.assign(document.createElement("div"), { id: "pg" }));
const up = document.body.appendChild(Object.assign(document.createElement("button"), { id: "up", textContent: "↑", title: "Back to top" }));
up.setAttribute("aria-label", "Back to top"); up.onclick = () => scrollTo({ top: 0, behavior: "smooth" });
addEventListener("scroll", () => { const d = document.documentElement; pg.style.width = (d.scrollTop / Math.max(d.scrollHeight - innerHeight, 1) * 100) + "%"; up.classList.toggle("show", d.scrollTop > 600); }, { passive: true });
const th = document.createElement("button"); th.id = "th"; th.setAttribute("aria-label", "Toggle dark mode");
const setTh = t => { document.documentElement.dataset.theme = t; th.textContent = t === "dark" ? "☀️" : "🌙"; LS.set("theme", t); };
th.onclick = () => setTh(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
$("#nav").after(th); setTh(LS.get("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
addEventListener("keydown", e => {
  if (/INPUT|TEXTAREA/.test(document.activeElement.tagName)) return;
  const a = document.querySelectorAll(".pager a"), L = [...a].find(x => x.textContent.trim().startsWith("←")), R = [...a].find(x => x.textContent.trim().endsWith("→"));
  if (e.key === "ArrowLeft" && L) L.click(); if (e.key === "ArrowRight" && R) R.click();
});
const assistantOpen = $("#assistantOpen");
const assistantPanel = $("#assistantPanel");
const assistantClose = $("#assistantClose");
const assistantForm = $("#assistantForm");
const assistantInput = $("#assistantInput");
const assistantMessages = $("#assistantMessages");
const assistantSend = $("#assistantSend");
const assistantHistory = [];
function setAssistantOpen(open) {
  assistantPanel.hidden = !open;
  assistantPanel.setAttribute("aria-hidden", String(!open));
  assistantOpen.setAttribute("aria-expanded", String(open));
  if (open) assistantInput.focus();
  else assistantOpen.focus();
}
function addAssistantMessage(role, text, extraClass = "") {
  const message = document.createElement("div");
  message.className = `assistant-message ${role === "user" ? "assistant-user" : "assistant-reply"} ${extraClass}`.trim();
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  message.append(paragraph);
  assistantMessages.append(message);
  assistantMessages.scrollTop = assistantMessages.scrollHeight;
  return message;
}
assistantOpen.addEventListener("click", () => setAssistantOpen(assistantPanel.hidden));
assistantClose.addEventListener("click", () => setAssistantOpen(false));
assistantPanel.querySelectorAll(".assistant-suggestions button").forEach(button => {
  button.addEventListener("click", () => {
    assistantInput.value = button.textContent.includes("example")
      ? "Show me a small Java example for this page's topic."
      : "Explain this page's topic simply.";
    assistantForm.requestSubmit();
  });
});
assistantForm.addEventListener("submit", async event => {
  event.preventDefault();
  const question = assistantInput.value.trim();
  if (!question || assistantSend.disabled) return;
  addAssistantMessage("user", question);
  assistantHistory.push({ role: "user", text: question });
  if (assistantHistory.length > 10) assistantHistory.splice(0, assistantHistory.length - 10);
  assistantInput.value = "";
  assistantInput.disabled = true;
  assistantSend.disabled = true;
  assistantPanel.querySelectorAll(".assistant-suggestions button").forEach(button => { button.disabled = true; });
  const thinking = addAssistantMessage("model", "Thinking through it…", "assistant-thinking");
  try {
    const topic = $(".detail-article h1")?.textContent?.trim() || $(".unit-banner h1")?.textContent?.trim();
    const messages = assistantHistory.map((message, index) => ({
      ...message,
      text: index === assistantHistory.length - 1 && topic
        ? `Current Java study topic: ${topic}\nStudent question: ${message.text}`
        : message.text
    }));
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages })
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      const message = result.error || (response.status === 404
        ? "The assistant server is not running. Start `node server.mjs` and open http://localhost:3000."
        : response.status === 403
          ? "The chat endpoint refused this request (403). Open the app at http://localhost:3000, refresh it, and check the server terminal. If it continues, the page may be served by another host or a proxy may be blocking /api/chat."
        : `Assistant request failed (${response.status}).`);
      throw new Error(message);
    }
    if (typeof result.reply !== "string" || !result.reply.trim()) throw new Error("The assistant returned an empty answer. Please try again.");
    thinking.remove();
    assistantHistory.push({ role: "model", text: result.reply });
    if (assistantHistory.length > 10) assistantHistory.splice(0, assistantHistory.length - 10);
    addAssistantMessage("model", result.reply);
  } catch (error) {
    thinking.remove();
    const message = error instanceof TypeError
      ? "I couldn't reach the assistant server. Start this app with `node server.mjs` and open http://localhost:3000."
      : error.message;
    addAssistantMessage("model", message, "assistant-error");
  } finally {
    assistantInput.disabled = false;
    assistantSend.disabled = false;
    assistantPanel.querySelectorAll(".assistant-suggestions button").forEach(button => { button.disabled = false; });
    if (assistantPanel.hidden) assistantOpen.focus();
    else assistantInput.focus();
  }
});
addEventListener("keydown", event => {
  if (event.key === "Escape" && !assistantPanel.hidden) setAssistantOpen(false);
});
render();
