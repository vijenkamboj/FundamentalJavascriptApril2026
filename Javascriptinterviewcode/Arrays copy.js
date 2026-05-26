// slice(start, end) — extracts elements from index 1 up to (not including) index 4
let mark = [90, 80, 70, 60, 50];
let subarray = mark.slice(1, 4);
console.log(subarray); // [80, 70, 60]

// join() — merges all array elements into one string, separated by given string
let markString = mark.join(", ");
console.log(markString); // "90, 80, 70, 60, 50"

// split() — breaks a string into an array using given separator
let markArray = markString.split(", ");
console.log(markArray); // ["90", "80", "70", "60", "50"]

// reduce() — loops through array accumulating a running sum
// sum = accumulator (starts at 0), total = current element
let totalsum = mark.reduce((sum, total) => sum + total, 0);
console.log(totalsum); // 350

// filter() — returns new array with only elements that pass the condition
let scores = [12, 13, 14, 15, 16, 17, 18, 19, 20];
let evenno = scores.filter((score) => score % 2 == 0);
console.log(evenno); // [12, 14, 16, 18, 20]

// map() — returns new array by applying a function to every element
let multiplybythree = evenno.map((mul) => mul * 3);
console.log(multiplybythree); // [36, 42, 48, 54, 60]

// sort() — sorts strings alphabetically in place (modifies original array)
let fruites = ["banana", "apple", "grape", "orange"];
fruites.sort();
console.log(fruites); // ["apple", "banana", "grape", "orange"]

// sort() with comparator — sorts numbers in ascending order
// (a - b): negative = a first, positive = b first, 0 = equal
let numbers = [5, 2, 9, 1, 5, 6];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers); // [1, 2, 5, 5, 6, 9]

// forEach() — runs a function on each element, no return value
const numbers1 = [1, 2, 3, 4];
numbers1.forEach((num) => {
  console.log(num * 2);
});
// 2
// 4
// 6
// 8

// forEach() with index — gives both the element and its position
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
// 0: apple
// 1: banana
// 2: cherry

// for...of — cleaner loop to iterate over array values directly (no index needed)
const arr = ["apple", "banana", "cherry"];
for (const fruit of arr) {
  console.log(fruit);
}
// apple
// banana
// cherry

// new Set() removes duplicates, spread [...] converts back to array, then sorted
// new Set(nums) → {5, 3, 9, 1} (unique, insertion order)
// [...new Set(nums)] → [5, 3, 9, 1]
// .sort((a, b) => a - b) → sorted numerically
let nums = [5, 3, 9, 1, 5, 3];
let treeSetLike = [...new Set(nums)].sort((a, b) => a - b);
console.log(treeSetLike); // [1, 3, 5, 9]

// join() variations — default separator is comma, "" = no gap, "-" = dash between
let bikes = ["apple", "banana", "cherry"];
console.log(bikes.join()); // "apple,banana,cherry"
console.log(bikes.join("")); // "applebananacherry"
console.log(bikes.join("-")); // "apple-banana-cherry"

// at(-1) — accesses last element using negative index (-1 = last, -2 = second last)
let items = [1, 2, 3, 4, 5];
console.log(items.at(-1)); // 5

// Math.max/min with spread — ... unpacks array into individual arguments
console.log(Math.max(...items)); // 5
console.log(Math.min(...items)); // 1

//second highest from array
function secondHighest(arr) {
  const unique = [...new Set(arr)]; // remove duplicates
  unique.sort((a, b) => b - a); // sort descending
  return unique[1]; // second element
}
secondHighest([10, 5, 20, 8, 20]); // 10

//In a string
function secondHighest(arr) {
  const unique = [...new Set(arr)]; // remove duplicates
  unique.sort((a, b) => b.localeCompare(a)); // sort descending (Z → A)
  return unique[1]; // second element
}

secondHighest(["banana", "apple", "mango", "apple"]); // "mango"
secondHighest(["z", "a", "m", "b"]); // "m"
