const price = "$1,250.00";
let s = parseFloat(price.replace(/[^0-9.]/g, "")); //. to remove dot as well
console.log(s);
