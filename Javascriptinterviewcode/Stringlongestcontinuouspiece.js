//Find the longest continuous piece of a string where no character appears twice.
// The word "substring" means
// Continuous — you cannot skip characters.
let s = "abcabcbb";
function longestSubstring(str) {
  let set = new Set(); // tracks chars in current window
  let start = 0;
  let longest = "";

  for (let end = 0; end < str.length; end++) {
    // if duplicate found, shrink window from left
    while (set.has(str[end])) {
      set.delete(str[start]);
      start++;
    }
    // add current char to window
    set.add(str[end]);

    // update longest if current window is bigger
    if (end - start + 1 > longest.length) {
      longest = str.slice(start, end + 1);
    }
  }

  return longest;
}
console.log(longestSubstring("abcabcbb")); // "abc"
// All possible substrings (continuous chunks):
// "a"         → length 1  ✅ no repeats
// "ab"        → length 2  ✅ no repeats
// "abc"       → length 3  ✅ no repeats  ← longest!
// "abca"      → length 4  ❌ "a" appears twice
// "abcab"     → length 5  ❌ "a" and "b" repeat
// "bcab"      → length 4  ❌ "b" appears twice
// "bca"       → length 3  ✅ no repeats (but same length as "abc")
// "cb"        → length 2  ✅ no repeats
// "b"         → length 1  ✅ no repeats
