// Why ^ is needed in replace but not filter
// filter keeps matches → so match what you want → /[a-zA-Z]/
// replace removes matches → so match what you don't want → /[^a-zA-Z]/
//here replace and filter are both oppsoite

"hello1234$$$"
  .split("")
  .filter((c) => /[a-zA-Z]/.test(c)) //filter — keep letters only
  .join("");

split(""); //→ ["h","e","l","l","o","1","2","3","4","$","$","$"]

filter; ///→ ["h","e","l","l","o"]   // 1,2,3,4,$,$,$ fail the test

join(""); //→ "hello"

"hello1234$$$".replace(/[^a-zA-Z]/g, ""); //replace — remove non-letters //output → "hello"

"hello1234$$$".replace(/[a-zA-Z0-9]/g, "");
// → "$$$"
"hello1234$$$"
  .split("")
  .filter((c) => /[^a-zA-Z0-9]/.test(c))
  .join("");
// → "$$$"

//.test() is a built-in method that belongs to RegExp (Regular Expression) objects.
// What it does
// Takes a string, checks if the pattern matches, returns true or false — nothing else.
// /[a-zA-Z]/.test("h")   // true  ← "h" is a letter
//  /[a-zA-Z]/.test("1")   // false ← "1" is not a letter
//  /[a-zA-Z]/.test("$")   // false ← "$" is not a letter

//To keep ONLY special characters — remove letters AND digits
"hello1234$$$".replace(/[a-zA-Z0-9]/g, "");
// → "$$$"

// RegExp has 3 built-in methods
// Method           Returns                    Use when
// .test(str)       true/false                You just want to know if it matches
// .exec(str)       match details or null     You want info about what matched
// str.match(regex)  array or null            You want all matches from a string
