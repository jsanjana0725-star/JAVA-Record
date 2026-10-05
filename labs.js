/*
  The single source of truth for every weekly-assessment item.
  Theory continues to live in content.js / units34.js; this file contains
  the supplied lab activities and questions only. Unit views filter this
  array, so an item is never copied into a second data set.
*/
const labPrograms = [];

const addLab = (week, unitId, topic, title, question, options = {}) => {
  labPrograms.push({
    id: options.id || `week${week}-${labPrograms.length + 1}`,
    week,
    wk: `Week ${week}`,
    unitId,
    topic,
    g: topic,
    title,
    t: title,
    aim: options.aim || question,
    question,
    code: options.code || null,
    output: options.output || null,
    labType: options.labType || (options.code ? "program" : "question"),
    details: options.details || "",
    resources: options.resources || [],
    source: options.source || "Supplied Java Programming record material"
  });
};

/* Week 1-3 reuse the Java code already present in the original project. */
const week1Task = `Create a comparative table for Java, C, C++, Python, and JavaScript based on the following parameters:\n\nLanguage / Package Name\nOpen Source or Commercial\nCompiler or Interpreter\nObject-Oriented Programming Support (Yes/No)\nDeveloper Organization\nDeveloper (Person)\nCurrent Major Version (2026)\nPrimary Purpose\nCommon Applications\nDatabase Support\nMemory Management\nSecurity Features\nPerformance\nPlatform Independence\nOther Important Features\nEase of Learning\nPopular IDEs\nCompilation Output\nAdvantages\nLimitations\n\nInstructions:\nCollect information from official documentation and reliable sources.\nPrepare the comparison in a tabular format.\nHighlight the unique features of each language.\nIdentify which language is most suitable for: System Programming, Enterprise Applications, Web Development, Artificial Intelligence, and Mobile Application Development.\nWrite a brief conclusion (100–150 words) summarizing your findings.`;
const installationTask = `Installation of Java and Execution of a Simple Hello World Program (Windows) in Oracle JDK\n\nSoftware Required\nWindows Operating System\nInternet Connection\nJava Development Kit (JDK)\n\nStep 1: Download Java JDK\nOpen a web browser. Visit the official Oracle JDK website: Oracle JDK Downloads. Download the latest JDK for Windows (e.g., JDK 25).\n\nStep 2: Install JDK\nDouble-click the downloaded .exe file. Click Next and follow the installation wizard. Complete the installation.\n\nStep 3: Verify Java Installation\nOpen Command Prompt. Type: java --version\nSample Output: java 25 2026-09-15\nCheck the Java Compiler: javac --version\nSample Output: javac 25\n\nConfiguring Java on Windows (Setting JAVA_HOME and PATH)\nStep 1: Find Java Installation Path\nAfter installing Java, locate the JDK folder. Example: C:\\Program Files\\Java\\jdk-25\n\nStep 2: Set JAVA_HOME\nPress Windows + R → Type sysdm.cpl → Press Enter. Select Advanced tab. Click Environment Variables. Under System Variables, click New. Enter: Variable Name: JAVA_HOME; Variable Value: C:\\Program Files\\Java\\jdk-25. Click OK.\n\nStep 3: Update PATH Variable\nUnder System Variables, select Path. Click Edit. Click New. Add: %JAVA_HOME%\\bin. Click OK → OK → OK.\n\nStep 4: Verify Configuration\nOpen a new Command Prompt and execute: echo %JAVA_HOME%\nOutput: C:\\Program Files\\Java\\jdk-25\nCheck Java version: java --version\nCheck Java compiler: javac --version\nSample Output: java 25; javac 25\n\nAlternative Method (Command Line)\nRun Command Prompt as Administrator:\nsetx JAVA_HOME "C:\\Program Files\\Java\\jdk-25" /M\nsetx PATH "%PATH%;C:\\Program Files\\Java\\jdk-25\\bin" /M\nRestart Command Prompt and verify: java --version; javac --version\n\nCommon Commands\njava --version :: Check Java Runtime\njavac --version :: Check Java Compiler\nwhere java :: Display Java executable path\nwhere javac :: Display Java compiler path\necho %JAVA_HOME% :: Display JAVA_HOME value\n\nPaths settings in Java:\nJAVA_HOME — Points to the JDK installation directory — C:\\Program Files\\Java\\jdk-25\nPATH — Allows java and javac commands to run from any directory — %JAVA_HOME%\\bin\nCLASSPATH — Tells Java where to find user-defined classes and libraries — .;C:\\Java\\lib\\*\n\n1. JAVA_HOME\nJAVA_HOME=C:\\Program Files\\Java\\jdk-25\nStores the JDK location.\n\n2. PATH\n%JAVA_HOME%\\bin\nAllows commands like: java --version; javac Hello.java\n\n3. CLASSPATH\n.;C:\\MyJavaPrograms\nUsed to locate Java classes and JAR files.\n\nFor Basic Java Programming Labs, usually only JAVA_HOME and PATH are needed. CLASSPATH is often not required for simple programs because Java uses the current directory by default.`;

const unit1Programs = LEGACY_UNIT1.slice(3);
addLab(1, 1, "Comparative Study", "Comparative Table — Java, C, C++, Python & JavaScript", week1Task, {
  id: "week1-comparative-table",
  labType: "activity",
  aim: "Prepare the required comparative study using reliable sources.",
  resources: [
    { label: "Ask ChatGPT", url: "https://chatgpt.com/" },
    { label: "Search Google", url: "https://www.google.com/search?q=compare+Java+C+C%2B%2B+Python+JavaScript" }
  ]
});
addLab(2, 1, "Java Installation & Configuration", "Oracle JDK Installation, Java Configuration & Hello World", installationTask, { id: "week2-oracle-jdk", labType: "activity", aim: "Install Oracle JDK on Windows, configure Java, and verify the installation." });
addLab(2, 1, "Java Installation & Configuration", "OpenJDK Installation — Windows", "Install OpenJDK on Windows, configure JAVA_HOME and PATH, and verify the Java runtime and compiler from a new Command Prompt.", { id: "week2-openjdk", labType: "activity", aim: "Install and verify an OpenJDK distribution on Windows." });
unit1Programs.forEach((item, index) => {
  const title = item.t.replace(/^Program \d+ — /, "");
  Object.assign(item, {
    id: `week3-program${index + 1}`,
    week: 3,
    wk: "Week 3",
    unitId: 1,
    topic: title,
    g: title,
    title: item.t,
    question: item.aim,
    output: item.out,
    labType: "program",
    details: item.exp,
    source: "Existing Java record program content"
  });
  labPrograms.push(item);
});

/* The supplied course outline names these Week 5 activities, but provides no program statement/code. */
addLab(5, 2, "Classes and Objects", "Class Fundamentals", "Class Fundamentals", { id: "week5-class-fundamentals", labType: "activity", aim: "Study the supplied Class Fundamentals material." });
addLab(5, 2, "Classes and Objects", "Declaring Objects", "Declaring Objects", { id: "week5-declaring-objects", labType: "activity", aim: "Study the supplied Declaring Objects material." });
addLab(5, 2, "Classes and Objects", "Assigning Object Reference Variables", "Assigning Object Reference Variables", { id: "week5-object-references", labType: "activity", aim: "Study the supplied Assigning Object Reference Variables material." });

const unit2Programs = [
  ["Class Fundamentals", "Student Information System", "Develop a Java program to create a Student class with data members such as Roll Number, Name, Branch, and CGPA. Create an object of the class, initialize the data, and display the student information using a method."],
  ["Class Fundamentals", "Employee Information System", "Develop a Java program to create an Employee class containing Employee ID, Name, Department, and Salary. Create an object of the class and display the employee details."],
  ["Declaring Objects", "Book Details", "Write a Java program to declare and create three objects of a Book class. Display the details of all books using object references."],
  ["Declaring Objects", "Array of Student Objects", "Write a Java program to create an array of five Student objects, accept their details from the user, and display all student information."],
  ["Assigning Object Reference Variables", "Reference Assignment", "Develop a Java program to create a Student object and assign its reference to another reference variable. Modify the object through one reference and observe the changes using the other reference."],
  ["Assigning Object Reference Variables", "Comparing Object References", "Write a Java program to create two reference variables pointing to the same Employee object. Compare the references using the == operator and display the result."],
  ["Introducing Methods", "Calculator Using Methods", "Develop a Java program to create a Calculator class with methods to perform addition, subtraction, multiplication, and division of two numbers."],
  ["Introducing Methods", "Rectangle Operations", "Write a Java program to create a Rectangle class with methods to calculate and display the area and perimeter of a rectangle."],
  ["Constructors", "Student Constructors", "Develop a Java program to demonstrate the use of default and parameterized constructors for initializing student information."],
  ["Constructors", "Constructor Overloading", "Write a Java program to demonstrate constructor overloading in a BankAccount class by creating objects using different constructors."],
  ["The this Keyword", "Using this Keyword", "Develop a Java program to demonstrate the use of the this keyword to distinguish instance variables from local variables."],
  ["The this Keyword", "Constructor Chaining", "Write a Java program to demonstrate constructor chaining using the this() constructor in a Student class."],
  ["Garbage Collection", "Demonstrating Garbage Collection", "Develop a Java program to create multiple objects, make them eligible for garbage collection, and invoke System.gc()."],
  ["Garbage Collection", "Object Eligibility for Garbage Collection", "Write a Java program to demonstrate different ways of making objects eligible for garbage collection, such as null assignment, reassignment, and anonymous objects."],
  ["Method Overloading", "Overloading Arithmetic Methods", "Develop a Java program to overload the add() method for different parameter lists."],
  ["Method Overloading", "Overloading Area Methods", "Write a Java program to overload the area() method to calculate the area of a circle, rectangle, and square."],
  ["Using Objects as Parameters", "Passing Student Object", "Develop a Java program to pass a Student object as a parameter to a method and display the student details."],
  ["Using Objects as Parameters", "Comparing Employee Salaries", "Write a Java program to pass two Employee objects to a method that compares their salaries and displays the employee with the higher salary."],
  ["Returning Objects", "Returning a Student Object", "Develop a Java program in which a method creates and returns a Student object. Display the returned object's details."],
  ["Returning Objects", "Returning a Bank Account Object", "Write a Java program in which a method updates the balance of a BankAccount object and returns the updated object."],
  ["Understanding static", "Static Variable", "Develop a Java program to count the total number of Student objects created using a static variable."],
  ["Understanding static", "Static Methods", "Write a Java program to create a utility class containing static methods for calculating the square, cube, and factorial of a number."],
  ["Introducing final", "Final Keyword", "Develop a Java program to demonstrate the use of final variables, final methods, and final classes."],
  ["Introducing final", "Blank Final Variable", "Write a Java program to initialize a blank final variable through a constructor and use it to assign a unique employee ID."],
  ["Nested Classes", "College and Department", "Develop a Java program to create a College class containing a static nested Department class. Display the department details."],
  ["Nested Classes", "Employee Address", "Write a Java program to create an Employee class with a static nested Address class and demonstrate accessing the nested class from the main method."],
  ["Inner Classes", "Student Address", "Develop a Java program to create a Student class containing an inner Address class. Display the student and address information."],
  ["Inner Classes", "Library Management", "Write a Java program to create a Library class containing an inner Book class. Demonstrate how the inner class accesses the members of the outer class."]
];
unit2Programs.forEach(([topic, title, question], index) => addLab(6, 2, topic, title, question, { id: `week6-program${index + 1}` }));

const week7Programs = [
  ["String Handling", "String Constructors", "Write a Java program to demonstrate different ways of creating and initializing String objects using various String constructors.\n\nRequirements:\nCreate a String using a string literal.\nCreate a String using new String().\nCreate a String from a character array.\nCreate a String from a byte array.\nDisplay all the created strings.\nDemonstrate the difference between String objects created using literals and new."],
  ["String Handling", "StringBuffer Class", "Write a Java program to demonstrate the functionality of the StringBuffer class by performing various mutable string operations.\n\nRequirements:\nCreate a StringBuffer object.\nAppend text to the buffer.\nInsert text at a specified position.\nReplace a portion of the string.\nDelete characters from the buffer.\nReverse the contents.\nDisplay the current length and capacity of the StringBuffer."],
  ["String Handling", "StringTokenizer Class", "Write a Java program to tokenize a given sentence using the StringTokenizer class and display each individual token.\n\nRequirements:\nRead a sentence from the user.\nUse StringTokenizer to split the sentence into words.\nDisplay each token separately.\nDisplay the total number of tokens.\nRepeat the operation using a user-specified delimiter."],
  ["Inheritance", "Basic Inheritance", "Write a Java program to demonstrate single inheritance by creating a superclass containing common properties and methods and a subclass that inherits and extends the functionality of the superclass.\n\nRequirements:\nCreate a superclass Person with attributes such as name and age.\nDefine a method to display the person details.\nCreate a subclass Student that inherits from Person.\nAdd student-specific attributes such as roll number and branch.\nDisplay all details using the subclass object."],
  ["Inheritance", "Using super Keyword", "Write a Java program to demonstrate the use of the super keyword for accessing superclass variables, methods, and constructors.\n\nRequirements:\nCreate a superclass Employee with appropriate variables and methods.\nCreate a subclass Manager.\nUse super to access a superclass variable.\nUse super to invoke a superclass method.\nUse super() to invoke the superclass constructor.\nDisplay the complete employee and manager details."]
];
week7Programs.forEach(([topic, title, question], index) => addLab(7, 2, topic, title, question, { id: `week7-experiment${index + 1}` }));

const week8Programs = [
  ["Single Inheritance", "Write a Java program to demonstrate single inheritance by creating a Person superclass containing the name and age of a person. Create a Student subclass containing roll number and branch. Inherit the properties of Person and display the complete student details."],
  ["Using super Keyword", "Write a Java program to demonstrate the use of the super keyword. Create a Vehicle superclass with a speed variable and a display() method. Create a Car subclass with a model variable and override the display() method. Use super to access the superclass variable and method."],
  ["Multilevel Inheritance", "Write a Java program to demonstrate multilevel inheritance by creating three classes: Person, Employee, and Manager. The Person class should contain personal details, Employee should contain employee details, and Manager should contain department details. Display all the details using inherited properties."],
  ["Method Overriding", "Write a Java program to demonstrate method overriding by creating an Animal superclass with a sound() method. Create subclasses Dog and Cat that override the sound() method with their respective sounds. Display the appropriate sound for each animal."],
  ["Dynamic Method Dispatch", "Write a Java program to demonstrate dynamic method dispatch using a superclass Shape and subclasses Circle, Rectangle, and Triangle. Override the draw() method in each subclass and use a superclass reference to invoke the appropriate overridden method at runtime."],
  ["super with Method Overriding", "Write a Java program to demonstrate the use of super with method overriding. Create an Employee class with a display() method and derive a Manager class that overrides the method. Use super.display() in the subclass to invoke the superclass implementation before displaying the manager details."],
  ["Multilevel Inheritance for Salary Calculation", "Write a Java program to create a multilevel inheritance hierarchy Employee → Developer → SeniorDeveloper. Store basic salary in the Employee class, programming allowance in the Developer class, and project allowance in the SeniorDeveloper class. Calculate and display the total salary."],
  ["Dynamic Method Dispatch for Bank Accounts", "Write a Java program to demonstrate dynamic method dispatch using a superclass BankAccount with a calculateInterest() method. Create SavingsAccount and CurrentAccount subclasses with different implementations of the method. Use a superclass reference to calculate interest for different account types."],
  ["Constructor Execution in Multilevel Inheritance", "Write a Java program to demonstrate the order of constructor execution in multilevel inheritance using the classes Person, Student, and GraduateStudent. Use constructors in all three classes and display messages to show the order in which the constructors are executed."],
  ["Banking Application Using Inheritance", "Write a Java program to develop a simple banking application using inheritance. Create a BankAccount superclass with account number and balance. Derive SavingsAccount and CurrentAccount classes and provide suitable methods for deposit, withdrawal, and interest calculation. Demonstrate inheritance and method overriding."]
];
week8Programs.forEach(([title, question], index) => addLab(8, 2, "Inheritance", title, question, { id: `week8-program${index + 1}` }));

const week9Programs = [
  ["Creating and Using a User-Defined Package", "To create a user-defined package and access its class from another Java program.\n\nTasks:\nCreate a package named mypackage.\nCreate a class Student inside the package.\nDefine student details and a method to display them.\nCreate another class outside the package.\nImport and use the Student class."],
  ["Importing Packages", "To demonstrate different ways of importing and accessing classes from a package.\n\nTasks:\nCreate a package college.\nCreate classes Student and Faculty.\nImport a specific class from the package.\nDemonstrate wildcard import using college.*.\nAccess the classes from another program."],
  ["Packages and Member Access", "To demonstrate the accessibility of class members across packages using access modifiers.\n\nTasks: Create a class containing public member, private member, protected member, and default member. Access these members from the same class, another class in the same package, and a class in a different package."],
  ["Demonstrate CLASSPATH", "To demonstrate how Java uses the CLASSPATH to locate user-defined packages and classes.\n\nTasks:\nCreate a package utilities.\nCreate a class Calculator.\nCompile the package.\nSet the CLASSPATH.\nWrite another Java program that uses the Calculator class.\nCompile and execute the program using the configured CLASSPATH."],
  ["Package Containing Multiple Classes", "To create and use a package containing multiple classes.\n\nTasks: Create a package named bank containing Account, Customer, and Transaction. Create a main class outside the package and access all three classes."],
  ["Defining and Implementing an Interface", "Create an interface and implement its methods in a class.\n\nProblem Statement: Create an interface Shape containing a method area(). Implement the interface using Circle and Rectangle classes."],
  ["Implementing Multiple Interfaces", "To demonstrate how a class can implement multiple interfaces.\n\nProblem Statement: Create two interfaces: Printable with print(), and Showable with show(). Create a class Demo that implements both interfaces.\n\nExpected Output:\nPrinting...\nShowing..."],
  ["Interface-Based Polymorphism", "To demonstrate polymorphism using an interface reference.\n\nProblem Statement: Create an interface Vehicle with a method start(). Implement it using Car and Bike. Use Vehicle v; and assign objects of both Car and Bike to the reference."],
  ["Variables in Interfaces", "To demonstrate variables declared inside an interface.\n\nProblem Statement: Create an interface Constants containing constants such as int MAX_MARKS = 100; and double PI = 3.14159;. Access these variables from a class implementing the interface.\n\nTasks:\nDeclare variables in an interface.\nAccess them using the interface name.\nDemonstrate that interface variables are constants."],
  ["Nested Interfaces", "To demonstrate the concept of nested interfaces.\n\nProblem Statement: Create an outer class University containing a nested interface Department. Implement the nested interface in another class and demonstrate its functionality."],
  ["Interface Inheritance", "To demonstrate inheritance between interfaces.\n\nProblem Statement: Create interface Animal; interface Dog extends Animal; and class Labrador implements Dog. Animal should contain eat(), while Dog should contain bark(). Implement both methods in Labrador."],
  ["Real-World Application Using Interfaces", "To develop a Java application using interfaces.\n\nProblem Statement: Develop a Payment Processing System using an interface Payment. The interface should contain void pay(double amount);. Implement it using CreditCardPayment, UPIPayment, and NetBankingPayment. The main program should allow the user to select a payment method and process the payment.\n\nConcepts Covered:\nInterfaces\nImplementing interfaces\nPolymorphism\nAbstraction\nMultiple implementations\nReal-world application of interfaces"]
];
week9Programs.forEach(([title, question], index) => addLab(9, 3, index < 5 ? "Packages" : "Interfaces", `Experiment ${index + 1} — ${title}`, question, { id: `week9-experiment${index + 1}` }));

const exceptionPrograms = [
  "Write a Java program to demonstrate exception handling using try and catch by handling division by zero.",
  "Write a Java program to demonstrate different types of exceptions such as ArithmeticException, ArrayIndexOutOfBoundsException, and NullPointerException.",
  "Write a Java program to demonstrate an uncaught exception and observe the default JVM exception message and stack trace.",
  "Write a Java program to handle multiple exceptions using multiple catch clauses.",
  "Write a Java program to demonstrate the use of the throw statement to explicitly generate an exception when a given condition is violated.",
  "Write a Java program to demonstrate the use of the throws keyword by propagating an exception to the calling method.",
  "Write a Java program to demonstrate the use of the finally block for executing statements regardless of whether an exception occurs.",
  "Write a Java program to create a user-defined exception by extending the Exception class.",
  "Write a Java program to validate a student's marks and throw a custom exception when the marks are outside the valid range.",
  "Write a Java program that combines try, multiple catch, throw, throws and finally in a single application."
];
exceptionPrograms.forEach((question, index) => addLab(10, 3, "Exception Handling", `Exception Program ${index + 1}`, question, { id: `week10-exception${index + 1}` }));
const byteStreamPrograms = [
  "Write a Java program to demonstrate the use of InputStream and OutputStream to read bytes from an input source and write bytes to an output destination.",
  "Write a Java program to read the contents of a file byte-by-byte using FileInputStream and display the contents on the console.",
  "Write a Java program to write data into a file using FileOutputStream and verify the contents of the file.",
  "Write a Java program to copy the contents of one file to another file using FileInputStream and FileOutputStream.",
  "Write a Java program to copy an image from one file to another using byte streams and handle FileNotFoundException and IOException using try-catch-finally."
];
byteStreamPrograms.forEach((question, index) => addLab(10, 3, "I/O Streams — Byte Streams", `Byte Stream Program ${index + 1}`, question, { id: `week10-byte-stream${index + 1}` }));

const week11Programs = [
  [3, "Character Streams", "Write a Java program to read characters from the keyboard using Reader and display them on the console using Writer."],
  [3, "Character Streams", "Write a Java program to read the contents of a text file using FileReader and display them on the console."],
  [3, "Character Streams", "Write a Java program to write text into a file using FileWriter."],
  [3, "Character Streams", "Write a Java program to copy the contents of one text file into another using FileReader and FileWriter."],
  [3, "Character Streams", "Write a Java program to count the number of characters, words, and lines in a text file using character streams."],
  [4, "Multithreading", "Write a Java program to demonstrate the Main Thread and display its name, priority, and state."],
  [4, "Multithreading", "Write a Java program to create a thread by extending the Thread class."],
  [4, "Multithreading", "Write a Java program to create a thread by implementing the Runnable interface."],
  [4, "Multithreading", "Write a Java program to create multiple threads and demonstrate their concurrent execution."],
  [4, "Multithreading", "Write a Java program to demonstrate the use of isAlive() method to check whether a thread is running."],
  [4, "Multithreading", "Write a Java program to demonstrate the use of join() method to make one thread wait for another thread to complete."],
  [4, "Multithreading", "Write a Java program to create multiple threads and use isAlive() and join() to control their execution order."]
];
week11Programs.forEach(([unitId, topic, question], index) => addLab(11, unitId, topic, `${topic === "Character Streams" ? "Character Stream" : "Thread"} Program ${index + 1}`, question, { id: `week11-program${index + 1}` }));

labPrograms.forEach(item => {
  const sample = window.javaLabSamples[item.id];
  if (sample) Object.assign(item, sample, { labType: "program" });
});

/* Point each unit at the same object references—never duplicated program data. */
UN.forEach(unit => { unit.lab = labPrograms.filter(item => item.unitId === unit.n); });
window.labPrograms = labPrograms;
nProg = labPrograms.length;
render();
