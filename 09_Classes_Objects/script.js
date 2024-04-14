// A JS object is an entity having state and behavior (properties and method)
// JS objects have a special property called prototype
// We can set prototype using __proto__
// Objects inherits some basic properties from prototype

const student = {
  fullName: "Aman Asati",
  marks: 94.5,
  printMarks: function () {
    console.log("marks =", this.marks);
  },
};

const employee = {
  calculateTax() {
    console.log("tax rate is 10%");
  },
};
//** If Object & Prototype have same method, object's method will be used */
const newEmployee = {
  salary: 50000,
  calculateTax() {
    console.log("tax rate is 20%");
  },
};

newEmployee.__proto__ = employee;

// Classes in JS
// Class is a program-code template for creating objects.
// Those object will have some state(variables) & some behavior(properties) inside it.

class Car {
  constructor(brand, milage) {
    console.log("Creating new Object");
    this.brandName = brand;
    this.milage = milage;
  }
  start() {
    console.log("Car is Started");
  }
  stop() {
    console.log("Car is Stopped");
  }
  // setBrand(brand) {
  //   this.brandName = brand;
  // }
}

let fortuner = new Car("Toyota", "50km");
// fortuner.setBrand("Toyota");
console.log(fortuner);
let civic = new Car("Honda", "30km");
// civic.setBrand("Honda");
console.log(civic);
// fortuner.start();
// fortuner.stop();

// Constructor() method is: automatically invoked by new, initilizes object

// Inheritence in JS
// Inheritence is passing down propeties and methods from parent to child class.

class Parent {
  hello() {
    console.log("hello");
  }
}

class Child extends Parent {}

let obj = new Child();
obj.hello();

class Person {
  constructor(species, name) {
    console.log("Enter Parent Constructor");
    this.species = "species";
    this.name = name;
  }
  eat() {
    console.log("can Eat");
  }
  sleep() {
    console.log("Can Sleep");
  }
  work() {
    console.log("Person Can Work");
  }
}

class Engineer extends Person {
  work() {
    console.log("Engineer Can Work");
  }
}

class Doctor extends Person {
  work() {
    console.log("Treats Pateint");
  }
}

let engObj = new Engineer();
let docObj = new Doctor();

engObj.eat();
engObj.sleep();
engObj.work();

docObj.eat();
docObj.sleep();
docObj.work();
//**  If Parent and Child have same method, child's method will be used. */

// Super Keyword
// The super keyword is used to call the constructor of it's parent class to access the parent's properties and mehtods.

class Pilot extends Person {
  constructor(name, branch) {
    console.log("Enter Child Constructor");
    super(branch, name);
    //**  To invoke parent class construtor else
    // we get error Must call super constructor in derived class before accessing 'this' or returning
    // from derived constructor */
    this.branch = branch;
    console.log("Exit Child Constructor");
  }
  work() {
    super.eat();
    super.sleep();
    console.log("can fly");
  }
}

let pilotObj = new Pilot("Aman Asati", "Aeronautics Enginner");
console.log(pilotObj.work());

// Practice Questions

// Q1
let DATA = "Secreat Information";

class User {
  setName(name) {
    this.name = name;
  }

  setEmail(email) {
    this.email = email;
  }

  viewData() {
    console.log("Data =", DATA);
  }
}

let user1 = new User();
user1.setName("Aman Asati");
user1.setEmail("asatiaman11@gmail.com");
user1.viewData();
console.log(user1);

// Q2
class Admin extends User {
  editData() {
    DATA = "Not Secret DATA";
  }
}

let admin1 = new Admin();
admin1.setName("Admin User");
admin1.setEmail("adm@gmail.com");
admin1.viewData();
