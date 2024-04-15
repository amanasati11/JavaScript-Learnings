console.log("CallBacks, Promises & Async Await");
// async await >> promise chain >> callback Hell

// Synchronous in JS
//** The code runs in a particular sequence of instruction given in the program, Each instruction wait for previous instruction to complete its execution */
console.log("one");
console.log("two");
console.log("three");

// Asynchronous in JS
//** Sometimes due to sync programming, imp instruction gets blocked due to some previous instructions, which causes delay in the UI */
//** Async code excecution allows to execute next instruction immediately and does'nt block the flow */

function hello() {
  console.log("Hello");
}
setTimeout(hello, 4000);

console.log("one");
console.log("two");
setTimeout(() => {
  console.log("Arrow Function");
}, 4000);
console.log("three");
console.log("four");

// CallBacks
// Callback is a function passed as a argument to another function
function sum(a, b) {
  console.log(a + b);
}
function calculator(a, b, sumCallBack) {
  sumCallBack(a, b);
}
calculator(2, 3, sum);

// Callback Hell
// Nested callbacks stacked below one another forming a pyramid structure (pyramid of doom)
// this style of programming is diffuclt to understand and manage.

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data =", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}
getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});

// To Solve callBacks Hell Promises comes to picture
// Promise is for "eventual" completion of task. It is object in JS. // solution to callBack hell.
let promise = new Promise((resolve, reject) => {
  console.log("I am a Promise");
  resolve("success");
  // reject("some Error occored");
});
console.log(promise);

function getDataAPI(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data =", dataId);
      resolve("success");
      if (getNextData) {
        getNextData();
      }
    }, 2000);
  });
}

getDataAPI(1, () => {
  getDataAPI(2);
});

//** A JS promise object can be:
// Pending: the result is undefined
// Resolved: the result is a value (fulfilled) resolve(result)
// Rejected: the result is an error reject(error)

// Promises -> then() and catch()
const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I'm a promise");
    resolve("Success");
    // reject("error");
  });
};

let newPromise = getPromise();

newPromise.then((res) => {
  console.log("promise fullfilled", res);
});
newPromise.catch((err) => {
  console.log("Rejected", err);
});

// Promise Chaining
function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Some Data 1");
      resolve("Success");
    });
  }, 7000);
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Some Data 2");
      resolve("Success");
    });
  }, 8000);
}

// console.log("Getting data 1");
// const p1 = asyncFunc1();
// p1.then((res) => {
//   console.log(res);
// });

// console.log("Getting data 2");
// const p2 = asyncFunc2();
// p1.then((res) => {
//   console.log(res);
// });

// Chaining
console.log("Getting data 1");
asyncFunc1().then((res) => {
  console.log(res);
  console.log("Getting data 2");
  asyncFunc2().then((res) => {
    console.log(res);
  });
});

// asyncFunc1()
//   .then((res) => {
//     return asyncFunc2();
//   })
//   .then((res) => {
//     console.log(res);
//   });

// Async - Await
// async function always returns a promise.
// await function pauses the execution of its surrounding async function until the promise is settled.
// await api(); error
function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 2000);
  });
}

async function getWeatherData() {
  await api(); // 1st call
  await api(); // 2nd call
}

async function hello() {
  console.log("hello");
}
// Best Example
function getWeatherDataAPI(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data =", dataId);
      resolve("success");
    }, 5000);
  });
}

async function getAllData() {
  await getWeatherDataAPI(1);
  await getWeatherDataAPI(2);
  await getWeatherDataAPI(3);
}

// IIFE (IMMEDIATE INVOKED FUNCTION EXPRESSION)
// It is a function that is called immediately as soon as it is declared.

(async function () {
  await getWeatherDataAPI(1);
  await getWeatherDataAPI(2);
  await getWeatherDataAPI(3);
})();
