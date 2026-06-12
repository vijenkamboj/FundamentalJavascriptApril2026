function StringChallenge(str) {
  // Split the string into words (not characters)
  let str1 = str.split(" "); //["I", "Love", "Code"]

  // Reverse each word properly
  let stringReverse = str1.map((a) => a.split("").reverse().join("")); //["I", "evoL", "edoC"]

  // Reverse the order of words, then join with spaces
  return stringReverse.reverse().join(" "); //"edoC evoL I"
}

// keep this function call here
console.log(StringChallenge("I Love Code")); // Output: edoC evoL I
