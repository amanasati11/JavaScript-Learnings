console.log("Events in JS");
// The change in state of an object is known as event. Events are fired to notify code of "interesting changes" that may affect code execution.

//** Event Object */
// It is a special object that has details about the event.
// All Event handlers have access to the event objects properties and method
let btn1 = document.querySelector("#btn1");
btn1.onclick = (evt) => {
  console.log("btn1 was clicked");
  let a = 0;
  a++;
  console.log(a);
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
};

let div1 = document.querySelector("#div1");
div1.onmouseover = (evt) => {
  console.log("You hover over div1");
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
};

// Event Listeners // Through event listeners we can perform multiple operation in same event

btn1.addEventListener("click", (evt) => {
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
  console.log("btn1 is clicked - handler 1");
});

const handler2 = (evt) => {
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
  console.log("btn1 is clicked - handler 2");
};

btn1.addEventListener("click", handler2);

// The callBack function should be same to remove
btn1.removeEventListener("click", handler2);

// Practice Questions

let theme = document.querySelector("#changeTheme");
let body = document.querySelector("body");
let curMode = "light";

//** One Way */
// theme.addEventListener("click", () => {
//   if (curMode === "light") {
//     curMode = "dark";
//     document.querySelector("body").style.backgroundColor = "black";
//   } else {
//     curMode = "light";
//     document.querySelector("body").style.backgroundColor = "white";
//   }
//   console.log(curMode);
// });

//** Other Way */
theme.addEventListener("click", () => {
  if (curMode === "light") {
    curMode = "dark";
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    curMode = "light";
    body.classList.remove("dark");
    body.classList.add("light");
  }
  console.log(curMode);
});
