function reverseEachWord(str) {
  // Split the string into words
  let words = str.split(" ");

  // Reverse each word individually
  let reversedWords = words.map((word) => {
    return word.split("").reverse().join("");
  });

  // Join them back with spaces
  return reversedWords.join(" ");
}

// Test
console.log(reverseEachWord("Hello World")); // Output: "olleH dlroW"
