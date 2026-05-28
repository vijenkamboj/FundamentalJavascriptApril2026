let obj = { name: "vijender" };
console.log(obj);

let jsonStr = JSON.stringify(obj); //object → JSON  { name: "vijender" }->{"name":"vijender"}
console.log(jsonStr); //Useful for sending data over APIs or saving to files.
//JSON.stringify(obj) is the built‑in JavaScript method that
// converts a JavaScript object into a JSON string.

let parsed = JSON.parse(jsonStr); // JSON string → object {"name":"vijender"}->{ name: 'vijender' }
console.log(parsed);

//JSON string representing an object
let jsonStr1 = '{"name":"Vijender"}';
let obj1 = JSON.parse(jsonStr1);
console.log(obj1);
// { name: 'Vijender' }
console.log(typeof obj);
// "object"

//JSON string represents an array → you get a JS array.
let jsonStr2 = '["apple","banana","cherry"]';
let arr = JSON.parse(jsonStr2);

console.log(arr);
// [ 'apple', 'banana', 'cherry' ]
console.log(Array.isArray(arr));
// true

//reverse an let jsonStr = '["apple","banana","cherry"]';

let jsonStr3 = '["apple","banana","cherry"]';
// Step 1: Convert JSON string → JS array of strings

let jsarray = JSON.parse(jsonStr3);
console.log(jsarray);

let reverse = jsarray.map((a) => a.split("").reverse().join(""));
console.log(reverse);

/* JSON.parse(jsonStr) will return a JavaScript value that matches the JSON string:
If the JSON string represents an object → you get a JS object.
If the JSON string represents an array → you get a JS array.  */
