const retries = null;
console.log(retries ?? 3); // 3
//Since retries is null, the right-hand side (3) is used.

const retries = 0;
console.log(retries ?? 3); // 0   (keeps 0, because it’s not null/undefined)
console.log(retries || 3); // 3   (falls back, because 0 is falsy)

const extractNumbers = (str) => str.match(/\d+(\.\d+)?/g)?.map(Number) ?? [];
extractNumbers("timeout: 3000ms, retries: 3, threshold: 0.75");
// \d+ → one or more digits.
// (\.\d+)? → optional decimal part.
// g flag → find all matches.
// So it matches integers and decimals: "3000", "3", "0.75".
// [3000, 3, 0.75]

// Optional chaining ?.map(Number)
// If match returned an array → .map(Number) converts each string to a number.
// If match returned null → ?. prevents an error, result is undefined.
// Nullish coalescing ?? []
// If the left side is null or undefined, return [].
// Ensures the function always returns an array.

//Optional Chaining (?.)
const user = { profile: { name: "Vijender" } };
console.log(user.profile?.name); // "Vijender"
console.log(user.address?.city); // undefined (no error!)

//Nullish Coalescing (??)
//Provides a default value if the left side is null or undefined.
const retries = null;
console.log(retries ?? 3); // 3
