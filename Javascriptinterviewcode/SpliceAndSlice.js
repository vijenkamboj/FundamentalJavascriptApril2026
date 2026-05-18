//.slice() — works on strings and arrays, does not modify original:

// string
let s = "Rahul Sharma";
s.slice(0, 5); // "Rahul"
s.slice(6, 12); // "Sharma"
console.log(s); // "Rahul Sharma" → original unchanged ✅

// array
let arr = [1, 2, 3, 4, 5];
arr.slice(0, 3); // [1, 2, 3]
console.log(arr); // [1, 2, 3, 4, 5] → original unchanged ✅

//.splice() — works on arrays only, modifies original:
let arr = [1, 2, 3, 4, 5];

// splice(startIndex, deleteCount)
arr.splice(1, 2); // removes 2 elements from index 1
console.log(arr); // [1, 4, 5] → original CHANGED ❌

// splice can also insert
arr.splice(1, 0, 10, 20); // insert 10, 20 at index 1
console.log(arr); // [1, 10, 20, 4, 5]

// arr.splice(start, deleteCount, item1, item2, ...)

// start (1) → the index where changes begin (here, index 1).

// deleteCount (0) → how many elements to remove (here, none).

// item1, item2 (10, 20) → elements to insert at that position.
