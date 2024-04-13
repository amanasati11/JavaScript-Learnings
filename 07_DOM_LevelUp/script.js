console.log("DOM - Level UP");
let div = document.querySelector("div");
console.dir(div);

let id1 = div.getAttribute("id");
console.dir(id1);
let name = div.getAttribute("name");
console.dir(name);

let para1 = document.querySelector("p");
console.dir(para1.getAttribute("class"));
console.dir(para1.setAttribute("class", "newClass"));

let styleDiv = document.querySelector("div");
console.dir(styleDiv.style);
console.dir((styleDiv.style.backgroundColor = "purple"));

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
console.log(newBtn);

let newDiv = document.querySelector("div");
newDiv.append(newBtn);
newDiv.prepend(newBtn);
newDiv.before(newBtn);
newDiv.after(newBtn);
// newDiv.remove(newDiv);
