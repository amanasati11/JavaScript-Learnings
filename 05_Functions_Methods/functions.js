console.log("Functions In JS");

function myFunc() {
  console.log("Hey, Inside Functions");
}
myFunc();

function myFunParam(msg) {
  // parameters
  console.log(msg);
}

myFunParam("Printing the Params!"); // argument

function sum(x, y) {
  result = x + y;
  return result;
}
let value = sum(12, 5);
console.log(value);

// Arrow Functions

const arrowSum = (a, b) => {
  return a + b;
};
console.log(arrowSum(5, 8));

const arrowMul = (a, b) => {
  return a * b;
};
console.log(arrowMul(3, 4));

const printHello = () => {
  console.log("Hello!"); // one way
};
printHello();

const consoleHello = () => console.log("Hello!"); // other way
consoleHello();

// Practice Questions

function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}

let noOfVowels = countVowels("Aman");
console.log(noOfVowels);

const countVow = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};

let countNoVowels = countVow("amanasati");
console.log(countNoVowels);

// ForEach Loop in JS // **Higher Order Function/Methods //
// Funtions in JS can be passed as parameters
// A callBack funtion passed as an argument to another function
let array = ["jabalpur", "pune", "delhi"];
array.forEach(function printVal(val, idx, arr) {
  // value at each index
  console.log(val.toUpperCase(), idx, arr);
});

// Practice Question
let num = [2, 4, 5, 6, 7];

let calSquare = (num) => {
  console.log(num * num);
};

num.forEach(calSquare);

// Map in Array //**Creates a new array with the result of some operation. The value its callBack return are used to form new array */

let nums = [1, 4, 7, 8];

let newArr = nums.map((val) => {
  return val * val * val;
});
console.log(nums);
console.log(newArr);

// Filter in Array //**Creates a new array of element thant gives true for a condition/filter */
let mixArr = [1, 5, 8, 90, 23, 25, 24, 76, 84, 78];
let evenArr = mixArr.filter((val) => {
  return val % 2 === 0;
});
let oddArr = mixArr.filter((val) => {
  return val % 2 !== 0;
});
console.log(mixArr);
console.log(evenArr);
console.log(oddArr);

// Reduce in Array //**Perform some operation & reduces the array to single value. It returns that single value */
const array1 = [1, 2, 3, 4, 5];
const resultArr = array1.reduce((prev, curr) => {
  return prev + curr;
});
console.log(array1);
console.log(resultArr);

let array2 = [1, 5, 3, 9, 22, 98, 4, 34];
const largeNoArr = array2.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});
console.log(largeNoArr);
