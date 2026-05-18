function seconunqchrstring(str) {
  let s = str.split("");
  console.log(s);
  let s1 = [...new Set(s)].sort((a, b) => a - b);
  console.log(s1[1]);
}
seconunqchrstring("vijenderi");

function secondUniqChrString(str) {
  const unique = [...new Set(str)]; // Set preserves first-seen order
  console.log(unique[1]); // directly grab 2nd unique char
}

secondUniqChrString("vijenderi"); // → 'i'

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
