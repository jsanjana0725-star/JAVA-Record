/* Units 3 and 4 - source-aligned theory. Kept separate from Weekly Assessment/Lab. */
(() => {
  const code = source => `<div class="cb"><button class="cp">Copy</button><pre><code>${esc(source.trim())}</code></pre></div>`;
  const output = text => `<div class="ol">Output</div><pre class="out">${esc(text.trim())}</pre>`;
  const list = items => `<ul class="k">${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
  const table = (head, rows) => `<div class="tw"><table><thead><tr>${head.map(x => `<th>${x}</th>`).join("")}</tr></thead><tbody>${rows.map(row => `<tr>${row.map((x, i) => i ? `<td>${x}</td>` : `<th>${x}</th>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  const topic = (g, t, html) => ({ g, t, html });

  const U3 = [
    topic("Packages & Interfaces", "Packages", `
      <h4>Definition</h4>
      <p>A <strong>package</strong> in Java is a collection of related classes, interfaces, and sub-packages. Packages organize Java programs and avoid naming conflicts.</p>
      <h4>Built-in package examples</h4>
      ${list([`<code>java.lang</code> - <code>String</code>, <code>Math</code>, <code>System</code>, <code>Object</code>, and related core classes.`, `<code>java.util</code> - <code>Scanner</code>, <code>ArrayList</code>, <code>HashMap</code>, and utilities.`, `<code>java.io</code> - <code>File</code>, <code>InputStream</code>, <code>OutputStream</code>, and I/O classes.`, `<code>java.sql</code> - JDBC classes.`])}
      <h4>Why packages are used</h4>
      ${list([`They organize classes into logical groups.`, `They avoid naming conflicts between classes.`, `They provide access protection.`, `They make programs easier to maintain and reuse.`, `They make large Java applications easier to manage.`])}
      <div class="note"><b>In short:</b> Package &rarr; collection of related classes/interfaces; <code>package</code> defines a package; <code>import</code> uses classes from it; <code>CLASSPATH</code> helps Java find packages/classes.</div>`),

    topic("Packages & Interfaces", "Defining a Package", `
      <h4>Definition and syntax</h4>
      <p>A package is defined with the <code>package</code> keyword. It must appear at the beginning of the Java source file, before the class declaration.</p>
      ${code(`package package_name;

class ClassName {
    // class members
}`)}
      <h4>Example</h4>
      ${code(`package mypack;

public class Student {
    public void display() {
        System.out.println("Student class");
    }
}`)}
      <p>Here, <code>Student</code> belongs to the package <code>mypack</code>.</p>
      <h4>Directory structure and compilation</h4>
      ${code(`mypack/
    Student.java

javac -d . Student.java`)}
      <p>The <code>-d .</code> option creates the package directory and produces <code>mypack/Student.class</code>.</p>`),

    topic("Packages & Interfaces", "Finding Package and CLASSPATH", `
      <h4>CLASSPATH</h4>
      <p>The <strong>CLASSPATH</strong> tells the Java compiler and JVM where to search for <code>.class</code> files and packages.</p>
      <h4>Example layout</h4>
      ${code(`C:\\JavaProject\\
    mypack\\
        Student.class
    Test.java`)}
      <p><code>Test.java</code> imports and uses <code>Student</code>:</p>
      ${code(`import mypack.Student;

public class Test {
    public static void main(String[] args) {
        Student s = new Student();
        s.display();
    }
}`)}
      <h4>Compile and run</h4>
      ${code(`javac -cp . Test.java
java -cp . Test`)}
      <p>Here, <code>.</code> means the <strong>current directory</strong>.</p>
      <h4>Setting CLASSPATH</h4>
      ${table(["Platform", "Command"], [["Linux", `<code>export CLASSPATH=.:/home/user/java</code><br>Check it with <code>echo $CLASSPATH</code>.`], ["Windows", `<code>set CLASSPATH=.;C:\\JavaProject</code>`]])}
      <div class="note"><b>Important:</b> In modern Java development, using <code>-cp</code> or <code>--class-path</code> with each command is generally preferred to setting a permanent <code>CLASSPATH</code>.</div>`),

    topic("Packages & Interfaces", "A Short Package Example", `
      <h4>Create the package class</h4>
      <p>Create a package called <code>mypack</code>. Save this source as <code>Student.java</code>.</p>
      ${code(`package mypack;

public class Student {
    public void show() {
        System.out.println("Welcome to Java Packages");
    }
}`)}
      <h4>Compile the package</h4>
      ${code(`javac -d . Student.java`)}
      <h4>Use the package from another file</h4>
      <p>Create <code>Test.java</code> outside the package directory.</p>
      ${code(`import mypack.Student;

public class Test {
    public static void main(String[] args) {
        Student s = new Student();
        s.show();
    }
}`)}
      ${code(`javac Test.java
java Test`)}
      ${output(`Welcome to Java Packages`)}`),

    topic("Packages & Interfaces", "Packages and Member Access", `
      <h4>Member access and packages</h4>
      <p>Access to a class member depends on its access modifier.</p>
      ${table(["Modifier", "Same class", "Same package", "Subclass in different package", "Other package"], [["private", "Yes", "No", "No", "No"], ["default", "Yes", "Yes", "No", "No"], ["protected", "Yes", "Yes", "Yes", "No*"], ["public", "Yes", "Yes", "Yes", "Yes"]])}
      <p><small>* <code>protected</code> access from another package is available through inheritance, subject to Java's protected-access rules.</small></p>
      <h4>Example</h4>
      ${code(`package pack1;

public class Demo {
    private int a = 10;
    int b = 20;
    protected int c = 30;
    public int d = 40;
}`)}
      <p>Another class in the <strong>same package</strong> can access <code>b</code>, <code>c</code>, and <code>d</code>, but cannot directly access <code>a</code> because it is <code>private</code>. A class in a <strong>different package</strong> can directly access <code>d</code> because it is <code>public</code>; <code>c</code> is available only through the appropriate protected/inheritance case.</p>`),

    topic("Packages & Interfaces", "Importing Packages", `
      <h4>Purpose and syntax</h4>
      <p>The <code>import</code> statement lets a program use a class from another package without writing its complete package name every time.</p>
      ${code(`import package_name.ClassName;`)}
      <h4>Single-class import</h4>
      ${code(`import java.util.Scanner;

public class Demo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = sc.nextLine();
        System.out.println("Hello " + name);
    }
}`)}
      <p>Without the import, the complete name is required:</p>
      ${code(`java.util.Scanner sc = new java.util.Scanner(System.in);`)}
      <h4>Importing all classes directly in a package</h4>
      ${code(`import java.util.*;

public class Demo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<String> names = new ArrayList<>();
        names.add("Ravi");
        names.add("Sita");
        System.out.println(names);
    }
}`)}
      <div class="note"><b>Important:</b> <code>import java.util.*;</code> imports classes directly inside <code>java.util</code>; it does <em>not</em> import sub-packages such as <code>java.util.concurrent</code>.</div>
      <h4>Complete package example</h4>
      ${code(`// mypack/Calculator.java
package mypack;

public class Calculator {
    public int add(int a, int b) { return a + b; }
    public int multiply(int a, int b) { return a * b; }
}

// Main.java
import mypack.Calculator;

public class Main {
    public static void main(String[] args) {
        Calculator c = new Calculator();
        System.out.println("Addition = " + c.add(10, 20));
        System.out.println("Multiplication = " + c.multiply(10, 20));
    }
}`)}
      ${code(`javac -d . mypack/Calculator.java
javac Main.java
java Main`)}
      ${output(`Addition = 30
Multiplication = 200`)}`),

    topic("Packages & Interfaces", "Interfaces", `
      <h4>Definition</h4>
      <p>An <strong>interface</strong> in Java is a blueprint that defines a set of methods and constants that a class can implement. It is mainly used to achieve <strong>abstraction</strong> and <strong>multiple inheritance</strong> in Java.</p>
      <h4>Key points</h4>
      ${list([`An interface is declared with the <code>interface</code> keyword.`, `A class uses <code>implements</code> to implement an interface.`, `Interface methods are generally <code>public</code> and <code>abstract</code> by default.`, `Variables declared in an interface are automatically <code>public static final</code>.`, `A class can implement multiple interfaces.`])}
      ${code(`interface Animal {
    void sound();
}

class Dog implements Animal {
    public void sound() {
        System.out.println("Dog barks");
    }
}`)}
      <p>The method declaration <code>void sound();</code> is automatically treated as <code>public abstract void sound();</code>. Here <code>public</code> means it can be accessed/implemented from outside the interface, and <code>abstract</code> means it has a declaration but no method body.</p>
      ${code(`interface Student {
    int MARKS = 100;
}

// Java treats it as:
// public static final int MARKS = 100;`)}
      <p><code>public</code> permits access from anywhere, <code>static</code> makes the value belong to the interface itself, and <code>final</code> prevents reassignment.</p>`),

    topic("Packages & Interfaces", "Defining an Interface", `
      <h4>Syntax</h4>
      ${code(`interface InterfaceName {
    // constants
    // abstract methods
}`)}
      <h4>Example</h4>
      ${code(`interface Vehicle {
    void start();
    void stop();
}`)}
      ${list([`<code>Vehicle</code> is the interface.`, `<code>start()</code> and <code>stop()</code> are abstract methods.`, `An implementing class must provide definitions for these methods.`])}`),

    topic("Packages & Interfaces", "Implementing Interfaces", `
      <h4>Syntax</h4>
      <p>A class implements an interface with the <code>implements</code> keyword.</p>
      ${code(`class ClassName implements InterfaceName {
    // method implementations
}`)}
      <h4>Example</h4>
      ${code(`interface Vehicle {
    void start();
}

class Car implements Vehicle {
    public void start() {
        System.out.println("Car starts");
    }
}

class Test {
    public static void main(String[] args) {
        Car c = new Car();
        c.start();
    }
}`)}
      ${output(`Car starts`)}
      <h4>Interface objects and multiple interfaces</h4>
      <p>An interface cannot be directly instantiated: <code>Animal a = new Animal();</code> is an error because an interface usually has abstract methods without implementation.</p>
      ${code(`interface Printable { void print(); }
interface Showable { void show(); }

class Demo implements Printable, Showable {
    public void print() { System.out.println("Printing"); }
    public void show() { System.out.println("Showing"); }
}`)}
      <p>Java therefore supports multiple inheritance of behavior requirements through interfaces.</p>`),

    topic("Packages & Interfaces", "Nested Interfaces", `
      <h4>Definition</h4>
      <p>An interface declared inside another interface or inside a class is called a <strong>nested interface</strong>.</p>
      <h4>Interface inside an interface</h4>
      ${code(`interface Outer {
    interface Inner {
        void display();
    }
}

class Demo implements Outer.Inner {
    public void display() {
        System.out.println("Nested Interface");
    }
}`)}
      <p><code>Inner</code> is a nested interface inside <code>Outer</code>; it is accessed with <code>Outer.Inner</code>.</p>
      <h4>Interface inside a class</h4>
      ${code(`class Test {
    interface MyInterface {
        void display();
    }
}

class Demo implements Test.MyInterface {
    public void display() {
        System.out.println("Hello");
    }
}`)}`),

    topic("Packages & Interfaces", "Applying Interfaces", `
      <h4>Where interfaces are applied</h4>
      <p>Interfaces are commonly applied for abstraction, multiple inheritance, polymorphism, loose coupling, and standardization of behavior.</p>
      <h4>Abstraction</h4>
      <p>Abstraction hides implementation details and shows only necessary functionality. An interface tells <strong>what to do</strong>; the implementing class tells <strong>how to do it</strong>.</p>
      ${code(`interface Vehicle { void start(); }

class Car implements Vehicle {
    public void start() {
        System.out.println("Car starts with a key");
    }
}

Vehicle v = new Car();
v.start();`)}
      <h4>Multiple inheritance</h4>
      <p>Java does not allow <code>class C extends A, B { }</code>, but it allows a class to implement multiple interfaces.</p>
      ${code(`interface A { void show(); }
interface B { void display(); }

class C implements A, B {
    public void show() { System.out.println("Show"); }
    public void display() { System.out.println("Display"); }
}`)}
      <h4>Polymorphism</h4>
      <p>One interface reference can refer to objects of different implementing classes.</p>
      ${code(`interface Animal { void sound(); }

class Dog implements Animal {
    public void sound() { System.out.println("Dog barks"); }
}
class Cat implements Animal {
    public void sound() { System.out.println("Cat meows"); }
}

Animal a;
a = new Dog();
a.sound();
a = new Cat();
a.sound();`)}
      ${output(`Dog barks
Cat meows`)}
      <h4>Standardization and loose coupling</h4>
      <p>An interface establishes a common set of methods every implementation must provide, while reducing dependency between classes.</p>
      ${code(`interface Bank {
    void deposit();
    void withdraw();
}

class SBI implements Bank {
    public void deposit() { System.out.println("SBI Deposit"); }
    public void withdraw() { System.out.println("SBI Withdrawal"); }
}

class HDFC implements Bank {
    public void deposit() { System.out.println("HDFC Deposit"); }
    public void withdraw() { System.out.println("HDFC Withdrawal"); }
}`)}
      <p>Both classes must provide <code>deposit()</code> and <code>withdraw()</code>, so the interface creates a common standard.</p>`),

    topic("Packages & Interfaces", "Variables in Interfaces", `
      <h4>Interface variables are constants</h4>
      <p>Variables declared inside an interface are automatically <code>public static final</code>; therefore they are constants.</p>
      ${code(`interface Constants {
    int MAX = 100;
}

// Equivalent declaration:
interface Constants {
    public static final int MAX = 100;
}`)}
      <h4>Using a constant</h4>
      ${code(`class Test {
    public static void main(String[] args) {
        System.out.println(Constants.MAX);
    }
}`)}
      ${output(`100`)}
      <p><code>Constants.MAX = 200;</code> is invalid because <code>MAX</code> is <code>final</code>. The value can be accessed from anywhere with <code>Constants.MAX</code>, and no object needs to be created because it is <code>static</code>.</p>`),

    topic("Exception Handling", "Exception Handling Fundamentals", `
      <h4>Definition</h4>
      <p>Exception handling is a mechanism in Java used to handle runtime errors so that the normal flow of a program can be maintained. An <strong>exception</strong> is an abnormal condition during program execution that interrupts its normal flow.</p>
      <h4>Situations that may cause exceptions</h4>
      ${list([`Dividing a number by zero.`, `Accessing an invalid array index.`, `Using a null object.`, `Entering invalid data.`, `Opening a file that does not exist.`])}
      <h4>Exception-handling keywords</h4>
      ${table(["Keyword", "Purpose"], [["try", "Contains code that may generate an exception."], ["catch", "Handles the exception."], ["throw", "Explicitly throws an exception."], ["throws", "Declares exceptions that a method may throw."], ["finally", "Contains code that normally executes whether an exception occurs or not."]])}
      <h4>Basic syntax</h4>
      ${code(`try {
    // Code that may cause exception
} catch (ExceptionType e) {
    // Exception-handling code
} finally {
    // Code that executes after try/catch
}`)}
      <h4>Example</h4>
      ${code(`class Demo {
    public static void main(String[] args) {
        try {
            int a = 10 / 0;
            System.out.println(a);
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        }
    }
}`)}
      ${output(`Cannot divide by zero`)}`),

    topic("Exception Handling", "Exception Types", `
      <h4>Classification</h4>
      <p>Java exceptions are mainly classified as checked exceptions, unchecked exceptions, and errors.</p>
      <h4>Checked exceptions</h4>
      <p>Checked exceptions are checked by the compiler at compile time. Examples include <code>IOException</code>, <code>SQLException</code>, <code>ClassNotFoundException</code>, and <code>FileNotFoundException</code>.</p>
      ${code(`import java.io.*;

class Demo {
    public static void main(String[] args) throws IOException {
        FileInputStream f = new FileInputStream("data.txt");
    }
}`)}
      <p>They must be handled at compile time either with <code>try-catch</code> or by declaring <code>throws</code>.</p>
      ${code(`try {
    FileReader f = new FileReader("data.txt");
} catch (FileNotFoundException e) {
    System.out.println("File not found");
}

void readFile() throws FileNotFoundException {
    FileReader f = new FileReader("data.txt");
}`)}
      <h4>Unchecked exceptions</h4>
      <p>Unchecked exceptions occur at runtime and are not checked by the compiler. Examples include <code>ArithmeticException</code>, <code>NullPointerException</code>, <code>ArrayIndexOutOfBoundsException</code>, and <code>NumberFormatException</code>. They are not required to be handled at compile time, but they can be handled with <code>try-catch</code>.</p>
      <h4>Errors</h4>
      <p>Errors represent serious JVM or system problems from which applications generally cannot recover. Examples are <code>OutOfMemoryError</code>, <code>StackOverflowError</code>, and <code>VirtualMachineError</code>.</p>
      ${table(["Exception", "Error"], [["Usually caused by application conditions", "Usually caused by JVM/system problems"], ["Can generally be handled", "Generally should not be handled"], ["Examples: IOException, ArithmeticException", "Examples: OutOfMemoryError, StackOverflowError"], ["Application can often recover", "Recovery is usually difficult or impossible"]])}
      <h4>Four common unchecked-exception examples</h4>
      ${code(`// ArithmeticException: division by zero
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero.");
}

// ArrayIndexOutOfBoundsException: invalid array index
try {
    int[] numbers = {10, 20, 30};
    System.out.println(numbers[5]);
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Array index is out of bounds.");
}

// NullPointerException: null reference
try {
    String name = null;
    System.out.println(name.length());
} catch (NullPointerException e) {
    System.out.println("The object reference is null.");
}

// NumberFormatException: non-numeric String
try {
    int number = Integer.parseInt("ABC");
} catch (NumberFormatException e) {
    System.out.println("Invalid number format.");
}`)}
      ${output(`Cannot divide by zero.
Array index is out of bounds.
The object reference is null.
Invalid number format.`)}`),

    topic("Exception Handling", "Uncaught Exceptions", `
      <h4>Definition</h4>
      <p>If an exception occurs and there is no appropriate <code>catch</code> block to handle it, it becomes an <strong>uncaught exception</strong>.</p>
      <h4>JVM default exception handler</h4>
      <ol class="steps"><li>Displays the exception name.</li><li>Displays the error message.</li><li>Displays the stack trace.</li><li>Terminates the program.</li></ol>
      ${code(`class Demo {
    public static void main(String[] args) {
        int a = 10 / 0;
        System.out.println("Hello");
    }
}`)}
      ${output(`Exception in thread "main" java.lang.ArithmeticException: / by zero`)}
      <p>The statement <code>System.out.println("Hello");</code> is never executed.</p>`),

    topic("Exception Handling", "Using try and catch", `
      <h4>Purpose</h4>
      <p>The <code>try</code> block contains statements that may generate an exception. The <code>catch</code> block handles the exception.</p>
      ${code(`try {
    // Risky code
} catch (ExceptionType e) {
    // Handling code
}`)}
      <h4>Example</h4>
      ${code(`class Demo {
    public static void main(String[] args) {
        try {
            int result = 20 / 0;
            System.out.println(result);
        } catch (ArithmeticException e) {
            System.out.println("Division by zero is not allowed");
        }
        System.out.println("Program continues...");
    }
}`)}
      ${output(`Division by zero is not allowed
Program continues...`)}
      <div class="note"><b>Important point:</b> Once an exception occurs inside a <code>try</code> block, the remaining statements in that <code>try</code> block are skipped and Java searches for a suitable <code>catch</code> block.</div>`),

    topic("Exception Handling", "Multiple catch Clauses", `
      <h4>Purpose</h4>
      <p>A single <code>try</code> block can have multiple <code>catch</code> blocks to handle different types of exceptions.</p>
      ${code(`class Demo {
    public static void main(String[] args) {
        try {
            int[] a = {10, 20, 30};
            int result = 10 / 0;
            System.out.println(a[5]);
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic exception occurred");
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index is invalid");
        } catch (Exception e) {
            System.out.println("Some other exception occurred");
        }
    }
}`)}
      <h4>Important rule: order matters</h4>
      <p>The <strong>more specific exception must come before the more general exception</strong>.</p>
      ${code(`// Correct
catch (ArithmeticException e) {
}
catch (Exception e) {
}

// Incorrect - compile-time error
catch (Exception e) {
}
catch (ArithmeticException e) {
}`)}
      <p>The incorrect form fails because <code>Exception</code> already catches <code>ArithmeticException</code>.</p>`),

    topic("Exception Handling", "throw", `
      <h4>Purpose and syntax</h4>
      <p>The <code>throw</code> keyword explicitly throws an exception.</p>
      ${code(`throw new ExceptionType();`)}
      <h4>Example</h4>
      ${code(`class Demo {
    public static void main(String[] args) {
        int age = 15;
        if (age < 18) {
            throw new ArithmeticException("Not eligible to vote");
        }
        System.out.println("Eligible to vote");
    }
}`)}
      ${output(`Exception in thread "main" java.lang.ArithmeticException: Not eligible to vote`)}
      <h4>Another example</h4>
      ${code(`class Demo {
    static void checkAge(int age) {
        if (age < 18) {
            throw new IllegalArgumentException("Age must be 18 or above");
        }
        System.out.println("Eligible");
    }

    public static void main(String[] args) {
        checkAge(15);
    }
}`)}`),

    topic("Exception Handling", "throws", `
      <h4>Purpose and syntax</h4>
      <p>The <code>throws</code> keyword is used in a method declaration to indicate that the method may throw one or more exceptions.</p>
      ${code(`returnType methodName() throws ExceptionType {
    // code
}`)}
      <h4>Example</h4>
      ${code(`import java.io.*;

class Demo {
    static void readFile() throws IOException {
        FileInputStream f = new FileInputStream("data.txt");
    }

    public static void main(String[] args) throws IOException {
        readFile();
    }
}`)}
      <p><code>throws IOException</code> indicates that the method may generate an <code>IOException</code>.</p>
      <h4><code>throw</code> versus <code>throws</code></h4>
      ${table(["throw", "throws"], [["Explicitly throws an exception", "Declares exceptions"], ["Used inside a method/block", "Used in a method declaration"], ["Throws one exception object at a time", "Can declare multiple exceptions"], ["Followed by an exception object", "Followed by exception class names"], ["<code>throw new IOException();</code>", "<code>void test() throws IOException { }</code>"]])}`),

    topic("Exception Handling", "finally", `
      <h4>Purpose</h4>
      <p>The <code>finally</code> block contains statements that normally execute whether an exception occurs or not. It is commonly used for cleanup operations such as closing files or releasing resources.</p>
      ${code(`try {
    // Code
} catch (Exception e) {
    // Handling
} finally {
    // Cleanup
}`)}
      <h4>Example with an exception</h4>
      ${code(`class Demo {
    public static void main(String[] args) {
        try {
            int a = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Exception occurred");
        } finally {
            System.out.println("Finally block executed");
        }
    }
}`)}
      ${output(`Exception occurred
Finally block executed`)}
      <h4>Example without an exception</h4>
      ${code(`class Demo {
    public static void main(String[] args) {
        try {
            int a = 10 / 2;
            System.out.println(a);
        } finally {
            System.out.println("Finally block executed");
        }
    }
}`)}
      ${output(`5
Finally block executed`)}`),

    topic("Exception Handling", "Creating Your Own Exception Subclasses", `
      <h4>Custom exceptions</h4>
      <p>Java allows programmers to create user-defined or custom exceptions. To create one, extend the <code>Exception</code> class.</p>
      ${code(`class AgeException extends Exception {
    AgeException(String message) {
        super(message);
    }
}

class Demo {
    static void checkAge(int age) throws AgeException {
        if (age < 18) {
            throw new AgeException("Age is less than 18");
        }
        System.out.println("Eligible");
    }

    public static void main(String[] args) {
        try {
            checkAge(15);
        } catch (AgeException e) {
            System.out.println(e.getMessage());
        }
    }
}`)}
      ${output(`Age is less than 18`)}
      <p><code>AgeException extends Exception</code> &rarr; custom exception &rarr; <code>throw new AgeException()</code> &rarr; <code>catch()</code> &rarr; exception handled.</p>
      <h4>Attendance example</h4>
      ${code(`class LowAttendanceException extends Exception {
    LowAttendanceException(String message) {
        super(message);
    }
}

class Student {
    static void checkAttendance(int attendance)
            throws LowAttendanceException {
        if (attendance < 75) {
            throw new LowAttendanceException("Attendance is below 75%");
        }
        System.out.println("Student is eligible");
    }

    public static void main(String[] args) {
        try {
            checkAttendance(65);
        } catch (LowAttendanceException e) {
            System.out.println(e.getMessage());
        }
    }
}`)}
      ${output(`Attendance is below 75%`)}
      <h4>Complete exception-handling example</h4>
      ${code(`class Demo {
    static void divide(int a, int b) {
        try {
            int result = a / b;
            System.out.println("Result = " + result);
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        } finally {
            System.out.println("Division operation completed");
        }
    }

    public static void main(String[] args) {
        divide(20, 5);
        divide(20, 0);
    }
}`)}
      ${output(`Result = 4
Division operation completed
Cannot divide by zero
Division operation completed`)}
      ${table(["Concept", "Meaning"], [["Exception", "Abnormal condition during program execution"], ["try", "Contains risky code"], ["catch", "Handles an exception"], ["throw", "Explicitly throws an exception"], ["throws", "Declares possible exceptions"], ["finally", "Normally executes after try/catch"], ["Checked exception", "Checked by compiler"], ["Unchecked exception", "Occurs at runtime"], ["Uncaught exception", "Not handled by a suitable catch"], ["Custom exception", "Programmer-defined exception"]])}`),

    topic("I/O Streams", "Byte Streams", `
      <h4>Definition</h4>
      <p>I/O (Input/Output) streams are used in Java to read data from a source and write data to a destination. Java provides two main stream categories: <strong>byte streams</strong>, which handle data byte by byte, and <strong>character streams</strong>, which handle data character by character.</p>
      <p>Byte streams are mainly used for <strong>binary data</strong> such as images, audio, video, and PDF files.</p>
      <h4>Main byte-stream classes</h4>
      ${list([`<code>InputStream</code>`, `<code>OutputStream</code>`, `<code>FileInputStream</code>`, `<code>FileOutputStream</code>`])}
      <div class="note"><b>Key idea:</b> Use byte streams when the data is naturally a sequence of bytes, especially for binary files.</div>`),

    topic("I/O Streams", "InputStream", `
      <h4>Definition</h4>
      <p><code>InputStream</code> is an abstract class used to read bytes from an input source.</p>
      <h4>Common method</h4>
      <p><code>int read()</code> reads one byte at a time.</p>
      ${code(`import java.io.*;

class Demo {
    public static void main(String[] args) throws IOException {
        InputStream in = System.in;
        int data = in.read();
        System.out.println("Character: " + (char) data);
    }
}`)}
      <p>If the user enters <code>A</code>:</p>
      ${output(`Character: A`)}`),

    topic("I/O Streams", "OutputStream", `
      <h4>Definition</h4>
      <p><code>OutputStream</code> is an abstract class used to write bytes to an output destination.</p>
      <h4>Common methods</h4>
      ${list([`<code>write(int b)</code>`, `<code>write(byte[] b)</code>`, `<code>close()</code>`])}
      ${code(`import java.io.*;

class Demo {
    public static void main(String[] args) throws IOException {
        OutputStream out = System.out;
        out.write(65);
    }
}`)}
      ${output(`A`)}
      <p>The ASCII value <code>65</code> represents <code>A</code>.</p>`),

    topic("I/O Streams", "FileInputStream", `
      <h4>Definition</h4>
      <p><code>FileInputStream</code> is used to read bytes from a file.</p>
      <p>Suppose <code>input.txt</code> contains:</p>
      ${output(`Hello Java`)}
      ${code(`import java.io.*;

class Demo {
    public static void main(String[] args) throws IOException {
        FileInputStream fis = new FileInputStream("input.txt");
        int ch;
        while ((ch = fis.read()) != -1) {
            System.out.print((char) ch);
        }
        fis.close();
    }
}`)}
      ${output(`Hello Java`)}
      <div class="note"><b>Important:</b> <code>read()</code> returns a byte value while data is available and <code>-1</code> when the end of the file is reached.</div>`),

    topic("I/O Streams", "FileOutputStream", `
      <h4>Definition</h4>
      <p><code>FileOutputStream</code> is used to write bytes into a file.</p>
      ${code(`import java.io.*;

class Demo {
    public static void main(String[] args) throws IOException {
        FileOutputStream fos = new FileOutputStream("output.txt");
        String msg = "Welcome to Java";
        fos.write(msg.getBytes());
        fos.close();
        System.out.println("Data written successfully");
    }
}`)}
      <p>The file <code>output.txt</code> contains <code>Welcome to Java</code>.</p>
      <h4>Copying a file using byte streams</h4>
      <p>A common application of <code>FileInputStream</code> and <code>FileOutputStream</code> is file copying.</p>
      ${code(`import java.io.*;

class FileCopy {
    public static void main(String[] args) throws IOException {
        FileInputStream fis = new FileInputStream("input.txt");
        FileOutputStream fos = new FileOutputStream("copy.txt");
        int data;
        while ((data = fis.read()) != -1) {
            fos.write(data);
        }
        fis.close();
        fos.close();
        System.out.println("File copied successfully");
    }
}`)}
      ${output(`File copied successfully`)}
      <p><code>input.txt</code> &rarr; <code>FileInputStream</code> &rarr; program &rarr; <code>FileOutputStream</code> &rarr; <code>copy.txt</code>.</p>`),

    topic("I/O Streams", "Character Streams", `
      <h4>Definition</h4>
      <p>Character streams are designed for <strong>text data</strong>. They are useful when working with text files, characters, strings, and Unicode text.</p>
      <h4>Main character-stream classes</h4>
      ${list([`<code>Reader</code>`, `<code>Writer</code>`, `<code>FileReader</code>`, `<code>FileWriter</code>`])}
      <div class="note"><b>Key idea:</b> Use character streams for text and character/Unicode-oriented data.</div>`),

    topic("I/O Streams", "Reader", `
      <h4>Definition and methods</h4>
      <p><code>Reader</code> is an abstract class used to read character data.</p>
      ${list([`<code>read()</code> reads one character at a time.`, `<code>read(char[] c)</code> reads multiple characters at once into a character array.`, `<code>close()</code> closes the reader.`])}
      <h4>Read one character at a time</h4>
      ${code(`import java.io.*;

class Demo {
    public static void main(String[] args) throws IOException {
        Reader reader = new FileReader("input.txt");
        int ch;
        while ((ch = reader.read()) != -1) {
            System.out.print((char) ch);
        }
        reader.close();
    }
}`)}
      <h4>Read into a character array</h4>
      ${code(`import java.io.*;

public class ReadArrayExample {
    public static void main(String[] args) throws Exception {
        Reader r = new FileReader("input.txt");
        char[] c = new char[5];
        int n;
        while ((n = r.read(c)) != -1) {
            System.out.print(new String(c, 0, n));
        }
        r.close();
    }
}`)}`),

    topic("I/O Streams", "Writer", `
      <h4>Definition and methods</h4>
      <p><code>Writer</code> is an abstract class used to write character data.</p>
      ${list([`<code>write()</code> puts data into the writer/buffer.`, `<code>flush()</code> forces buffered data to the destination.`, `<code>close()</code> flushes the data and then closes the writer.`])}
      ${code(`import java.io.*;

class Demo {
    public static void main(String[] args) throws IOException {
        Writer writer = new FileWriter("output.txt");
        writer.write("Hello Java");
        writer.close();
        System.out.println("Data written");
    }
}`)}
      ${output(`Data written`)}`),

    topic("I/O Streams", "FileReader", `
      <h4>Definition</h4>
      <p><code>FileReader</code> is used to read character data from a text file.</p>
      ${code(`import java.io.*;

class Demo {
    public static void main(String[] args) throws IOException {
        FileReader fr = new FileReader("input.txt");
        int ch;
        while ((ch = fr.read()) != -1) {
            System.out.print((char) ch);
        }
        fr.close();
    }
}`)}
      <p>The loop reads characters until <code>read()</code> returns <code>-1</code>, then closes the file reader.</p>`),

    topic("I/O Streams", "FileWriter", `
      <h4>Definition</h4>
      <p><code>FileWriter</code> is used to write character data into a text file.</p>
      ${code(`import java.io.*;

class Demo {
    public static void main(String[] args) throws IOException {
        FileWriter fw = new FileWriter("output.txt");
        fw.write("Java Character Streams");
        fw.close();
        System.out.println("Successfully written");
    }
}`)}
      ${output(`Successfully written`)}
      <h4>Byte streams versus character streams</h4>
      ${table(["Byte streams", "Character streams"], [["Handle bytes", "Handle characters"], ["Used for binary data", "Used mainly for text"], ["InputStream / OutputStream", "Reader / Writer"], ["FileInputStream / FileOutputStream", "FileReader / FileWriter"], ["Suitable for images, audio, and similar data", "Suitable for text files"], ["8-bit-oriented data", "Character/Unicode-oriented text"]])}
      <div class="note"><b>Easy way to remember:</b> <code>FileInputStream</code>/<code>FileOutputStream</code> work with <strong>bytes</strong>; <code>FileReader</code>/<code>FileWriter</code> work with <strong>characters/text</strong>.</div>`)
  ];

  const U4 = [
    topic("Multithreaded Programming", "The Java Thread Model", `
      <h4>Multithreaded programming</h4>
      <p>Multithreading is an important feature of Java. It allows a program to perform multiple tasks concurrently, improving responsiveness and resource utilization. A <strong>thread</strong> is a lightweight unit of execution within a program.</p>
      <p>For example, a web browser can use separate threads for downloading a file, playing audio/video, processing user input, and displaying a web page.</p>
      <h4>Process versus thread</h4>
      ${table(["Feature", "Process", "Thread"], [["Definition", "Independent program in execution", "Unit of execution within a process"], ["Memory", "Own separate memory space", "Shares memory of the same process"], ["Communication", "More difficult and slower", "Easy through shared memory"], ["Creation", "Relatively slow", "Generally faster"], ["Resources", "Own memory and system resources", "Shares most process resources"], ["Failure", "Normally does not directly affect another process", "Can affect the entire process"], ["Execution", "Can contain one or more threads", "Part of a process"], ["Context switching", "Generally more expensive", "Generally less expensive"]])}
      <h4>The Java thread model consists of</h4>
      <ol class="steps"><li>Main thread</li><li>User-created threads</li><li>Thread priorities</li><li>Synchronization</li><li>Thread scheduler</li><li>Thread life cycle</li></ol>
      <h4>Thread life cycle</h4>
      <p>A thread moves through Java's <code>Thread.State</code> values from creation to completion: <code>NEW</code> (created, not started), <code>RUNNABLE</code> (eligible to run/executing), <code>BLOCKED</code> (waiting for a monitor lock), <code>WAITING</code> (waiting indefinitely, for example <code>wait()</code> or <code>join()</code>), <code>TIMED_WAITING</code> (waiting for a specified time, for example <code>sleep()</code> or <code>join(2000)</code>), and <code>TERMINATED</code> (the <code>run()</code> method has finished).</p>
      ${table(["State", "Description", "Example"], [["NEW", "Thread created but not started", "new Thread()"], ["RUNNABLE", "Ready to run / executing", "start()"], ["BLOCKED", "Waiting for a monitor lock", "synchronized"], ["WAITING", "Waiting indefinitely", "wait(), join()"], ["TIMED_WAITING", "Waiting for a specified time", "sleep(), join(2000)"], ["TERMINATED", "Execution completed", "run() finishes"]])}
      <div class="note"><b>Important:</b> A terminated thread cannot be started again.</div>`),

    topic("Multithreaded Programming", "The Main Thread", `
      <h4>Definition</h4>
      <p>The <strong>main thread</strong> is the first thread created by the JVM when a Java program starts. The <code>main()</code> method is executed by this thread.</p>
      ${list([`It is created automatically by the JVM.`, `Execution starts from <code>main()</code>.`, `It can create other threads.`, `Other threads can execute concurrently with the main thread.`])}
      ${code(`class MainThreadDemo {
    public static void main(String[] args) {
        Thread t = Thread.currentThread();
        System.out.println("Current Thread: " + t);
        System.out.println("Thread Name: " + t.getName());
        System.out.println("Thread Priority: " + t.getPriority());
    }
}`)}
      ${output(`Current Thread: Thread[main,5,main]
Thread Name: main
Thread Priority: 5`)}
      <p>The default priority of the main thread is normally <code>5</code>.</p>
      <h4>Changing the main-thread name</h4>
      ${code(`class MainThreadDemo {
    public static void main(String[] args) {
        Thread t = Thread.currentThread();
        t.setName("MainThread");
        System.out.println(t.getName());
    }
}`)}
      ${output(`MainThread`)}`),

    topic("Multithreaded Programming", "Creating a Thread", `
      <h4>Two traditional approaches</h4>
      <ol class="steps"><li>Extend the <code>Thread</code> class.</li><li>Implement the <code>Runnable</code> interface.</li></ol>
      <h4>Extending <code>Thread</code></h4>
      <p>Create a subclass of <code>Thread</code>, override <code>run()</code>, create an object, and call <code>start()</code>.</p>
      ${code(`class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }
}

class ThreadDemo {
    public static void main(String[] args) {
        MyThread t = new MyThread();
        t.start();
    }
}`)}
      ${output(`Thread is running`)}
      <div class="note"><b>Important:</b> Do not normally call <code>t.run()</code>. Call <code>t.start()</code>: it creates a new thread and the JVM eventually invokes <code>run()</code> in that thread. Calling <code>run()</code> directly is an ordinary method call in the current thread.</div>
      <h4>Implementing <code>Runnable</code></h4>
      ${code(`class MyTask implements Runnable {
    public void run() {
        System.out.println("Thread is running");
    }
}

class RunnableDemo {
    public static void main(String[] args) {
        MyTask task = new MyTask();
        Thread t = new Thread(task);
        t.start();
    }
}`)}
      <p><code>MyTask</code> is not a thread; it is a task that a <code>Thread</code> executes. Extending <code>Thread</code> means “I am a Thread”; implementing <code>Runnable</code> means “I am a Task to be executed by a Thread.”</p>`),

    topic("Multithreaded Programming", "Creating Multiple Threads", `
      <h4>Concurrent execution</h4>
      <p>Java allows multiple threads to execute concurrently.</p>
      ${code(`class MyThread extends Thread {
    String name;

    MyThread(String name) {
        this.name = name;
    }

    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(name + " : " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println(e);
            }
        }
    }
}

class MultipleThreadsDemo {
    public static void main(String[] args) {
        MyThread t1 = new MyThread("Thread 1");
        MyThread t2 = new MyThread("Thread 2");
        MyThread t3 = new MyThread("Thread 3");
        t1.start();
        t2.start();
        t3.start();
    }
}`)}
      ${output(`Possible output:
Thread 1 : 1
Thread 2 : 1
Thread 3 : 1
Thread 1 : 2
Thread 3 : 2
Thread 2 : 2
...`)}
      <div class="note"><b>Important:</b> The output order is not guaranteed. The thread scheduler determines which runnable thread gets CPU time.</div>
      ${table(["Concept", "Meaning"], [["extends Thread", "Creates a thread class"], ["run()", "Contains the thread task"], ["start()", "Starts a new thread"], ["sleep(500)", "Pauses the current thread for 500 ms"], ["t1, t2, t3", "Three independent thread objects"], ["InterruptedException", "May occur when a sleeping thread is interrupted"]])}`),

    topic("Multithreaded Programming", "Using isAlive() and join()", `
      <h4><code>isAlive()</code></h4>
      <p><code>isAlive()</code> checks whether a thread has started and has not yet terminated. It returns <code>true</code> while the thread is alive and <code>false</code> otherwise.</p>
      ${code(`class MyThread extends Thread {
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(i);
            try { Thread.sleep(500); }
            catch (InterruptedException e) { e.printStackTrace(); }
        }
    }
}

class AliveDemo {
    public static void main(String[] args) throws InterruptedException {
        MyThread t = new MyThread();
        System.out.println("Before start: " + t.isAlive());
        t.start();
        System.out.println("After start: " + t.isAlive());
        t.join();
        System.out.println("After completion: " + t.isAlive());
    }
}`)}
      ${output(`Possible output:
Before start: false
After start: true
1
2
3
After completion: false`)}
      <h4><code>join()</code></h4>
      <p><code>join()</code> makes the current thread wait until another thread finishes. <code>t.join(1000)</code> waits for at most approximately 1000 milliseconds for <code>t</code> to terminate.</p>
      ${code(`class MyThread extends Thread {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Child Thread: " + i);
        }
    }
}

class JoinDemo {
    public static void main(String[] args) throws InterruptedException {
        MyThread t = new MyThread();
        t.start();
        t.join();
        System.out.println("Main thread continues");
    }
}`)}
      ${table(["isAlive()", "join()"], [["Checks whether a thread is alive", "Waits for another thread to finish"], ["Returns boolean", "Returns void"], ["Does not stop/wait the current thread", "Causes the current thread to wait"], ["Checks status", "Coordinates completion"]])}
      <div class="note"><b>Key difference:</b> <code>t.start()</code> starts the child thread; <code>t.run()</code> executes as a normal method; <code>t.join()</code> waits for child <code>t</code>; <code>t.isAlive()</code> checks whether it is still alive.</div>`),

    topic("Multithreaded Programming", "Thread Priorities", `
      <h4>Priority constants</h4>
      <p>Every Java thread has a priority. Java provides three predefined priority constants, and the default priority is normally <code>5</code>.</p>
      ${table(["Constant", "Value"], [["Thread.MIN_PRIORITY", "1"], ["Thread.NORM_PRIORITY", "5"], ["Thread.MAX_PRIORITY", "10"]])}
      <p>Set a priority with <code>t.setPriority(8);</code> and get it with <code>int p = t.getPriority();</code>.</p>
      ${code(`class PriorityDemo {
    public static void main(String[] args) {
        Thread t1 = new Thread(() -> {
            System.out.println("Thread 1");
        });
        Thread t2 = new Thread(() -> {
            System.out.println("Thread 2");
        });

        t1.setPriority(Thread.MIN_PRIORITY);
        t2.setPriority(Thread.MAX_PRIORITY);
        System.out.println("T1 Priority: " + t1.getPriority());
        System.out.println("T2 Priority: " + t2.getPriority());
        t1.start();
        t2.start();
    }
}`)}
      <div class="note"><b>Important note:</b> Thread priority is a scheduling hint, not a guarantee. A higher-priority thread is not guaranteed to execute before a lower-priority thread.</div>`),

    topic("Multithreaded Programming", "Synchronization", `
      <h4>Definition and need</h4>
      <p>Thread synchronization controls the access of multiple threads to a shared resource. If multiple threads access the same data simultaneously, data inconsistency can result. Synchronization ensures that only one thread can access the critical section at a time.</p>
      <p>For example, if two threads execute <code>count++;</code> simultaneously, the final value may be incorrect. Synchronization prevents this race condition.</p>
      <h4>Synchronized method</h4>
      ${code(`class Counter {
    int count = 0;

    synchronized void increment() {
        count++;
    }
}

class MyThread extends Thread {
    Counter c;
    MyThread(Counter c) { this.c = c; }

    public void run() {
        for (int i = 1; i <= 1000; i++) {
            c.increment();
        }
    }
}

class SynchronizationDemo {
    public static void main(String[] args) throws Exception {
        Counter c = new Counter();
        MyThread t1 = new MyThread(c);
        MyThread t2 = new MyThread(c);
        t1.start();
        t2.start();
        t1.join();
        t2.join();
        System.out.println("Final Count = " + c.count);
    }
}`)}
      ${output(`Final Count = 2000`)}
      <p>Both threads share the same <code>Counter</code> object; <code>synchronized void increment()</code> permits only one thread to execute <code>increment()</code> at a time on that object.</p>
      <h4>Synchronized block</h4>
      <p>Instead of synchronizing the whole method, synchronize only the critical section.</p>
      ${code(`class Counter {
    int count = 0;

    void increment() {
        synchronized (this) {
            count++;
        }
    }
}`)}
      <p>A synchronized method locks the entire method; a synchronized block locks only the required code.</p>
      <h4>Advantages</h4>
      ${list([`Prevents data inconsistency.`, `Avoids race conditions.`, `Provides thread safety.`, `Controls access to shared resources.`, `Ensures one thread executes the critical section at a time.`])}`),

    topic("Lambda Expressions", "Introducing Lambda Expressions", `
      <h4>Definition</h4>
      <p>Lambda expressions were introduced in Java 8. They provide a simple, short way to write the implementation of a functional interface. A <strong>functional interface</strong> contains exactly one abstract method.</p>
      ${code(`@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
}`)}
      <p><code>Calculator</code> is functional because it has only one abstract method, <code>calculate()</code>. The one-method rule avoids ambiguity when a lambda is used.</p>
      <h4>Why only one abstract method?</h4>
      ${code(`interface Calculator {
    int add(int a, int b);
    int subtract(int a, int b);
}

// Ambiguous: which method should receive this lambda?
Calculator c = (a, b) -> a + b;`)}
      <p>The lambda has no method name. Both <code>add(int, int)</code> and <code>subtract(int, int)</code> match the parameter/return types, so Java cannot decide which method it implements.</p>
      <h4>Syntax</h4>
      ${code(`(parameters) -> expression
// Example: (a, b) -> a + b

(parameters) -> {
    // statements
}
// Example: (a, b) -> { int sum = a + b; return sum; }`)}
      <h4>Traditional class versus lambda</h4>
      ${code(`// Traditional approach
class Addition implements Calculator {
    public int calculate(int a, int b) {
        return a + b;
    }
}

// Lambda approach
@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
}

public class Demo {
    public static void main(String[] args) {
        Calculator c = (a, b) -> a + b;
        System.out.println(c.calculate(10, 20));
    }
}`)}
      ${output(`30`)}
      <p>In <code>(a, b) -&gt; a + b</code>, <code>a</code> and <code>b</code> are parameters of <code>calculate()</code>, <code>-&gt;</code> is the lambda operator, and <code>a + b</code> is its implementation.</p>`),

    topic("Lambda Expressions", "Block Lambda Expressions", `
      <h4>Definition</h4>
      <p>A lambda containing multiple statements is called a <strong>block lambda expression</strong>.</p>
      ${code(`interface Calculator {
    int calculate(int a, int b);
}

class Demo {
    public static void main(String[] args) {
        Calculator c = (a, b) -> {
            int result = a + b;
            System.out.println("Calculating...");
            return result;
        };
        System.out.println(c.calculate(10, 20));
    }
}`)}
      ${output(`Calculating...
30`)}
      ${table(["Expression lambda", "Block lambda"], [["<code>(a, b) -&gt; a + b</code>", `<code>(a, b) -&gt; { int result = a + b; return result; }</code>`]])}
      <div class="note"><b>Note:</b> When a block lambda returns a value, the <code>return</code> statement is required.</div>`),

    topic("Lambda Expressions", "Generic Functional Interfaces", `
      <h4>Definition</h4>
      <p>A <strong>generic functional interface</strong> uses generics so that the same interface can work with different data types.</p>
      <h4>Non-generic and generic declarations</h4>
      ${code(`@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
}

@FunctionalInterface
interface Calculator<T> {
    T calculate(T a, T b);
}`)}
      <p>The first form works only with <code>int</code>. In the generic form, <code>Calculator&lt;Integer&gt;</code> replaces <code>T</code> with <code>Integer</code>; <code>Calculator&lt;String&gt;</code> replaces <code>T</code> with <code>String</code>.</p>
      ${code(`Calculator<Integer> c1 = (a, b) -> a + b;
System.out.println(c1.calculate(10, 20));

Calculator<String> c2 = (a, b) -> a + b;
System.out.println(c2.calculate("Hello ", "Java"));`)}
      ${output(`30
Hello Java`)}
      <h4>Complete example</h4>
      ${code(`@FunctionalInterface
interface Calculator<T> {
    T calculate(T a, T b);
}

public class Main {
    public static void main(String[] args) {
        Calculator<Integer> c1 = (a, b) -> a + b;
        System.out.println(c1.calculate(10, 20));

        Calculator<String> c2 = (a, b) -> a + b;
        System.out.println(c2.calculate("Hello ", "Java"));
    }
}`)}
      ${output(`30
Hello Java`)}`),

    topic("Lambda Expressions", "Passing Lambda Expressions as Arguments", `
      <h4>Definition</h4>
      <p>A lambda expression can be passed as an argument to a method just like an object or a value. The method must accept a functional interface as its parameter.</p>
      ${code(`@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
}

class Demo {
    static void perform(int a, int b, Calculator c) {
        System.out.println(c.calculate(a, b));
    }

    public static void main(String[] args) {
        perform(10, 5, (x, y) -> x + y);
        perform(10, 5, (x, y) -> x - y);
        perform(10, 5, (x, y) -> x * y);
    }
}`)}
      ${output(`15
5
50`)}
      <h4>Greeting example</h4>
      ${code(`interface Greeting {
    void sayHello(String name);
}

class Demo {
    static void display(Greeting g) {
        g.sayHello("Ramesh");
    }

    public static void main(String[] args) {
        display(name -> System.out.println("Hello " + name));
    }
}`)}
      ${output(`Hello Ramesh`)}
      <h4>Advantages</h4>
      ${list([`Passes behavior as an argument.`, `Reduces the need for separate implementation classes.`, `Makes programs concise and readable.`, `Supports functional programming in Java.`, `Useful with collections, streams, threads, and event handling.`])}`),

    topic("Lambda Expressions", "Lambda Expressions and Exceptions", `
      <h4>Checked exceptions in lambda bodies</h4>
      <p>A lambda can throw an exception only when the abstract method of its target functional interface permits that exception. Checked exceptions must be declared in that method's <code>throws</code> clause or handled inside the lambda.</p>
      ${code(`import java.io.IOException;

@FunctionalInterface
interface FileAction {
    void run() throws IOException;
}

class Demo {
    public static void main(String[] args) {
        FileAction action = () -> {
            throw new IOException("File cannot be read");
        };

        try {
            action.run();
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
}`)}
      ${output(`File cannot be read`)}
      <h4>Handling an exception inside a lambda</h4>
      ${code(`Runnable task = () -> {
    try {
        int value = 10 / 0;
    } catch (ArithmeticException e) {
        System.out.println("Cannot divide by zero");
    }
};

task.run();`)}
      ${output(`Cannot divide by zero`)}
      <div class="note"><b>Key point:</b> The lambda must obey the exception contract of the functional interface. It may handle an exception locally, or it may propagate a checked exception only when the interface method declares it.</div>`),

    topic("Lambda Expressions", "Lambda Expressions and Variable Capture", `
      <h4>Variable capture</h4>
      <p>A lambda can use a local variable from its enclosing method. This is called <strong>variable capture</strong>. A captured local variable must be <strong>final or effectively final</strong>: it is assigned once and not changed afterwards.</p>
      ${code(`class Demo {
    public static void main(String[] args) {
        int limit = 10;          // effectively final
        Runnable task = () -> System.out.println(limit);
        task.run();
    }
}`)}
      ${output(`10`)}
      <h4>Why reassignment is invalid</h4>
      ${code(`int count = 1;
Runnable task = () -> System.out.println(count);
// count = 2;  // Error: count is captured by the lambda`)}
      <p>Instance variables and static variables are not local captured variables; a lambda can access and modify them subject to normal Java access rules.</p>
      ${code(`class Counter {
    int count = 0;

    Runnable increment = () -> {
        count++;
        System.out.println(count);
    };

    public static void main(String[] args) {
        Counter c = new Counter();
        c.increment.run();
    }
}`)}
      ${output(`1`)}
      <div class="note"><b>Key point:</b> Final/effectively-final local variables make captured values stable and prevent ambiguous changes to a local variable shared with a lambda.</div>`),

    topic("Lambda Expressions", "Method References", `
      <h4>Definition</h4>
      <p>A method reference is a compact form of a lambda expression that refers to an existing method. The target functional-interface method supplies the required parameter and return types.</p>
      <h4>Static-method reference</h4>
      ${code(`import java.util.function.Function;

Function<String, Integer> length = String::length;
System.out.println(length.apply("Java"));`)}
      ${output(`4`)}
      <h4>Instance-method reference for a particular object</h4>
      ${code(`import java.util.function.Supplier;

String text = "java";
Supplier<String> upper = text::toUpperCase;
System.out.println(upper.get());`)}
      ${output(`JAVA`)}
      <h4>Instance-method reference for an arbitrary object of a type</h4>
      ${code(`import java.util.function.BiPredicate;

BiPredicate<String, String> equalIgnoreCase = String::equalsIgnoreCase;
System.out.println(equalIgnoreCase.test("Java", "JAVA"));`)}
      ${output(`true`)}
      <h4>Constructor reference</h4>
      ${code(`import java.util.function.Supplier;

Supplier<StringBuilder> builder = StringBuilder::new;
StringBuilder sb = builder.get();
sb.append("Java");
System.out.println(sb);`)}
      ${output(`Java`)}
      ${table(["Form", "Syntax"], [["Static method", "<code>ClassName::staticMethod</code>"], ["Particular object instance method", "<code>objectRef::instanceMethod</code>"], ["Arbitrary object instance method", "<code>ClassName::instanceMethod</code>"], ["Constructor", "<code>ClassName::new</code>"]])}
      <div class="note"><b>Key point:</b> Use a method reference when an existing method already performs the lambda's required operation; it improves concision without changing the functional-interface contract.</div>`)
  ];

  U3.forEach((item, index) => item.id = `u3t${index + 1}`);
  U4.forEach((item, index) => item.id = `u4t${index + 1}`);

  Object.assign(UN[2], {
    d: "Package organization, interfaces, exception handling, and Java input/output streams.",
    th: U3,
    lab: []
  });
  Object.assign(UN[3], {
    d: "Java threads, synchronization, functional interfaces, and lambda expressions.",
    th: U4,
    lab: []
  });

  nTh = theoryCount();
  render();
})();
