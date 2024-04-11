// Arrays In JS -> Liner
console.log("Arrays In JS");

let marks = [97, 82, 75, 13, 90];
console.log("Marks:", marks);
console.log("Lenght of Array:", marks.length);
console.log("Type of Array:", typeof marks);
console.log(marks[0], marks[1], marks[2], marks[3], marks[4], marks[5]);
marks[1] = 36; // mutable
console.log(marks);

// Looping over an Array
for (let idx = 0; idx < marks.length; idx++) {
  console.log(`Marks of student ${idx + 1} :`, marks[idx]);
}

for (let studentMarks of marks) {
  console.log(studentMarks);
}

for (let studentMarks of marks) {
  console.log(studentMarks.toString());
}

// Practice Question

let studentMarks = [86, 97, 44, 37, 76, 60];
let sum = 0;

for (let marks of studentMarks) {
  sum += marks;
}
console.log("Students Marks:", studentMarks);
console.log("Total Sum:", sum);
let avgMarks = sum / studentMarks.length;
console.log("Avg Marks of Students:", avgMarks.toFixed(2));

let items = [250, 645, 300, 900, 50];
let idx = 0;
for (let val of items) {
  console.log(`Value at index ${idx} = ${val}`);
  let offer = val / 10;
  items[idx] -= offer;
  console.log("Value After Offer:", items[idx]);
  idx++;
}

// Array Methods

let var1 = studentMarks.push(12); // return the new lenght of the array
console.log("var1:", var1, "studentArray:", studentMarks);
let var2 = studentMarks.pop(); // return the deleted element
console.log("var2:", var2, "studentArray:", studentMarks);
console.log(studentMarks);
console.log(studentMarks.toString());

console.log(studentMarks.concat(items));
studentMarks.unshift(90);
console.log(studentMarks);
let var3 = studentMarks.shift();
console.log(var3, studentMarks);

console.log(studentMarks);
console.log(studentMarks.slice(1, 3)); // slice dont work on same array
console.log(studentMarks.slice(1, 3)); // splice work on same array
studentMarks.slice(1, 3, 89); // splice work on same array
console.log(studentMarks);

// Arrays Problems
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "NetFlix"];
companies.shift();
console.log(companies);
companies.splice(1, 1, "Ola");
console.log(companies);
companies.push("Amanzon");
console.log(companies);
