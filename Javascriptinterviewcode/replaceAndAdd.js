let str = "$ubqo1234";
let a = str
  .replace(/[^0-9]/gi, "")
  .split("")
  .map((a) => parseInt(a)) //or map(Number)
  .reduce((a, b) => a + b, 0);
console.log(a);
