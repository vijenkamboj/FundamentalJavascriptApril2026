function palindrome(s) {
  let rev = s.split("").reverse().join("");
  console.log(s === rev ? "String is palindrome" : "String is not palindrome");
}

// Step-by-Step Explanation
// s.split("")

// Splits the string into an array of characters.

// Example: "madam".split("") → ["m","a","d","a","m"].

// .reverse()

// Reverses the order of elements in the array.

// Example: ["m","a","d","a","m"].reverse() → ["m","a","d","a","m"] (same in this case).

// .join("")

// Joins the array back into a string.

// Example: ["m","a","d","a","m"].join("") → "madam".
