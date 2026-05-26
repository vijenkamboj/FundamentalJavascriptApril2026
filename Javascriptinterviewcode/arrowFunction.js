// Shorter & Cleaner:
// Removes the need for function keyword, curly braces, and return when returning a single expression.

// Lexical this:
// Arrow functions don’t create their own this. Instead, they inherit this from the enclosing scope. This makes them useful in callbacks where you want to preserve context.

// Limitations:

// Cannot be used as constructors (new will throw an error).

// No arguments object (use rest parameters instead).

// Cannot use yield (not suitable for generator functions).

// Always expressions, not declarations (must be assigned to a variable or used inline).
const myFunc = (x, y) => {
  x * y;
}; // returns undefined
const myFuncCorrect = (x, y) => x * y; // returns product

// what are aarow function in js
// Arrow functions in JavaScript are a concise way to write
// function expressions, introduced in ES6. They use the => syntax,
// don’t bind their own this, arguments, or super, and
// are best suited for short, non-method functions.
