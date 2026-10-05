/* Supplemental theory for topics that were absent from the supplied record. */
(() => {
  const code = source => `<div class="cb"><button class="cp">Copy code</button><pre><code>${esc(source.trim())}</code></pre></div>`;
  const list = items => `<ul class="k">${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
  const entry = (t, html) => ({ g: "Collections Framework and Stream API", t, html });

  /* These two Unit 1 topics replace the old blank-state message. */
  BODY["1:Introduction"] = `
    <h4>What is Java?</h4>
    <p>Java is a high-level, class-based programming language. A Java program is compiled into bytecode and then executed by the Java Virtual Machine (JVM), allowing the same compiled program to run on systems that provide a compatible JVM.</p>
    <h4>Why Java is used</h4>
    ${list([`It supports object-oriented program design with classes and objects.`, `Its standard library provides ready-to-use facilities for input/output, collections, networking, database access, and concurrency.`, `Automatic garbage collection manages memory for objects that are no longer reachable.`, `Strong typing and exception handling help make programs easier to maintain.`])}
    <h4>How a Java program runs</h4>
    ${code(`Hello.java  →  javac Hello.java  →  Hello.class  →  java Hello
source code       compiler            bytecode          JVM execution`)}
    <div class="note"><b>Key point:</b> The JVM is the runtime layer that makes Java bytecode portable across operating systems.</div>`;
  BODY["1:Object Oriented Programming"] = `
    <h4>Object-Oriented Programming</h4>
    <p>Object-oriented programming (OOP) organizes a program around <strong>objects</strong>. An object combines state, stored in fields, with behavior, written as methods. A <strong>class</strong> is the blueprint used to create those objects.</p>
    <h4>Core ideas</h4>
    ${list([`<strong>Encapsulation:</strong> keep data and the operations on it together, and control access when necessary.`, `<strong>Inheritance:</strong> let a subclass reuse and extend the state and behavior of a superclass.`, `<strong>Polymorphism:</strong> use a common type while allowing an overridden method to behave according to the actual object.`, `<strong>Abstraction:</strong> expose essential operations while hiding implementation details.`])}
    <h4>Small example</h4>
    ${code(`class Student {
    private String name;

    Student(String name) {
        this.name = name;
    }

    void introduce() {
        System.out.println("I am " + name);
    }
}

public class OopDemo {
    public static void main(String[] args) {
        Student student = new Student("Sanjana");
        student.introduce();
    }
}`)}
    <div class="ol">Output</div><pre class="out">I am Sanjana</pre>
    <p>The variable <code>student</code> holds a reference to an object created from the <code>Student</code> class. The object’s <code>introduce()</code> method uses its own state.</p>`;

  const U5 = [
    entry("Collections Overview", `<h4>Purpose</h4><p>The Java Collections Framework is a set of interfaces and classes for representing and manipulating groups of objects. It provides common data structures and reusable algorithms instead of requiring every program to implement them from scratch.</p><h4>Main families</h4>${list([`<code>List</code> keeps an ordered sequence and allows duplicates.`, `<code>Set</code> stores unique elements.`, `<code>Queue</code> represents elements processed in an order.`, `<code>Map</code> associates unique keys with values; it is not a subtype of <code>Collection</code>.`])}${code(`import java.util.ArrayList;
import java.util.List;

List<String> languages = new ArrayList<>();
languages.add("Java");
languages.add("Python");
System.out.println(languages);`)}<div class="ol">Output</div><pre class="out">[Java, Python]</pre>`),
    entry("List", `<h4>List interface</h4><p>A <code>List</code> is an ordered collection. It keeps the insertion position of each element, allows duplicates, and supports index-based operations such as <code>get(index)</code>, <code>set(index, value)</code>, and <code>remove(index)</code>.</p>${code(`import java.util.ArrayList;
import java.util.List;

List<Integer> marks = new ArrayList<>();
marks.add(82);
marks.add(91);
marks.add(82);
System.out.println(marks.get(1));
System.out.println(marks);`)}<div class="ol">Output</div><pre class="out">91
[82, 91, 82]</pre><div class="note">Choose a <code>List</code> when order matters or duplicate values are meaningful.</div>`),
    entry("Set", `<h4>Set interface</h4><p>A <code>Set</code> represents a collection with no duplicate elements. Its implementation determines whether iteration order is preserved or sorted.</p>${list([`<code>HashSet</code> offers fast average lookup with no predictable iteration order.`, `<code>LinkedHashSet</code> remembers insertion order.`, `<code>TreeSet</code> keeps elements in sorted order.`])}${code(`import java.util.HashSet;
import java.util.Set;

Set<String> branches = new HashSet<>();
branches.add("AI&ML");
branches.add("CSE");
branches.add("AI&ML");
System.out.println(branches.size());`)}<div class="ol">Output</div><pre class="out">2</pre>`),
    entry("Map", `<h4>Map interface</h4><p>A <code>Map</code> stores key-value pairs. Each key is unique; a later <code>put</code> using the same key replaces the earlier value. Values can be repeated.</p>${code(`import java.util.HashMap;
import java.util.Map;

Map<Integer, String> students = new HashMap<>();
students.put(101, "Sanjana");
students.put(102, "Ravi");
System.out.println(students.get(101));
System.out.println(students.containsKey(102));`)}<div class="ol">Output</div><pre class="out">Sanjana
true</pre><p>Use <code>entrySet()</code> when both the key and value are needed while iterating.</p>`),
    entry("ArrayList", `<h4>ArrayList</h4><p><code>ArrayList</code> is a resizable-array implementation of <code>List</code>. It gives fast random access by index and appends efficiently in normal use. Inserting or removing near the beginning can require shifting later elements.</p>${code(`import java.util.ArrayList;

ArrayList<String> topics = new ArrayList<>();
topics.add("Classes");
topics.add("Strings");
topics.add(1, "Objects");
System.out.println(topics);`)}<div class="ol">Output</div><pre class="out">[Classes, Objects, Strings]</pre>`),
    entry("LinkedList", `<h4>LinkedList</h4><p><code>LinkedList</code> implements both <code>List</code> and <code>Deque</code>. It is useful when elements are frequently added or removed at the ends, because it provides operations such as <code>addFirst</code>, <code>addLast</code>, <code>removeFirst</code>, and <code>removeLast</code>.</p>${code(`import java.util.LinkedList;

LinkedList<String> queue = new LinkedList<>();
queue.addLast("First");
queue.addLast("Second");
System.out.println(queue.removeFirst());
System.out.println(queue);`)}<div class="ol">Output</div><pre class="out">First
[Second]</pre>`),
    entry("HashSet", `<h4>HashSet</h4><p><code>HashSet</code> uses hashing to store unique elements. It does not guarantee insertion order or sorted order. Equality is determined through <code>equals()</code> and <code>hashCode()</code>, which must be consistent for custom objects.</p>${code(`import java.util.HashSet;

HashSet<Integer> ids = new HashSet<>();
ids.add(20);
ids.add(10);
ids.add(20);
System.out.println(ids.contains(10));
System.out.println(ids.size());`)}<div class="ol">Output</div><pre class="out">true
2</pre>`),
    entry("HashMap", `<h4>HashMap</h4><p><code>HashMap</code> is a hash-table-based implementation of <code>Map</code>. It is commonly used for fast average-time lookup by key. It permits one <code>null</code> key and multiple <code>null</code> values, but it does not guarantee iteration order.</p>${code(`import java.util.HashMap;

HashMap<String, Integer> score = new HashMap<>();
score.put("Java", 95);
score.put("Python", 92);
score.replace("Python", 94);
System.out.println(score.get("Python"));`)}<div class="ol">Output</div><pre class="out">94</pre>`),
    entry("TreeMap", `<h4>TreeMap</h4><p><code>TreeMap</code> stores map entries ordered by their keys. By default, keys use their natural ordering; a custom <code>Comparator</code> can define another order. It is appropriate when sorted key traversal is required.</p>${code(`import java.util.Map;
import java.util.TreeMap;

Map<Integer, String> rank = new TreeMap<>();
rank.put(3, "Third");
rank.put(1, "First");
rank.put(2, "Second");
System.out.println(rank);`)}<div class="ol">Output</div><pre class="out">{1=First, 2=Second, 3=Third}</pre>`),
    entry("Stream Basics", `<h4>What is a stream?</h4><p>A stream is a pipeline for processing data from a source such as a collection, array, or file. Stream operations do not normally change the source collection. Intermediate operations build a pipeline; a terminal operation produces a result or side effect.</p>${code(`import java.util.List;

List<Integer> values = List.of(1, 2, 3, 4, 5);
values.stream()
      .filter(n -> n % 2 == 0)
      .forEach(System.out::println);`)}<div class="ol">Output</div><pre class="out">2
4</pre>${list([`<code>filter</code>, <code>map</code>, and <code>sorted</code> are common intermediate operations.`, `<code>forEach</code>, <code>collect</code>, <code>count</code>, and <code>reduce</code> are terminal operations.`])}`),
    entry("Reduction", `<h4>Reduction</h4><p>A reduction combines all stream elements into one result: a sum, product, maximum, count, string, or a custom aggregate. The <code>reduce</code> operation can supply an identity value so an empty stream has a defined result.</p>${code(`import java.util.List;

List<Integer> numbers = List.of(2, 4, 6, 8);
int sum = numbers.stream()
                 .reduce(0, Integer::sum);
int largest = numbers.stream()
                     .reduce(Integer.MIN_VALUE, Integer::max);
System.out.println(sum);
System.out.println(largest);`)}<div class="ol">Output</div><pre class="out">20
8</pre>`),
    entry("Parallel Streams", `<h4>Parallel streams</h4><p>A parallel stream may divide processing across multiple threads. It can help with sufficiently large, independent, CPU-intensive work, but it adds overhead and should be measured rather than assumed to be faster.</p>${code(`import java.util.List;

List<Integer> numbers = List.of(1, 2, 3, 4, 5);
long count = numbers.parallelStream()
                    .filter(n -> n > 2)
                    .count();
System.out.println(count);`)}<div class="ol">Output</div><pre class="out">3</pre><div class="note"><b>Care:</b> Avoid mutable shared state inside a parallel-stream pipeline. Encounter order and side effects can make parallel code harder to reason about.</div>`),
    entry("Mapping", `<h4>Mapping data</h4><p><code>map</code> transforms every element into another value. <code>flatMap</code> transforms each element into a stream and then flattens those streams into one sequence.</p>${code(`import java.util.List;

List<String> names = List.of("java", "stream");
names.stream()
     .map(String::toUpperCase)
     .forEach(System.out::println);`)}<div class="ol">Output</div><pre class="out">JAVA
STREAM</pre>`),
    entry("Collecting", `<h4>Collecting stream results</h4><p>The <code>collect</code> terminal operation gathers stream elements into a collection or another result container. The <code>Collectors</code> utility provides ready-made collectors such as <code>toList()</code>, <code>joining()</code>, <code>groupingBy()</code>, and <code>counting()</code>.</p>${code(`import java.util.List;
import java.util.stream.Collectors;

List<String> words = List.of("java", "api", "stream");
List<String> longWords = words.stream()
    .filter(word -> word.length() >= 4)
    .collect(Collectors.toList());
System.out.println(longWords);`)}<div class="ol">Output</div><pre class="out">[java, stream]</pre>`),
    entry("Iterators and Streams", `<h4>Iterators and streams</h4><p>An <code>Iterator</code> traverses a collection one element at a time and is useful when controlled removal is needed. A stream describes a processing pipeline and is usually preferred for declarative filtering, mapping, and reduction.</p>${code(`import java.util.ArrayList;
import java.util.Iterator;

ArrayList<Integer> values = new ArrayList<>();
values.add(1);
values.add(2);
values.add(3);

Iterator<Integer> it = values.iterator();
while (it.hasNext()) {
    if (it.next() % 2 == 0) it.remove();
}
System.out.println(values);`)}<div class="ol">Output</div><pre class="out">[1, 3]</pre><p>Use <code>Iterator.remove()</code> for safe structural removal during iteration; do not modify a collection directly during a for-each loop.</p>`)
  ];

  U5.forEach((item, index) => { item.id = `u5t${index + 1}`; });
  Object.assign(UN[4], {
    d: "Java collection types, iterators, stream pipelines, and collectors.",
    th: U5,
    lab: []
  });
  nTh = theoryCount();
  render();
})();
