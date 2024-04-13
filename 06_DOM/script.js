console.log("DOM - Document Object Model");

// Window Object
//** The window object represent an open window in a browser. It is browser's object (not JavaScript's) & is automatically created by browser */
// It is a global object with lots of  properties and objects.
console.log(window);
window.console.log("hello"); // Part of window object
// window.alert("Hey");

//** DOM */ Document Object Model - when a web page is loaded, the browser creates a DOM of the page
// All elements in HTML are accesible in javaScript, all these elements are converted in object and this object is known as document.
// Tree like Structure
console.log(window.document); // prints on the console
console.dir(window.document); // prints properties and methods of special object (document)

console.dir(document.body);
console.log(document.body);

console.dir(document.head);
console.dir(document.body.childNodes[1]);

console.log("*******************");
console.log("DOM Manipulation");
// DOM Manipulation
let heading = document.getElementById("header1");
console.dir(heading);

let getElementsByClassName = document.getElementsByClassName("heading2");
console.dir(getElementsByClassName);

let getElementsByTagName = document.getElementsByTagName("h1");
console.dir(getElementsByTagName);

let paras = document.getElementsByTagName("p");
console.dir(paras);

let element1 = document.querySelector("p"); // return 1st element
console.dir(element1);

let allElements = document.querySelectorAll("p"); // return all matching elements // Returns NodeLists
console.dir(allElements);

//** for classes we use . and for ids we use # in querySelector*/

let div = document.querySelector("div");
console.dir(div);
console.dir(div.innerText);
console.dir((div.innerText = "Abcd"));

// Practice Questions

let heading1 = document.querySelector("#heading1");
console.dir(heading1.append(" From Aman Asati"));
