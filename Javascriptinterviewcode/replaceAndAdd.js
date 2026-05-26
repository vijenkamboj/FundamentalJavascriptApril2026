let str = "$ubqo1234";
let a = str
  .replace(/[^0-9]/gi, "")
  .split("")
  .map((a) => parseInt(a))
  .reduce((a, b) => a + b, 0);
console.log(a);
