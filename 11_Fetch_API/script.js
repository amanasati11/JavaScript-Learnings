console.log("Fetch API in JS");

// Fetch API provides an interface for fetching (sending/receiving) resources.
// It uses Request and Response object.
// The fetch() method is used to fetch a resource (data).

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

let promise = fetch(URL);
console.log(promise);

const getFact = async () => {
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data);
  factPara.innerText = data[1].text;
};

btn.addEventListener("click", getFact);

//** Understanding Terms */
// AJAX is Asyncronous JS & XML
// JSON is JavaScript Object Notation
// json() method: return second promise that resolved with the result of parsing the response body text as JSON.

//** Request and Response */
// HTTP (HyperText Transfer Protocols) Verbs: get, post, head, delete
// Response status code
// 100 - 199 (Informational Response)
// 200 - 299 (Successful Response)
// 300 - 399 (Redirectional Response)
// 400 - 499 (Client error Response)
// 500 - 599 (Server error Response)

// HTTP response headers also contains details about the responses, such as content type, HTTP status code etc.
