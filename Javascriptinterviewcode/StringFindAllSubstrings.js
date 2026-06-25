function allSubstrings(str) {
  let subs = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      subs.push(str.slice(i, j));
    }
  }
  return subs;
}
console.log(allSubstrings("abc")); // ['a','ab','abc','b','bc','c']

// //Example with "abc"
// i = 0

// j = 1 → "a"

// j = 2 → "ab"

// j = 3 → "abc"

// i = 1

// j = 2 → "b"

// j = 3 → "bc"

// i = 2

// j = 3 → "c"

👉 Collectively: ['a','ab','abc','b','bc','c']
