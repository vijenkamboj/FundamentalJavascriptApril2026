let nums = [3, 1, 4, 1, 5, 9, 2, 6, 3, 5];
let unique = [...new Set(nums)];

console.log(unique);
// [3, 1, 4, 5, 9, 2, 6]

// Set automatically stores only unique values.

// Spread operator (...) converts it back into an array.
