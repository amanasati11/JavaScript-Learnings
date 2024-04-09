// Arithmetic Operators
let a = 5;
let b = 3;

console.log("a = ", a, " & b = ", b);

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);

console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);

// Unary Operators
// a = a + 1; result-> 6
a++;
console.log("a = ", a);
a--;
console.log("a = ", a);
console.log("a = ", a, "a++ = ", a++, "++a = ", ++a);

// Assignment Operators
let x = 10;
let y = 6;

x += 4;
console.log("x = ", x);

x -= 4;
console.log("x = ", x);

x *= 4;
console.log("x = ", x);

x /= 4;
console.log("x = ", x);

x %= 4;
console.log("x = ", x);

x **= 4;
console.log("x = ", x);

// Comparison Operators
a = 10;
b = 6;
console.log("a = ", a, " & b = ", b);

console.log("a == b", a == b);
console.log("a != b", a > b);
console.log("a > b", a > b);
console.log("a < b", a < b);
console.log("a === b", a === b);
console.log("a !== b", a > b);

// Logical Operators
a = 19;
b = 5;
console.log("a = ", a, " & b = ", b);

let cond1 = a > b;
let cond2 = a === 10;
console.log("cond1 && cond2 = ", cond1 && cond2);
console.log("cond1 || cond2 = ", cond1 || cond2);
console.log("!(a < b) = ", !(a < b));

// Conditional Statements

let age = 25;
if (age >= 18) {
  console.log("You can vote");
}

//
let mode = "blue";
let color;

if (mode === "dark") {
  color = "black";
} else if (mode === "blue") {
  color = "blue";
} else {
  color = "white";
}
console.log(color);

//
let num = 10;

if (num % 2 === 0) {
  console.log(num, "is Even");
} else {
  console.log(num, "is Odd");
}

// Ternary Operator

let userAge = 18;
let result = userAge >= 18 ? "Adult" : "Not Adult";

console.log(result);

// Practice Question

// alert("Hello"); // one time pop up
// prompt("Enter Someting"); // alert with a input
let number = prompt("Enter a Number: ");
if (number % 5 === 0) {
  console.log(num, "is multiple of 5");
} else {
  console.log(num, "not a multiple of 5");
}
