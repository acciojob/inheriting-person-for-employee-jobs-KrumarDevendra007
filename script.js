// Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to greet
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Employee class inheriting from Person
class Employee extends Person {
    constructor(name, age, jobTitle) {
        // Call the parent class constructor
        super(name, age);
        this.jobTitle = jobTitle;
    }

    // Method specific to Employee
    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}

// Test case for the Person class
const person = new Person("Alice", 25);
person.greet(); 


// Test case for the Employee class
const employee = new Employee("Bob", 30, "Manager"); 
employee.jobGreet(); 






// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
