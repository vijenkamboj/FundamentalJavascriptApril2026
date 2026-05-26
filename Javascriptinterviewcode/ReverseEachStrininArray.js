let arr = ["Monday", "Tuesday", "Wednesday"];

let reversed = arr.map((a) => a.split("").reverse().join(""));
console.log(reversed); // ["yadnoM", "yadseuT", "yadsendew"]

// .split(" ") → works at the word level (reverses words).

// .split("") → works at the character level (reverses letters).
