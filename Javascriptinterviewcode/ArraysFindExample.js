function arrayfind(arr) {
  let result = arr.find((element) => element > 10);
  console.log(result);
}
arrayfind([1, 5, 15, 20]);

// 🔹 Why does it return only 15 and not 15 and 20?
// The method you’re using is .find().
// .find() searches the array and returns the first element that matches the condition.
// In your case, the condition is element > 10.
// The array [1, 5, 15, 20] is checked left to right:
// 1 > 10 → false
//  > 10 → false
// 15 > 10 → true ✅ → stops here and returns 15
// It never even checks 20, because .find() stops after the first match.
/* Arrow =>) have a shorter syntax and do not bind their own 'this', 'arguments', or 
'super'. They inherit 'this' from the enclosing lexical scope. In Playwright tests, arrow 
functions are typically used for test callbacks and page.evaluate() calls.   */

//TAS
