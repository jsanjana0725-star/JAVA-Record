/* Runnable sample solutions for the supplied programming exercises in Weeks 6-11. */
const javaSample = (className, statements, output, members = "", throwsClause = "") => ({
  code: `public class ${className} {
    public static void main(String[] args)${throwsClause ? ` throws ${throwsClause}` : ""} {
${statements.split("\n").map(line => `        ${line}`).join("\n")}
    }
${members ? `${members.split("\n").map(line => `    ${line}`).join("\n")}\n` : ""}}`,
  output
});

const fileSample = (code, output) => ({ code, output });
const labSamples = {
  "week6-program1": javaSample("StudentInfo", `Student s = new Student(2078, "Sai", "AI&ML", 9.1);
s.display();`, `Roll No: 2078
Name: Sai
Branch: AI&ML
CGPA: 9.1`, `static class Student {
    int roll;
    String name, branch;
    double cgpa;
    Student(int roll, String name, String branch, double cgpa) {
        this.roll = roll; this.name = name; this.branch = branch; this.cgpa = cgpa;
    }
    void display() {
        System.out.println("Roll No: " + roll);
        System.out.println("Name: " + name);
        System.out.println("Branch: " + branch);
        System.out.println("CGPA: " + cgpa);
    }
}`),
  "week6-program2": javaSample("EmployeeInfo", `Employee e = new Employee(101, "Asha", "Engineering", 52000);
e.display();`, `ID: 101
Name: Asha
Department: Engineering
Salary: 52000.0`, `static class Employee {
    int id;
    String name, department;
    double salary;
    Employee(int id, String name, String department, double salary) {
        this.id = id; this.name = name; this.department = department; this.salary = salary;
    }
    void display() {
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Department: " + department);
        System.out.println("Salary: " + salary);
    }
}`),
  "week6-program3": javaSample("BookDetails", `Book[] books = {
    new Book("Java Basics", 450),
    new Book("OOP in Java", 520),
    new Book("Data Structures", 600)
};
for (Book b : books) System.out.println(b.title + " - Rs." + b.price);`, `Java Basics - Rs.450
OOP in Java - Rs.520
Data Structures - Rs.600`, `static class Book {
    String title;
    int price;
    Book(String title, int price) { this.title = title; this.price = price; }
}`),
  "week6-program4": javaSample("ReferenceAssignment", `Student first = new Student("Mira");
Student second = first;
second.name = "Mira Devi";
System.out.println(first.name);
System.out.println("Same object: " + (first == second));`, `Mira Devi
Same object: true`, `static class Student {
    String name;
    Student(String name) { this.name = name; }
}`),
  "week6-program5": javaSample("CompareReferences", `Employee a = new Employee(7);
Employee b = a;
Employee c = new Employee(7);
System.out.println("a == b: " + (a == b));
System.out.println("a == c: " + (a == c));`, `a == b: true
a == c: false`, `static class Employee {
    int id;
    Employee(int id) { this.id = id; }
}`),
  "week6-program6": javaSample("CalculatorMethods", `Calculator c = new Calculator();
System.out.println("Sum: " + c.add(12, 4));
System.out.println("Difference: " + c.subtract(12, 4));
System.out.println("Product: " + c.multiply(12, 4));
System.out.println("Quotient: " + c.divide(12, 4));`, `Sum: 16.0
Difference: 8.0
Product: 48.0
Quotient: 3.0`, `static class Calculator {
    double add(double a, double b) { return a + b; }
    double subtract(double a, double b) { return a - b; }
    double multiply(double a, double b) { return a * b; }
    double divide(double a, double b) { return a / b; }
}`),
  "week6-program7": javaSample("RectangleOperations", `Rectangle r = new Rectangle(8, 5);
System.out.println("Area: " + r.area());
System.out.println("Perimeter: " + r.perimeter());`, `Area: 40.0
Perimeter: 26.0`, `static class Rectangle {
    double length, width;
    Rectangle(double length, double width) { this.length = length; this.width = width; }
    double area() { return length * width; }
    double perimeter() { return 2 * (length + width); }
}`),
  "week6-program8": javaSample("StudentConstructors", `Student defaultStudent = new Student();
Student namedStudent = new Student("Ravi", 8.4);
System.out.println(defaultStudent.name + ": " + defaultStudent.cgpa);
System.out.println(namedStudent.name + ": " + namedStudent.cgpa);`, `Unknown: 0.0
Ravi: 8.4`, `static class Student {
    String name;
    double cgpa;
    Student() { name = "Unknown"; }
    Student(String name, double cgpa) { this.name = name; this.cgpa = cgpa; }
}`),
  "week6-program9": javaSample("ConstructorOverloading", `BankAccount empty = new BankAccount();
BankAccount named = new BankAccount("Asha");
BankAccount funded = new BankAccount("Ravi", 2500);
empty.display(); named.display(); funded.display();`, `Account holder: Guest, balance: 0.0
Account holder: Asha, balance: 0.0
Account holder: Ravi, balance: 2500.0`, `static class BankAccount {
    String holder;
    double balance;
    BankAccount() { this("Guest", 0); }
    BankAccount(String holder) { this(holder, 0); }
    BankAccount(String holder, double balance) { this.holder = holder; this.balance = balance; }
    void display() { System.out.println("Account holder: " + holder + ", balance: " + balance); }
}`),
  "week6-program10": javaSample("ThisKeyword", `Student s = new Student("Leela", 9.2);
s.display();`, `Name: Leela
CGPA: 9.2`, `static class Student {
    String name;
    double cgpa;
    Student(String name, double cgpa) {
        this.name = name;
        this.cgpa = cgpa;
    }
    void display() {
        System.out.println("Name: " + name);
        System.out.println("CGPA: " + cgpa);
    }
}`),
  "week6-program11": javaSample("ConstructorChaining", `Student s = new Student();
System.out.println(s.name + " - " + s.branch);`, `Name: New Student
Branch: CSE
New Student - CSE`, `static class Student {
    String name, branch;
    Student() { this("New Student"); }
    Student(String name) { this(name, "CSE"); }
    Student(String name, String branch) {
        this.name = name; this.branch = branch;
        System.out.println("Name: " + name);
        System.out.println("Branch: " + branch);
    }
}`),
  "week6-program12": javaSample("GarbageCollectionDemo", `Item first = new Item();
Item second = new Item();
first = null;
second = null;
System.out.println("Two objects created.");
System.out.println("References cleared; objects are eligible for GC.");
System.gc();
System.out.println("Garbage collection requested.");`, `Two objects created.
References cleared; objects are eligible for GC.
Garbage collection requested.`, `static class Item { }`),
  "week6-program13": javaSample("ObjectEligibility", `Item assignedNull = new Item();
assignedNull = null;
Item reassigned = new Item();
reassigned = new Item();
new Item();
System.out.println("Null-assigned object: eligible");
System.out.println("Reassigned object: eligible");
System.out.println("Unreferenced anonymous object: eligible");`, `Null-assigned object: eligible
Reassigned object: eligible
Unreferenced anonymous object: eligible`, `static class Item { }`),
  "week6-program14": javaSample("OverloadArithmetic", `Calculator c = new Calculator();
System.out.println("Integers: " + c.add(4, 7));
System.out.println("Decimals: " + c.add(2.5, 1.5));
System.out.println("Three values: " + c.add(1, 2, 3));`, `Integers: 11
Decimals: 4.0
Three values: 6`, `static class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
}`),
  "week6-program15": javaSample("OverloadArea", `Area a = new Area();
System.out.println("Circle: " + a.area(2.0));
System.out.println("Rectangle: " + a.area(4.0, 3.0));
System.out.println("Square: " + a.area(5));`, `Circle: 12.566370614359172
Rectangle: 12.0
Square: 25`, `static class Area {
    double area(double radius) { return Math.PI * radius * radius; }
    double area(double length, double width) { return length * width; }
    int area(int side) { return side * side; }
}`),
  "week6-program16": javaSample("PassingStudentObject", `Student s = new Student("Anu", 8.8);
display(s);`, `Name: Anu
CGPA: 8.8`, `static class Student {
    String name;
    double cgpa;
    Student(String name, double cgpa) { this.name = name; this.cgpa = cgpa; }
}
static void display(Student s) {
    System.out.println("Name: " + s.name);
    System.out.println("CGPA: " + s.cgpa);
}`),
  "week6-program17": javaSample("CompareSalaries", `Employee a = new Employee("Ravi", 48000);
Employee b = new Employee("Mira", 53000);
compare(a, b);`, `Higher salary: Mira - 53000.0`, `static class Employee {
    String name;
    double salary;
    Employee(String name, double salary) { this.name = name; this.salary = salary; }
}
static void compare(Employee a, Employee b) {
    Employee higher = a.salary > b.salary ? a : b;
    System.out.println("Higher salary: " + higher.name + " - " + higher.salary);
}`),
  "week6-program18": javaSample("ReturnStudent", `Student s = createStudent();
System.out.println(s.name + " - " + s.cgpa);`, `Mira - 9.0`, `static class Student {
    String name;
    double cgpa;
    Student(String name, double cgpa) { this.name = name; this.cgpa = cgpa; }
}
static Student createStudent() { return new Student("Mira", 9.0); }`),
  "week6-program19": javaSample("ReturnBankAccount", `BankAccount account = updateBalance(new BankAccount(1000), 500);
System.out.println("Updated balance: " + account.balance);`, `Updated balance: 1500.0`, `static class BankAccount {
    double balance;
    BankAccount(double balance) { this.balance = balance; }
}
static BankAccount updateBalance(BankAccount account, double amount) {
    account.balance += amount;
    return account;
}`),
  "week6-program20": javaSample("StaticVariable", `new Student("Asha");
new Student("Ravi");
new Student("Mira");
System.out.println("Students created: " + Student.count);`, `Created: Asha
Created: Ravi
Created: Mira
Students created: 3`, `static class Student {
    static int count;
    Student(String name) { count++; System.out.println("Created: " + name); }
}`),
  "week6-program21": javaSample("StaticMethods", `System.out.println("Square: " + MathTools.square(4));
System.out.println("Cube: " + MathTools.cube(3));
System.out.println("Factorial: " + MathTools.factorial(5));`, `Square: 16
Cube: 27
Factorial: 120`, `static class MathTools {
    static int square(int n) { return n * n; }
    static int cube(int n) { return n * n * n; }
    static long factorial(int n) {
        long result = 1;
        for (int i = 2; i <= n; i++) result *= i;
        return result;
    }
}`),
  "week6-program22": javaSample("FinalKeywordDemo", `Vehicle vehicle = new Vehicle();
vehicle.start();
System.out.println("Maximum speed: " + Vehicle.MAX_SPEED);
System.out.println("Final class label: " + SecureRecord.label);`, `Vehicle started
Maximum speed: 120
Final class label: read-only`, `static class Vehicle {
    static final int MAX_SPEED = 120;
    final void start() { System.out.println("Vehicle started"); }
}
static final class SecureRecord {
    static final String label = "read-only";
}`),
  "week6-program23": javaSample("BlankFinalId", `Employee e = new Employee("Nila");
System.out.println(e.name + " has ID " + e.id);`, `Nila has ID 1001`, `static class Employee {
    static int nextId = 1000;
    final int id;
    String name;
    Employee(String name) { this.name = name; this.id = ++nextId; }
}`),
  "week6-program24": javaSample("CollegeDepartment", `College.Department d = new College.Department("Computer Science");
System.out.println(d.name);`, `Computer Science`, `static class College {
    static class Department {
        String name;
        Department(String name) { this.name = name; }
    }
}`),
  "week6-program25": javaSample("EmployeeAddress", `Employee.Address address = new Employee.Address("Vijayawada");
System.out.println("City: " + address.city);`, `City: Vijayawada`, `static class Employee {
    static class Address {
        String city;
        Address(String city) { this.city = city; }
    }
}`),
  "week6-program26": javaSample("StudentInnerAddress", `Student s = new Student("Asha");
Student.Address address = s.new Address("Vijayawada");
address.display();`, `Asha lives in Vijayawada`, `static class Student {
    String name;
    Student(String name) { this.name = name; }
    class Address {
        String city;
        Address(String city) { this.city = city; }
        void display() { System.out.println(name + " lives in " + city); }
    }
}`),
  "week6-program27": javaSample("LibraryInnerBook", `Library library = new Library("Central Library");
Library.Book book = library.new Book("Java Basics");
book.display();`, `Java Basics is available at Central Library`, `static class Library {
    String name;
    Library(String name) { this.name = name; }
    class Book {
        String title;
        Book(String title) { this.title = title; }
        void display() { System.out.println(title + " is available at " + name); }
    }
}`),
  "week7-experiment1": javaSample("StringConstructors", `String literal = "Java";
String object = new String("Java");
String fromChars = new String(new char[] {'C', 'o', 'd', 'e'});
String fromBytes = new String(new byte[] {74, 86, 77});
System.out.println(literal);
System.out.println(object);
System.out.println(fromChars);
System.out.println(fromBytes);
System.out.println("Same content: " + literal.equals(object));
System.out.println("Same reference: " + (literal == object));`, `Java
Java
Code
JVM
Same content: true
Same reference: false`),
  "week7-experiment2": javaSample("StringBufferDemo", `StringBuffer text = new StringBuffer("Java");
text.append(" Rocks");
text.insert(5, "Really ");
text.replace(0, 4, "Core Java");
text.delete(10, 17);
System.out.println("Edited: " + text);
System.out.println("Reversed: " + text.reverse());
System.out.println("Length: " + text.length());
System.out.println("Capacity: " + text.capacity());`, `Edited: Core Java Rocks
Reversed: skcoR avaJ eroC
Length: 15
Capacity: 42`),
  "week7-experiment3": javaSample("TokenizerDemo", `String sentence = "Java makes coding fun";
StringTokenizer words = new StringTokenizer(sentence);
while (words.hasMoreTokens()) System.out.println(words.nextToken());
System.out.println("Word count: 4");
StringTokenizer csv = new StringTokenizer("red,green,blue", ",");
System.out.println("Custom delimiter count: " + csv.countTokens());`, `Java
makes
coding
fun
Word count: 4
Custom delimiter count: 3`, `static class StringTokenizer {
    private final java.util.StringTokenizer delegate;
    StringTokenizer(String text) { delegate = new java.util.StringTokenizer(text); }
    StringTokenizer(String text, String delimiter) { delegate = new java.util.StringTokenizer(text, delimiter); }
    boolean hasMoreTokens() { return delegate.hasMoreTokens(); }
    String nextToken() { return delegate.nextToken(); }
    int countTokens() { return delegate.countTokens(); }
}`),
  "week7-experiment4": javaSample("BasicInheritance", `Student student = new Student("Asha", 20, 2078, "AI&ML");
student.display();`, `Name: Asha, Age: 20
Roll No: 2078, Branch: AI&ML`, `static class Person {
    String name;
    int age;
    Person(String name, int age) { this.name = name; this.age = age; }
    void displayPerson() { System.out.println("Name: " + name + ", Age: " + age); }
}
static class Student extends Person {
    int roll;
    String branch;
    Student(String name, int age, int roll, String branch) {
        super(name, age); this.roll = roll; this.branch = branch;
    }
    void display() {
        displayPerson();
        System.out.println("Roll No: " + roll + ", Branch: " + branch);
    }
}`),
  "week7-experiment5": javaSample("SuperKeywordDemo", `Manager manager = new Manager("Ravi", "Engineering");
manager.display();`, `Employee: Ravi
Name from super: Ravi
Department: Engineering`, `static class Employee {
    String name;
    Employee(String name) { this.name = name; }
    void display() { System.out.println("Employee: " + name); }
}
static class Manager extends Employee {
    String department;
    Manager(String name, String department) { super(name); this.department = department; }
    void display() {
        super.display();
        System.out.println("Name from super: " + super.name);
        System.out.println("Department: " + department);
    }
}`),
  "week8-program1": javaSample("SingleInheritanceDemo", `Student student = new Student("Asha", 20, 2078, "AI&ML");
student.display();`, `Name: Asha
Age: 20
Roll No: 2078
Branch: AI&ML`, `static class Person {
    String name;
    int age;
    Person(String name, int age) { this.name = name; this.age = age; }
}
static class Student extends Person {
    int roll;
    String branch;
    Student(String name, int age, int roll, String branch) {
        super(name, age); this.roll = roll; this.branch = branch;
    }
    void display() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Roll No: " + roll);
        System.out.println("Branch: " + branch);
    }
}`),
  "week8-program2": javaSample("SuperVehicleDemo", `Car car = new Car("Sedan", 180);
car.display();`, `Vehicle speed: 180
Vehicle display
Car model: Sedan`, `static class Vehicle {
    int speed;
    Vehicle(int speed) { this.speed = speed; }
    void display() { System.out.println("Vehicle display"); }
}
static class Car extends Vehicle {
    String model;
    Car(String model, int speed) { super(speed); this.model = model; }
    @Override void display() {
        System.out.println("Vehicle speed: " + super.speed);
        super.display();
        System.out.println("Car model: " + model);
    }
}`),
  "week8-program3": javaSample("MultilevelInheritanceDemo", `Manager manager = new Manager("Nila", 501, "Research");
manager.display();`, `Person: Nila
Employee ID: 501
Department: Research`, `static class Person {
    String name;
    Person(String name) { this.name = name; }
}
static class Employee extends Person {
    int id;
    Employee(String name, int id) { super(name); this.id = id; }
}
static class Manager extends Employee {
    String department;
    Manager(String name, int id, String department) {
        super(name, id); this.department = department;
    }
    void display() {
        System.out.println("Person: " + name);
        System.out.println("Employee ID: " + id);
        System.out.println("Department: " + department);
    }
}`),
  "week8-program4": javaSample("MethodOverridingDemo", `Animal[] animals = {new Dog(), new Cat()};
for (Animal animal : animals) animal.sound();`, `Dog barks
Cat meows`, `static class Animal {
    void sound() { System.out.println("Animal sound"); }
}
static class Dog extends Animal {
    @Override void sound() { System.out.println("Dog barks"); }
}
static class Cat extends Animal {
    @Override void sound() { System.out.println("Cat meows"); }
}`),
  "week8-program5": javaSample("DynamicDispatchDemo", `Shape[] shapes = {new Circle(), new Rectangle(), new Triangle()};
for (Shape shape : shapes) shape.draw();`, `Drawing a circle
Drawing a rectangle
Drawing a triangle`, `static class Shape {
    void draw() { System.out.println("Drawing a shape"); }
}
static class Circle extends Shape {
    @Override void draw() { System.out.println("Drawing a circle"); }
}
static class Rectangle extends Shape {
    @Override void draw() { System.out.println("Drawing a rectangle"); }
}
static class Triangle extends Shape {
    @Override void draw() { System.out.println("Drawing a triangle"); }
}`),
  "week8-program6": javaSample("SuperOverrideDemo", `new Manager().display();`, `Employee: Ravi
Manager: Engineering`, `static class Employee {
    void display() { System.out.println("Employee: Ravi"); }
}
static class Manager extends Employee {
    @Override void display() {
        super.display();
        System.out.println("Manager: Engineering");
    }
}`),
  "week8-program7": javaSample("SalaryInheritance", `SeniorDeveloper developer = new SeniorDeveloper();
System.out.println("Total salary: " + developer.totalSalary());`, `Total salary: 95000.0`, `static class Employee {
    double basicSalary = 70000;
}
static class Developer extends Employee {
    double programmingAllowance = 15000;
}
static class SeniorDeveloper extends Developer {
    double projectAllowance = 10000;
    double totalSalary() { return basicSalary + programmingAllowance + projectAllowance; }
}`),
  "week8-program8": javaSample("BankInterestDispatch", `BankAccount[] accounts = {new SavingsAccount(), new CurrentAccount()};
for (BankAccount account : accounts)
    System.out.println(account.getClass().getSimpleName() + ": " + account.calculateInterest(10000));`, `SavingsAccount: 500.0
CurrentAccount: 200.0`, `static class BankAccount {
    double calculateInterest(double balance) { return 0; }
}
static class SavingsAccount extends BankAccount {
    @Override double calculateInterest(double balance) { return balance * 0.05; }
}
static class CurrentAccount extends BankAccount {
    @Override double calculateInterest(double balance) { return balance * 0.02; }
}`),
  "week8-program9": javaSample("ConstructorOrderDemo", `new GraduateStudent();`, `Person constructor
Student constructor
GraduateStudent constructor`, `static class Person {
    Person() { System.out.println("Person constructor"); }
}
static class Student extends Person {
    Student() { System.out.println("Student constructor"); }
}
static class GraduateStudent extends Student {
    GraduateStudent() { System.out.println("GraduateStudent constructor"); }
}`),
  "week8-program10": javaSample("BankingInheritanceDemo", `SavingsAccount savings = new SavingsAccount("SA101", 1000);
savings.deposit(500);
savings.withdraw(200);
savings.display();
System.out.println("Interest: " + savings.interest());`, `Account: SA101, balance: 1300.0
Interest: 65.0`, `static class BankAccount {
    String accountNumber;
    double balance;
    BankAccount(String accountNumber, double balance) {
        this.accountNumber = accountNumber; this.balance = balance;
    }
    void deposit(double amount) { balance += amount; }
    void withdraw(double amount) { balance -= amount; }
    void display() { System.out.println("Account: " + accountNumber + ", balance: " + balance); }
}
static class SavingsAccount extends BankAccount {
    SavingsAccount(String accountNumber, double balance) { super(accountNumber, balance); }
    double interest() { return balance * 0.05; }
}`),
  "week9-experiment1": fileSample(`// File: mypackage/Student.java
package mypackage;
public class Student {
    public void display() { System.out.println("Student from mypackage"); }
}

// File: UseStudent.java (save outside the mypackage folder)
import mypackage.Student;
public class UseStudent {
    public static void main(String[] args) {
        new Student().display();
    }
}

// Compile and run from the project folder:
// javac mypackage/Student.java UseStudent.java
// java UseStudent`, "Student from mypackage"),
  "week9-experiment2": fileSample(`// File: college/Student.java
package college;
public class Student {
    public void show() { System.out.println("Student record"); }
}

// File: college/Faculty.java
package college;
public class Faculty {
    public void show() { System.out.println("Faculty record"); }
}

// File: CollegeDemo.java
import college.*;
public class CollegeDemo {
    public static void main(String[] args) {
        new Student().show();
        new Faculty().show();
    }
}
// Compile: javac college/Student.java college/Faculty.java CollegeDemo.java
// Run: java CollegeDemo`, "Student record\nFaculty record"),
  "week9-experiment3": fileSample(`// File: accessdemo/BaseRecord.java
package accessdemo;
public class BaseRecord {
    public String visible = "public";
    private String secret = "private";
    protected String inherited = "protected";
    String packageOnly = "default";
    public String readSecret() { return secret; }
}

// File: accessdemo/SamePackage.java
package accessdemo;
class SamePackage {
    void show() {
        BaseRecord r = new BaseRecord();
        System.out.println("Same package: " + r.visible + ", " + r.inherited + ", " + r.packageOnly + " accessible");
        System.out.println("Private via getter: " + r.readSecret());
    }
}

// File: other/ChildRecord.java
package other;
import accessdemo.BaseRecord;
public class ChildRecord extends BaseRecord {
    public void show() {
        System.out.println("Subclass in another package: " + visible + ", " + inherited);
    }
}

// File: accessdemo/AccessDemo.java
package accessdemo;
import other.ChildRecord;
public class AccessDemo {
    public static void main(String[] args) {
        new SamePackage().show();
        new ChildRecord().show();
    }
}
// Compile from the project folder:
// javac -d out accessdemo/BaseRecord.java accessdemo/SamePackage.java other/ChildRecord.java accessdemo/AccessDemo.java
// Run: java -cp out accessdemo.AccessDemo`, "Same package: public, protected, default accessible\nPrivate via getter: private\nSubclass in another package: public, protected"),
  "week9-experiment4": fileSample(`// File: utilities/Calculator.java
package utilities;
public class Calculator {
    public int add(int a, int b) { return a + b; }
}

// File: UseCalculator.java
import utilities.Calculator;
public class UseCalculator {
    public static void main(String[] args) {
        System.out.println("Sum: " + new Calculator().add(12, 8));
    }
}

// Compile: javac -d out utilities/Calculator.java UseCalculator.java
// Run: java -cp out UseCalculator
// Windows CLASSPATH alternative: set CLASSPATH=out`, "Sum: 20"),
  "week9-experiment5": fileSample(`// Save each public class in its matching bank/*.java file.
// File: bank/Account.java
package bank;
public class Account {
    public String number() { return "AC100"; }
}

// File: bank/Customer.java
package bank;
public class Customer {
    public String name() { return "Asha"; }
}

// File: bank/Transaction.java
package bank;
public class Transaction {
    public String type() { return "Deposit"; }
}

// File: BankDemo.java
import bank.Account;
import bank.Customer;
import bank.Transaction;
public class BankDemo {
    public static void main(String[] args) {
        System.out.println(new Customer().name());
        System.out.println(new Account().number());
        System.out.println(new Transaction().type());
    }
}
// Compile: javac bank/*.java BankDemo.java
// Run: java BankDemo`, "Asha\nAC100\nDeposit"),
  "week9-experiment6": javaSample("ShapeInterfaceDemo", `Shape circle = new Circle(2);
Shape rectangle = new Rectangle(4, 3);
System.out.println("Circle area: " + circle.area());
System.out.println("Rectangle area: " + rectangle.area());`, `Circle area: 12.566370614359172
Rectangle area: 12.0`, `interface Shape { double area(); }
static class Circle implements Shape {
    double radius;
    Circle(double radius) { this.radius = radius; }
    public double area() { return Math.PI * radius * radius; }
}
static class Rectangle implements Shape {
    double length, width;
    Rectangle(double length, double width) { this.length = length; this.width = width; }
    public double area() { return length * width; }
}`),
  "week9-experiment7": javaSample("MultipleInterfacesDemo", `Demo demo = new Demo();
demo.print();
demo.show();`, `Printing...
Showing...`, `interface Printable { void print(); }
interface Showable { void show(); }
static class Demo implements Printable, Showable {
    public void print() { System.out.println("Printing..."); }
    public void show() { System.out.println("Showing..."); }
}`),
  "week9-experiment8": javaSample("InterfacePolymorphism", `Vehicle vehicle = new Car();
vehicle.start();
vehicle = new Bike();
vehicle.start();`, `Car starts with a key
Bike starts with a button`, `interface Vehicle { void start(); }
static class Car implements Vehicle {
    public void start() { System.out.println("Car starts with a key"); }
}
static class Bike implements Vehicle {
    public void start() { System.out.println("Bike starts with a button"); }
}`),
  "week9-experiment9": javaSample("InterfaceConstants", `System.out.println("Maximum marks: " + Constants.MAX_MARKS);
System.out.println("PI: " + Constants.PI);`, `Maximum marks: 100
PI: 3.14159`, `interface Constants {
    int MAX_MARKS = 100;
    double PI = 3.14159;
}
static class InterfaceConstants implements Constants {
    void demonstrate() {
        System.out.println(MAX_MARKS);
    }
}`),
  "week9-experiment10": javaSample("NestedInterfaceDemo", `new DepartmentService().show();`, `University department interface implemented`, `static class University {
    interface Department { void show(); }
}
static class DepartmentService implements University.Department {
    public void show() { System.out.println("University department interface implemented"); }
}`),
  "week9-experiment11": javaSample("InterfaceInheritanceDemo", `Dog dog = new Dog();
dog.eat();
dog.bark();`, `Dog eats
Dog barks`, `interface Animal { void eat(); }
interface Canine extends Animal { void bark(); }
static class Dog implements Canine {
    public void eat() { System.out.println("Dog eats"); }
    public void bark() { System.out.println("Dog barks"); }
}`),
  "week9-experiment12": javaSample("PaymentDemo", `Payment[] methods = {new CreditCardPayment(), new UPIPayment(), new NetBankingPayment()};
for (Payment method : methods) method.pay(500);`, `Credit card payment: Rs.500.0
UPI payment: Rs.500.0
Net banking payment: Rs.500.0`, `interface Payment { void pay(double amount); }
static class CreditCardPayment implements Payment {
    public void pay(double amount) { System.out.println("Credit card payment: Rs." + amount); }
}
static class UPIPayment implements Payment {
    public void pay(double amount) { System.out.println("UPI payment: Rs." + amount); }
}
static class NetBankingPayment implements Payment {
    public void pay(double amount) { System.out.println("Net banking payment: Rs." + amount); }
}`),
  "week10-exception1": javaSample("TryCatchDivision", `int numerator = 10, denominator = 0;
try {
    System.out.println(numerator / denominator);
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero.");
}
System.out.println("Program continues.");`, `Cannot divide by zero.
Program continues.`),
  "week10-exception2": javaSample("ExceptionTypesDemo", `try { int value = 5 / 0; }
catch (ArithmeticException e) { System.out.println("ArithmeticException handled"); }
try { int[] values = {1, 2}; System.out.println(values[4]); }
catch (ArrayIndexOutOfBoundsException e) { System.out.println("ArrayIndexOutOfBoundsException handled"); }
try { String text = null; System.out.println(text.length()); }
catch (NullPointerException e) { System.out.println("NullPointerException handled"); }`, `ArithmeticException handled
ArrayIndexOutOfBoundsException handled
NullPointerException handled`),
  "week10-exception3": javaSample("UncaughtExceptionDemo", `System.out.println("Before the error");
int result = 10 / 0;
System.out.println(result);`, `Before the error
Exception in thread "main" java.lang.ArithmeticException: / by zero
    at UncaughtExceptionDemo.main(UncaughtExceptionDemo.java:4)`),
  "week10-exception4": javaSample("MultipleCatchDemo", `int[] values = {10, 0};
try {
    int index = Integer.parseInt(args.length == 0 ? "3" : args[0]);
    System.out.println(values[index] / values[1]);
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Index is outside the array.");
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero.");
} catch (NumberFormatException e) {
    System.out.println("Index must be an integer.");
}`, `Index is outside the array.`),
  "week10-exception5": javaSample("ThrowDemo", `int age = 15;
try {
    if (age < 18) throw new IllegalArgumentException("Age must be 18 or above");
    System.out.println("Eligible");
} catch (IllegalArgumentException e) {
    System.out.println("Validation error: " + e.getMessage());
}`, `Validation error: Age must be 18 or above`),
  "week10-exception6": javaSample("ThrowsDemo", `try {
    validateAge(16);
} catch (Exception e) {
    System.out.println("Caller handled: " + e.getMessage());
}`, `Caller handled: Minimum age is 18`, `static void validateAge(int age) throws Exception {
    if (age < 18) throw new Exception("Minimum age is 18");
}`),
  "week10-exception7": javaSample("FinallyDemo", `try {
    System.out.println("Inside try");
    int answer = 8 / 2;
    System.out.println("Answer: " + answer);
} catch (ArithmeticException e) {
    System.out.println("Arithmetic error");
} finally {
    System.out.println("Finally always runs");
}`, `Inside try
Answer: 4
Finally always runs`),
  "week10-exception8": javaSample("CustomExceptionDemo", `try {
    withdraw(400, 500);
} catch (InsufficientFundsException e) {
    System.out.println(e.getMessage());
}`, `Withdrawal denied: insufficient funds`, `static void withdraw(double amount, double balance) throws InsufficientFundsException {
    if (amount > balance) throw new InsufficientFundsException("Withdrawal denied: insufficient funds");
}
static class InsufficientFundsException extends Exception {
    InsufficientFundsException(String message) { super(message); }
}`),
  "week10-exception9": javaSample("MarksValidationDemo", `try {
    validateMarks(105);
} catch (InvalidMarksException e) {
    System.out.println(e.getMessage());
}`, `Marks must be between 0 and 100`, `static void validateMarks(int marks) throws InvalidMarksException {
    if (marks < 0 || marks > 100) throw new InvalidMarksException("Marks must be between 0 and 100");
    System.out.println("Valid marks: " + marks);
}
static class InvalidMarksException extends Exception {
    InvalidMarksException(String message) { super(message); }
}`),
  "week10-exception10": javaSample("CombinedExceptionDemo", `try {
    int divisor = 0;
    if (divisor == 0) throw new IllegalArgumentException("Divisor cannot be zero");
    System.out.println(10 / divisor);
} catch (IllegalArgumentException e) {
    System.out.println("Input error: " + e.getMessage());
} catch (ArithmeticException e) {
    System.out.println("Arithmetic error: " + e.getMessage());
} finally {
    System.out.println("Validation finished");
}`, `Input error: Divisor cannot be zero
Validation finished`),
  "week10-byte-stream1": javaSample("ByteStreamsDemo", `byte[] data = "Java IO".getBytes(java.nio.charset.StandardCharsets.UTF_8);
java.io.ByteArrayInputStream input = new java.io.ByteArrayInputStream(data);
java.io.ByteArrayOutputStream output = new java.io.ByteArrayOutputStream();
int value;
while ((value = input.read()) != -1) output.write(value);
System.out.println(output.toString("UTF-8"));`, `Java IO`, "", "java.io.UnsupportedEncodingException"),
  "week10-byte-stream2": javaSample("ReadBytesFromFile", `String text = "Byte stream file";
try (java.io.FileOutputStream out = new java.io.FileOutputStream("input.txt")) {
    out.write(text.getBytes(java.nio.charset.StandardCharsets.UTF_8));
}
try (java.io.FileInputStream in = new java.io.FileInputStream("input.txt")) {
    int value;
    while ((value = in.read()) != -1) System.out.print((char) value);
}`, `Byte stream file`, "", "java.io.IOException"),
  "week10-byte-stream3": javaSample("WriteBytesToFile", `try (java.io.FileOutputStream out = new java.io.FileOutputStream("output.txt")) {
    out.write("Saved with FileOutputStream".getBytes(java.nio.charset.StandardCharsets.UTF_8));
}
try (java.io.FileInputStream in = new java.io.FileInputStream("output.txt")) {
    int value;
    while ((value = in.read()) != -1) System.out.print((char) value);
}`, `Saved with FileOutputStream`, "", "java.io.IOException"),
  "week10-byte-stream4": javaSample("CopyBytes", `try (java.io.FileOutputStream source = new java.io.FileOutputStream("source.txt")) {
    source.write("Copy completed".getBytes(java.nio.charset.StandardCharsets.UTF_8));
}
try (java.io.FileInputStream in = new java.io.FileInputStream("source.txt");
     java.io.FileOutputStream out = new java.io.FileOutputStream("copy.txt")) {
    in.transferTo(out);
}
try (java.io.FileInputStream copy = new java.io.FileInputStream("copy.txt")) {
    int value;
    while ((value = copy.read()) != -1) System.out.print((char) value);
}`, `Copy completed`, "", "java.io.IOException"),
  "week10-byte-stream5": javaSample("CopyBinaryFile", `byte[] imageBytes = {(byte) 0x89, 0x50, 0x4E, 0x47};
try (java.io.FileOutputStream source = new java.io.FileOutputStream("image.bin")) {
    source.write(imageBytes);
}
try (java.io.FileInputStream in = new java.io.FileInputStream("image.bin");
     java.io.FileOutputStream out = new java.io.FileOutputStream("image-copy.bin")) {
    in.transferTo(out);
    System.out.println("Copied " + new java.io.File("image-copy.bin").length() + " bytes.");
} catch (java.io.FileNotFoundException e) {
    System.out.println("File not found: " + e.getMessage());
} catch (java.io.IOException e) {
    System.out.println("I/O error: " + e.getMessage());
}`, `Copied 4 bytes.`, "", "java.io.IOException"),
  "week11-program1": javaSample("ReaderWriterDemo", `StringReader reader = new StringReader("Hello from keyboard");
StringWriter writer = new StringWriter();
int character;
while ((character = reader.read()) != -1) writer.write(character);
System.out.println(writer.toString());`, `Hello from keyboard`, `static class StringReader extends java.io.StringReader {
    StringReader(String text) { super(text); }
}
static class StringWriter extends java.io.StringWriter { }`, "java.io.IOException"),
  "week11-program2": javaSample("ReadTextFile", `try (FileWriter seed = new FileWriter("notes.txt")) {
    seed.write("Java character streams");
}
try (FileReader reader = new FileReader("notes.txt")) {
    int character;
    while ((character = reader.read()) != -1) System.out.print((char) character);
}`, `Java character streams`, `static class FileWriter extends java.io.FileWriter {
    FileWriter(String file) throws java.io.IOException { super(file); }
}
static class FileReader extends java.io.FileReader {
    FileReader(String file) throws java.io.IOException { super(file); }
}`, "java.io.IOException"),
  "week11-program3": javaSample("WriteTextFile", `try (FileWriter writer = new FileWriter("message.txt")) {
    writer.write("Written with FileWriter");
}
try (FileReader reader = new FileReader("message.txt")) {
    int character;
    while ((character = reader.read()) != -1) System.out.print((char) character);
}`, `Written with FileWriter`, `static class FileWriter extends java.io.FileWriter {
    FileWriter(String file) throws java.io.IOException { super(file); }
}
static class FileReader extends java.io.FileReader {
    FileReader(String file) throws java.io.IOException { super(file); }
}`, "java.io.IOException"),
  "week11-program4": javaSample("CopyTextFile", `try (FileWriter seed = new FileWriter("source.txt")) {
    seed.write("Text copied using character streams");
}
try (FileReader reader = new FileReader("source.txt");
     FileWriter writer = new FileWriter("destination.txt")) {
    int character;
    while ((character = reader.read()) != -1) writer.write(character);
}
try (FileReader copied = new FileReader("destination.txt")) {
    int character;
    while ((character = copied.read()) != -1) System.out.print((char) character);
}`, `Text copied using character streams`, `static class FileWriter extends java.io.FileWriter {
    FileWriter(String file) throws java.io.IOException { super(file); }
}
static class FileReader extends java.io.FileReader {
    FileReader(String file) throws java.io.IOException { super(file); }
}`, "java.io.IOException"),
  "week11-program5": javaSample("CountTextFile", `String text = "Java streams\\nread text";
int characters = text.length(), words = 0, lines = 1;
boolean inWord = false;
for (int i = 0; i < text.length(); i++) {
    char ch = text.charAt(i);
    if (ch == '\\n') lines++;
    if (Character.isWhitespace(ch)) inWord = false;
    else if (!inWord) { words++; inWord = true; }
}
System.out.println("Characters: " + characters);
System.out.println("Words: " + words);
System.out.println("Lines: " + lines);`, `Characters: 22
Words: 4
Lines: 2`),
  "week11-program6": javaSample("MainThreadInfo", `Thread main = Thread.currentThread();
System.out.println("Name: " + main.getName());
System.out.println("Priority: " + main.getPriority());
System.out.println("State: " + main.getState());`, `Name: main
Priority: 5
State: RUNNABLE`),
  "week11-program7": javaSample("ExtendThreadDemo", `Worker worker = new Worker();
worker.start();
worker.join();`, `Thread created by extending Thread is running`, `static class Worker extends Thread {
    public void run() { System.out.println("Thread created by extending Thread is running"); }
}`),
  "week11-program8": javaSample("RunnableDemo", `Thread worker = new Thread(new Worker());
worker.start();
worker.join();`, `Thread created with Runnable is running`, `static class Worker implements Runnable {
    public void run() { System.out.println("Thread created with Runnable is running"); }
}`),
  "week11-program9": javaSample("MultipleThreadsDemo", `Thread first = new Thread(() -> System.out.println("Worker A completed"));
Thread second = new Thread(() -> {
    try { first.join(); }
    catch (InterruptedException e) { Thread.currentThread().interrupt(); }
    System.out.println("Worker B completed");
});
first.start(); second.start();
first.join(); second.join();
System.out.println("Both workers completed");`, `Worker A completed
Worker B completed
Both workers completed`),
  "week11-program10": javaSample("IsAliveDemo", `java.util.concurrent.CountDownLatch started = new java.util.concurrent.CountDownLatch(1);
java.util.concurrent.CountDownLatch release = new java.util.concurrent.CountDownLatch(1);
Thread worker = new Thread(() -> {
    started.countDown();
    try { release.await(); }
    catch (InterruptedException e) { Thread.currentThread().interrupt(); }
});
worker.start();
started.await();
System.out.println("Running: " + worker.isAlive());
release.countDown();
worker.join();
System.out.println("Running after join: " + worker.isAlive());`, `Running: true
Running after join: false`),
  "week11-program11": javaSample("JoinThreadDemo", `Thread worker = new Thread(() -> System.out.println("Worker finished"));
worker.start();
worker.join();
System.out.println("Main continues after worker");`, `Worker finished
Main continues after worker`),
  "week11-program12": javaSample("AliveJoinDemo", `java.util.concurrent.CountDownLatch started = new java.util.concurrent.CountDownLatch(1);
java.util.concurrent.CountDownLatch release = new java.util.concurrent.CountDownLatch(1);
Thread worker = new Thread(() -> {
    started.countDown();
    try { release.await(); }
    catch (InterruptedException e) { Thread.currentThread().interrupt(); }
});
worker.start();
started.await();
System.out.println("Alive before join: " + worker.isAlive());
release.countDown();
worker.join();
System.out.println("Alive after join: " + worker.isAlive());`, `Alive before join: true
Alive after join: false`)
};

for (let index = 27; index >= 4; index--) {
  labSamples[`week6-program${index + 1}`] = labSamples[`week6-program${index}`];
}
labSamples["week6-program4"] = javaSample("StudentArray", `java.util.Scanner input = new java.util.Scanner(System.in);
// Enter five records, each as: roll name branch cgpa
Student[] students = new Student[5];
for (int i = 0; i < students.length; i++) {
    int roll = input.nextInt();
    String name = input.next();
    String branch = input.next();
    double cgpa = input.nextDouble();
    students[i] = new Student(roll, name, branch, cgpa);
}
System.out.println("Student details:");
for (Student student : students) student.display();`, `Student details:
2078 Sai AIML 9.1
2079 Mira CSE 8.8
2080 Ravi ECE 8.5
2081 Asha IT 9.0
2082 Neel MECH 8.2`, `static class Student {
    int roll;
    String name, branch;
    double cgpa;
    Student(int roll, String name, String branch, double cgpa) {
        this.roll = roll; this.name = name; this.branch = branch; this.cgpa = cgpa;
    }
    void display() {
        System.out.println(roll + " " + name + " " + branch + " " + cgpa);
    }
}`);

window.javaLabSamples = labSamples;
