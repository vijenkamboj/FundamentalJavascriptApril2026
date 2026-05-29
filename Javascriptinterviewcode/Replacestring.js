let s = "He$ll@%oWorld!";

// Extract only letters
let letters = s.replace(/[^A-Za-z]/g, "");
console.log("Letters:", letters); // "HelloWorld"

// Extract only digits
let digits = s.replace(/[^0-9]/g, "");
console.log("Digits:", digits); // "" (no digits in this case)

// Extract only special characters
let specials = s.replace(/[A-Za-z0-9]/g, "");
console.log("Specials:", specials); // "$@%!"
