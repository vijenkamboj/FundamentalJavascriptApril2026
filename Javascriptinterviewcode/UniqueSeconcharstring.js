//Use case: If the question is “find the second unique character as it appears in
//  the string,” this is the correct version.
// Set removes duplicates but preserves the order of first appearance.
// "vijenderi" → unique characters in order:
// ["v","i","j","e","n","d","r"]
// The second element is "i".

function secondUniqChrString(str) {
  const unique = [...new Set(str)]; // Set preserves first-seen order
  console.log(unique[1]); // directly grab 2nd unique char
}
secondUniqChrString("vijenderi"); // → 'i'

//Use case: If the question is “find the second unique character in
// sorted order,” this is the correct version.
// Set again removes duplicates → ["v","i","j","e","n","d","r"].
// .sort(a.localeCompare(b)) reorders alphabetically →
// ["d","e","i","j","n","r","v"]
// The second element is "j"

function secondUniqChrString(str) {
  const unique = [...new Set(str)].sort((a, b) => a.localeCompare(b));
  console.log(unique[1]);
}
secondUniqChrString("vijenderi"); // → 'j'

//Use localeCompare instead of a - b for string/character sorting:
// //Dry Run — "vijenderi" with sort
// Unique chars (insertion order): [v, i, j, e, n, d, r]
// After .sort(localeCompare) → [d, e, i, j, n, r, v]

// Problem: .sort((a, b) => a - b) is a numeric sort — it doesn't work on characters. Subtracting characters gives NaN, so the order is unpredictable.
// Also: You don't need to sort at all. The Set already preserves insertion order (first occurrence), so just pick index [1] directly.
