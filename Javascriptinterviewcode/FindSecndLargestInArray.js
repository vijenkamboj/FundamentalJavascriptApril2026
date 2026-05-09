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
