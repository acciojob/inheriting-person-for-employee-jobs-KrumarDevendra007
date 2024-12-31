// complete this js code
class Person {
	function Person(name, age) {
		this.name = name;
		this.age = age;
	}

	function greet(){
		Console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
	}

	
}

class Employee extends Person {
	function Employee(name, age, jobTitle) {
		super(name, age)
		this.jobTitle = jobTitle;
	}

	function jobGreet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
	}
}



// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
