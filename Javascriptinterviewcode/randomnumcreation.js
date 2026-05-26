let n = 10;
let randomno = Math.floor(Math.random() * (n + 1));
console.log(randomno);

// Math.random() → gives a decimal between 0 and 0.999...
// * (n + 1) → scales it to between 0 and 10.999...
// Math.floor() → rounds down to a whole number → 0 to 10
