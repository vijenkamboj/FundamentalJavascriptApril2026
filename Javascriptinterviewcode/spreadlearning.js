//The spread operator (...) in JavaScript is a handy syntax that lets
// you "expand" arrays, objects, or strings into individual elements or properties.
//  It’s often used for copying, merging, or passing values.
//arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

// Merge arrays
const merged = [...arr1, ...arr2]; // [...new Set(arr)],Math.max(...items)
console.log(merged); // [1, 2, 3, 4, 5]

// Copy array
const copy = [...arr1];
console.log(copy); // [1, 2, 3]

//objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Merge objects
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }

// Copy object
const copyObj = { ...obj1 };
console.log(copyObj); // { a: 1, b: 2 }
