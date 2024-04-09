console.log("Loops And Strings");

// Print 1 to 5
for (let i = 1; i <= 5; i++) {
  console.error("Aman");
}
console.log("Loop has ended");

// // Calculate Sum of first N numbers
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
