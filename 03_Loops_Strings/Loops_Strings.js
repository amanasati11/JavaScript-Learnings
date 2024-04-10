// console.log("Loops And Strings");

// Print 1 to 5
for (let i = 1; i <= 5; i++) {
  console.error("Aman");
}
console.log("Loop has ended");

// Calculate Sum of first N numbers
let sum = 0;
let n = 10;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log(sum);

let i = 1;
while (i <= 5) {
  console.log("i = ", i);
}

// for-of loop
size = 0;
strVal = "Aman Asati";
for (let val of strVal) {
  size++;
  console.log(val);
}
console.log("String size is equal to = ", size);

// for-in loop
let student = {
  fullName: "Aman",
  age: 24,
  cgpa: 8.61,
  isPass: true,
};
for (let key in student) {
  console.log("key", key, "value= ", student[key]);
}

// Practice Questions
console.log("List of Even Numbers 1-100");
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let gameNum = 25;
let userNum = prompt("Guess the Game Number");
while (userNum != gameNum) {
  userNum = prompt("You entered wrong Number guess number again");
}
console.log("Congratulations you entered correct Number");

// ---------------------------------------------------------------------//
// Strings // Strings are Immutable in JS
let str1 = "Aman";
let str2 = "Asati";

console.log(str1.length);
console.log(str2.length);

console.log(str1[0], str1[1], str1[2], str1[3], str1[4]);
console.log(str2[0], str2[1], str2[2], str2[3], str2[4]);

// Template Literals
let sentense = `This is a template literal`;
console.log(sentense);

let obj = {
  item: "pen",
  price: 10,
};
console.log("The cost of", obj.item, "is", obj.price); // one way
console.log(`The cost of ${obj.item} is ${obj.price}`); // String Interpolation / Template literals
console.log("Aman\nAsati"); // Escape Character
console.log("Aman\tAsati"); // Escape Character

// String Methods

console.log(str1.toUpperCase());
console.log(str2.toLowerCase());

let testStr = "      Aman Asati   ";
console.log(testStr);
console.log(testStr.trim());

let str = "012345678";
console.log(str.slice(1, 4)); // end index is non inclusive
console.log(str.slice(2));

let fName = "Aman";
let lName = "Asati";
console.log(fName.concat(lName));

console.log(fName.replace("a", "A"));
console.log(fName.replaceAll("a", "A"));

console.log(fName.charAt(0));

// Practice Question

let userName = prompt("Enter your username without spaces: ");
console.log("@" + userName);
