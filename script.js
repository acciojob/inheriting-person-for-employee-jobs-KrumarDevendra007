// complete this js code
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	function greet(){
		return (`Hello, my name is ${this.name}, I am ${this.age} years old.`);
	}

	
}

class Employee extends Person {
	constructor(name, age, jobTitle) {
		super(name, age)
		this.jobTitle = jobTitle;
	}

	function jobGreet(){
		return (`${this.gree()} and my job title is ${this.jobTitle}.`);
	}
}



// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
