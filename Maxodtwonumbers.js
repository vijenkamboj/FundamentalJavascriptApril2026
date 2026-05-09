function maxOfTwo(a, b) {
  return a > b ? a : b;
}

function minOfTwo(a, b) {
  return a < b ? a : b;
}

console.log(maxOfTwo(16.78, 29.898)); // 29.898
console.log(minOfTwo(16.78, 29.898)); // 16.78
let a = 16.78;
let b = 29.898;

console.log(Math.max(a, b)); // 29.898
console.log(Math.min(a, b)); // 16.78
