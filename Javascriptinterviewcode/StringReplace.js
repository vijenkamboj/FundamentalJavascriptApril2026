let s1 = "abc123xyz";
let s = s1.replace(/[0-9]/g, "");
console.log(s); // "abcxyz"

let s2 = s1.replace(/[^0-9]/g, "");
console.log(s2); // "123"

//JavaScript uses String.prototype.replace() with regular expressions:
//Shortcut
//Instead of [0-9], you can use \d (digit shorthand):

//let s1 = "abc123xyz";
let s4 = s1.replace(/\d/g, "");
console.log(s4); // "abcxyz"

//You can also use \D (non-digit shorthand)
let s3 = s1.replace(/\D/g, "");
console.log(s3); // "123"

//If you want the digits as a number instead of a string:
let s5 = s1.replace(/\D/g, "");
let num = parseInt(s2, 10);
console.log(num); // 123

//parseInt(string, radix) → converts a string into an integer using the specified base.

// Common bases:

// 10 → decimal (normal numbers we use daily).

// 2 → binary.

// 16 → hexadecimal.
