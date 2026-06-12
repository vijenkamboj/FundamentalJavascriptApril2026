function anagramexample(s1, s2) {
  let s3 = s1.toLowerCase().split("").sort().join("");
  let s4 = s2.toLowerCase().split("").sort().join("");
  let result = s3 === s4 ? "Strings are anagram" : "Strings are not anagram";
  console.log(result);
}

anagramexample("listeN", "silent"); // Strings are anagram
anagramexample("hello", "bata"); // Strings are not anagram

//An anagram is a word or phrase formed by rearranging the letters of
//another word or phrase, using all the original letters exactly once.

// Usage
// isAnagram("silent", "Listen");   // Strings are anagram
// isAnagram("hello", "world");     // Strings are not anagram
// ⚡ Key Parallels
// Java toLowerCase() → JavaScript .toLowerCase()

// Java toCharArray() → JavaScript .split("")

// Java Arrays.sort() → JavaScript .sort()

// Java Arrays.equals() → JavaScript === after .join("")
//s1.toLowerCase();

// Converts the string to lowercase, just like Java’s .toLowerCase().

// .split("")- Example: "silent" → ["s","i","l","e","n","t"]-array of characters

// Splits the string into an array of characters.

// Equivalent to Java’s .toCharArray().

// .sort()

// Sorts the array alphabetically.

// Equivalent to Arrays.sort(arr1) in Java.

// Example: ["s","i","l","e","n","t"] → ["e","i","l","n","s","t"]

// .join("")

// Joins the sorted array back into a string.
//Splitting by " " (space):
// If you want to check anagrams, you should split into characters, not words.
// Use .split("") instead of .split(" ").
//reduce() works directly with array but for strings you need Convert string to an  array first using .split("")

// "Listen"                       "Silent"
//     ↓  toLowerCase()               ↓
// "listen"                       "silent"
//     ↓  split("")                   ↓
// ["l","i","s","t","e","n"]    ["s","i","l","e","n","t"]
//     ↓  sort()                      ↓
// ["e","i","l","n","s","t"]    ["e","i","l","n","s","t"]
//     ↓  join("")                    ↓
//   "eilnst"          ===          "eilnst"
//                      ↓
//               ✅ ANAGRAM
