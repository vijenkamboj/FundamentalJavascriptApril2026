function sumarr(arr) {
  let sum = arr.reduce((a, b) => a + b, 0);
  console.log(sum);
}
sumarr([1, 2, 3, 4, 5]);

//reduce() works directly with array but for strings you need
// Convert string to an  array first using .split("")

// Simple way to remember:
// .split() lives on strings
// .reduce() lives on arrays
// always check what type your data is before calling a method on it
// string → need to convert to array first
// "hello"
// → "hello".split("")        // ["h","e","l","l","o"]
// → .reduce((a, b) => ...) // ✅ now reduce works

// // number → need to convert to string first
// 1234
// → (1234).toString()        // "1234"
// → .split("")               // ["1","2","3","4"]
// → .reduce((a, b) => ...)  // ✅ now reduce works
// Data   Method needed    Conversion needed
// number   .split()        number → string
// string   .reduce()      string → array
// array    .reduce()         none ✅
