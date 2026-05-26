function secondlargest(arr) {
  let unique = [...new Set(arr)]; // Remove duplicates
  let ascendingsort = unique.sort((a, b) => a - b); //sort in Asending  order(a,b) =>b-a sort in desceding order
  console.log(ascendingsort);
  console.log(ascendingsort[3]);
}
secondlargest([6, 10, 60, 5, 34]);

//For strings — need .split("") first:
let s = "vijender";
let unique = [...new Set(s.split(""))];
console.log(unique); // ["v","i","j","e","n","d","r"]
//array         [...new Set(arr)]
//string        [...new Set(s.split("")

// "vijender"
// → .split("")  → ["v","i","j","e","n","d","e","r"]
// → new Set()   → {"v","i","j","e","n","d","r"}  // duplicate "e" removed ✅
// → [...]       → ["v","i","j","e","n","d","r"]

function findsecondlargest(arr) {
  let a = [...new Set(arr)].sort((a, b) => a - b);
  console.log(a[4]);
}
findsecondlargest([5, 4, 6, 2, 1, 4, 8]);
//sort((a, b) => a - b) — sorts numbers in ascending order

// string — convert to array, sort, join back
let str = "dcba";
let sorted = str.split("").sort().join("");
console.log(sorted); // "abcd"

//Reverse alphabetical (Z to A):
let sorted = str.split("").sort().reverse().join("");
console.log(sorted); // "dcba"

//let str = "dcba";
console.log(str.split("")); // ["d", "c", "b", "a"]

//For string arrays, .sort() without a comparator sorts alphabetically (A to Z) by default.
//Simple rule — for strings .sort() works fine, for numbers always use (a, b) => a - b.
