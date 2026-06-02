const retries = null;
console.log(retries ?? 3); // 3
//Since retries is null, the right-hand side (3) is used.

const retries = 0;
console.log(retries ?? 3); // 0   (keeps 0, because it’s not null/undefined)
console.log(retries || 3); // 3   (falls back, because 0 is falsy)

const extractNumbers = (str) => str.match(/\d+(\.\d+)?/g)?.map(Number) ?? [];
extractNumbers("timeout: 3000ms, retries: 3, threshold: 0.75");
// [3000, 3, 0.75]
//?.map(Number)
// Optional chaining (?.) says:
// “If the result is not null, run .map(Number).
// If it is null, just return undefined.”
// Then ?? []
// ensures you always get an array back (empty if no matches).

//Optional Chaining (?.)
const user = { profile: { name: "Vijender" } };
console.log(user.profile?.name); // "Vijender"
console.log(user.address?.city); // undefined (no error!)

//Nullish Coalescing (??)
//Provides a default value if the left side is null or undefined.
const retries = null;
console.log(retries ?? 3); // 3
