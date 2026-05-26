let str = "abc123xyz45";
let s1 = str
  .replace(/[^0-9]/gi, " ")
  .trim()
  .split(/\s+/)
  .map(Number)
  .reduce((a, b) => a + b, 0);
console.log(s1);
("12345");
console.log(typeof s1);
// //🕒 Flow Recap
// Original String → "abc123xyz45"

// Replace Non-Digits (/[^0-9]/g, " ") → " 123 45"

// Trim-Removes leading/trailing spaces → "123 45"
//split(/\s+/)) → ["123","45"]

// Convert to Numbers (map(Number)) → [123,45]

// Sum Numbers (reduce((a,b)=>a+b,0)) → 168

//So the flow is:
//"abc123xyz45" → " 123 45" → "123 45" → ["123","45"] → [123,45] → 168.

let num = 1234;
let str1 = num
  .toString() // "1234"
  .split("") // ["1","2","3","4"]
  .map(Number) // [1,2,3,4]
  .reduce((a, b) => a + b, 0); // 10  With 0, you always know the accumulator starts at a number.

console.log(str1); // 10

