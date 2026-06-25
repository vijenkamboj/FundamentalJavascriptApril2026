// So the key is:

// Use Number() when the string is already clean and fully numeric.

// Use parseFloat() when you expect messy strings that may have trailing characters.

const price = "$1,250.00";
let s = parseFloat(price.replace(/[^0-9.]/g, "")); //[^0-9.] → means “NOT a digit or a dot.”
console.log(s);

const price = "$1,250.00";
let s = Number(price.replace(/[^0-9.]/g, "")); //You can achieve the same with Number():
console.log(s); // 1250

const price = "₹1,25,000.50";
// Remove everything except digits and decimal point
let cleaned = price.replace(/[^0-9.]/g, ""); //"1250.00" Number() function
//  parses "1250.00" as a numeric value.
let value = Number(cleaned);

console.log(value); // 125000.50
