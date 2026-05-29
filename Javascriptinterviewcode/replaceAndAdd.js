let str = "$ubqo1234";
let a = str
  .replace(/[^0-9]/gi, "")
  .split("")
  .map((a) => parseInt(a)) //or map(Number)
  .reduce((a, b) => a + b, 0);
console.log(a);

let str = "$ubqo1234";
let a = str
  .replace(/[^0-9]/gi, "")
  .split("")
  .map(Number) // ← changed here
  .reduce((a, b) => a + b, 0);
console.log(a); // 10
//replace with "" deletes characters —
// it doesn't swap them for spaces. So there's nothing to trim.
//but no whitespace is created when you remove characters with replace.


