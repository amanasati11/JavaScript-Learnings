// ***Variables & Data Types***
console.log("Aman Asati");
fullName = "Mr. Aman Asati"; // string
console.log(fullName);
age = 24; // number
console.log(age);
price = 22.56;
console.log(price);
x = null; // null
console.log(x);
y = undefined;
console.log(y);
isFollow = true;
console.log(isFollow);
isFollow = false;
console.log(isFollow);

// Dynamically Typed
fullName = 25;
console.log(fullName);

// Case Sensitive "a" & "A" is different
fullName = "Aman Asati";
console.log(fullName);
FULLNAME = "Madhur Asati";
console.log(FULLNAME);

// Only digit, underscore(_) and $ is allowed.(not even space)
fullName_ = "Aman Asati";
fullName$ = "Aman Asati";
fullName123 = "Aman Asati";
// full name="Aman Asati" -> Invalid
// fullName@ = "Aman Asati" -> Invalid
// 123FullName = "Aman Asati" -> Invalid

// Reserved words cannot be variable name
// this = 12; // Invalid left-hand
// console.log(this);

// let, const and var

// var -> Variables can be **re-declared** & updated. A global scope variable.
var userAge = 24;
var userAge = 25;
var userAge = 26;
console.log(userAge);

// let -> Varibales cannot be re-declared but can be updated. A block scope variable.
let userFullName = "Aman Asati";
let updatedAge = 24;
let totalPrice = 1000;
userFullName = "Madhur Asati";
console.log(userFullName);
// let userFullName = "Aman Asati"; Error -> Cannot redeclare block-scoped variable 'userFullName'.

// const -> Varibales cannot be re-declared and updated. A block scope variable.
const FAVTEAM = "CSK";
console.log("favTeam: ", FAVTEAM);

// favTeam = "RCB"; // Error -> Assignment to constant variable.
// console.log(favTeam);

// By Default, variable declared but value not assigned -> undefined
let a;
console.log(a);
a = 10;
console.log(a);

// Not Appicable for const will throw error
// const b;
// console.log(b);

// Block Scope
{
  let a = 5;
  console.log(a);
}
{
  let a = 10;
  console.log(a);
}

// DataTypes in JS
// Number, String, Boolean, Undefined, Null, BigInt, Symbol
// Primitive(7 types), Non-Primitive(Objects[Array, Functions])

// Object
const student = {
  fullName: "Aman Asati",
  age: 20,
  cgpa: 8.61,
  isPass: true,
};
console.log(student);
console.log(student["fullName"]);

student["age"] = student["age"] + 1;
console.log(student["age"]);

// Practice
// Q1. Create a const Object called product to store information

const product = {
  productName: "Ball Pen",
  productRating: 4.2,
  discountOffer: 10,
  productPrice: 270,
  isDealOfDay: true,
};
console.log(product);

// Q2. Create a const Object called profile to store information

const userProfile = {
  displayName: "amanasati11",
  isFollowing: true,
  message: "Hey Leaning is Good",
  totalPost: 129,
  followers: 700000,
  following: 1,
  userName: "Aman Asati",
  jobTitle: "Software Engineer",
  userBio: "22 | Keeping it real.",
};
console.log(userProfile);
