//subarray of an array
let mark = [90, 80, 70, 60, 50];
let subarray = mark.slice(1, 4);
console.log(subarray);

//join all the elements of an array into a string
let markString = mark.join(", ");
console.log(markString);

//split a string into an array
let markArray = markString.split(", ");
console.log(markArray);

//reduce an array to a single value
let totalsum = mark.reduce((sum, total) => sum + total, 0);
console.log(totalsum);

//filter an array
let scores = [12, 13, 14, 15, 16, 17, 18, 19, 20];
let evenno = scores.filter((score) => score % 2 == 0);
console.log(evenno);

//map an array
let multiplybythree = evenno.map((mul) => mul * 3);
console.log(multiplybythree);

//sort array in ascending order
let fruites = ["banana", "apple", "grape", "orange"];
fruites.sort();
console.log(fruites);

let numbers = [5, 2, 9, 1, 5, 6];
numbers.sort(function (a, b) {
  return a - b;
}); //miminum diffrence btwn two numbers likebubble sort
console.log(numbers);

const numbers1 = [1, 2, 3, 4];
numbers.forEach((num) => {
  console.log(num * 2);
});
// Output: 2, 4, 6, 8
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
// Output:
// 0: apple
// 1: banana
// 2: cherry

const arr = ["apple", "banana", "cherry"];
for (const fruit of arr) {
  console.log(fruit);
}

//removing duplicates from an array
let nums = [5, 3, 9, 1, 5, 3];
let treeSetLike = [...new Set(nums)].sort((a, b) => a - b);
console.log(treeSetLike);
// [1, 3, 5, 9]

// Step by step:

// new Set(nums) → {5, 3, 9, 1} (unique values, insertion order).

// ...new Set(nums) → expands into 5, 3, 9, 1.

// [...new Set(nums)] → creates [5, 3, 9, 1].

// .sort((a, b) => a - b) → sorts numerically → [1, 3, 5, 9].
