// Comparison Table
// Method	        Works On	   Return Type	  Behavior	Example
// .includes()	  String, Array	   Boolean (true/false)	   Checks if the element/substring exists	["a","b"].includes("b") // true
// .indexOf()	  String, Array	   Number (index or -1)	  Returns the position of the element/substring	["a","b"].indexOf("b") // 1
// .find()	      Array only	   Element (or undefined)	Returns the first matching element	[5,10,15].find(x => x > 9) // 10
//.findIndex()     Only Array
// const arr = ["apple", "banana", "cherry"];
// console.log(arr.findIndex(fruit => fruit.startsWith("b"))); // 1
// console.log(arr.findIndex(fruit => fruit.length > 6));      // 2

// Summary
// .findIndex() → Arrays only, returns index based on condition.
// .indexOf() → Works on both arrays and strings, returns index of exact match.
// .includes() → Works on both arrays and strings, returns boolean (existence check).

const arr = ["apple", "banana", "cherry"];
console.log(arr.findIndex((fruit) => fruit.length > 6));
// → 2   ("cherry" has length 6+, found at index 2)

const arr = ["apple", "banana", "cherry"];
console.log(arr.includes("banana")); // true
console.log(arr.includes("grape")); // false

const arr = ["apple", "banana", "cherry"];
console.log(arr.find((fruit) => fruit.length > 6));
// → "banana" (length 6+, first match)
