let day = "Tuesday";
console.log(day.length); //length of a string
console.log(day.toUpperCase()); //convert to uppercase
console.log(day.toLowerCase());

//accessing characters in a string
console.log(day[0]);

//find the index of a character in a string
console.log(day.indexOf("s"));

//check if a string includes a substring
console.log(day.includes("day"));

//replace a substring with another substring
let newDay = day.replace("Tuesday", "Wednesday");
console.log(newDay);

//split a string into an array of substrings
let words = day.split("s");
console.log(words);
console.log(words[0].trim().length); //length of the first word after trimming whitespace
console.log(day.startsWith("T")); //check if a string starts with a substring
console.log(day.endsWith("y")); //check if a string ends with a substring
console.log(day.charAt(2)); //access a character at a specific index
console.log(day.trim()); //remove whitespace from both ends of a string
console.log(day.repeat(3)); //repeat a string a specified number of times
console.log(day.substring(1, 4)); //extract a substring from a string
console.log(day.slice(1, 4)); //extract a substring from a string
console.log(day.concat(" is a day of the week")); //concatenate two strings
let a = "123";
let b = "456";
let diff = parseInt(a) + parseInt(b); //convert string to integer and add
console.log(diff);
console.log(diff.toString()); //convert integer back to string

let day1 = "friday is a funday";

console.log(day1.split(" ")); //split a string into an array of substrings based on space
console.log(day1.indexOf("day")); //find the index of a substring in a string

//ocurrence of day in the string
let count = 0;
let value = console.log(day1.indexOf("day"));
while (day1 != -1) {
  count++;
  value = day1.indexOf("day", value + 1);
}
console.log(count); //count the number of occurrences of a substring in a string
