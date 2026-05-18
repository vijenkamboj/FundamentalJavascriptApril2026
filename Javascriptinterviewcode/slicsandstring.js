const str = "HelloWorld";
console.log(str.slice(2, 7)); // "lloWo"
console.log(str.slice(-5)); // "World"

const str = "HelloWorld";
console.log(str.substring(2, 7)); // "lloWo"
console.log(str.substring(-5, 4)); // "Hell" (negative → 0)
console.log(str.substring(7, 2)); // "lloWo" (swapped)
