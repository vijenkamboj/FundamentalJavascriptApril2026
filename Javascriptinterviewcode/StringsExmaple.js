// repeat
"ab".repeat(3); // 'ababab'
"-".repeat(40); // '----------------------------------------'

// padStart — pad from left (useful for IDs, formatting)
"42".padStart(6, "0"); // '000042'
"5".padStart(3, "0"); // '005'

// replaceAll — all occurrences (ES2021)
"aabbaa".replaceAll("a", "x"); // 'xxbbxx'

// replace — only first occurrence
endpoint.replace("{userId}", "42");
// '/api/v1/users/42/orders/{orderId}'

// replaceAll — all occurrences (ES2021)
"aabbaa".replaceAll("a", "x"); // 'xxbbxx'

// replace with regex (global flag = all occurrences)
endpoint.replace(/\{(\w+)\}/g, (match, key) => {
  const params = { userId: "42", orderId: "99" };
  return params[key] ?? match;
});
// '/api/v1/users/42/orders/99'

//### Q8. How do you check string start/end?
const contentType = "application/json; charset=utf-8";

contentType.startsWith("application"); // true
contentType.endsWith("utf-8"); // true
contentType.startsWith("text"); // false

// With position parameter
"hello world".startsWith("world", 6); // true

//Q10. How do you find the length and access characters?
const token = "abc123xyz";
token.length; // 9
// Character access
token[0]; // 'a'
token.charAt(0); // 'a'
token.charCodeAt(0); // 97 (ASCII code)
String.fromCharCode(97); // 'a'
// at() — ES2022
token.at(-1); // 'z' (last char)
token.at(-2); // 'y'

// Q12. How do you extract data using regex?

const response =
  "Error: Payment failed for transaction TXN-2024-98765 at 14:32:05";

// exec — returns match object with groups
const txnMatch = /TXN-\d{4}-(\d+)/.exec(response);
txnMatch[0]; // 'TXN-2024-98765'  (full match)
txnMatch[1]; // '98765'           (capture group 1)

// match — returns array of all matches
const digits = response.match(/\d+/g);
// ['2024', '98765', '14', '32', '05']

// Named capture groups — ES2018
const pattern = /TXN-(?<year>\d{4})-(?<id>\d+)/;
const { year, id } = response.match(pattern).groups;
// year = '2024', id = '98765'

/* response.match(pattern) returns a Match object.
.groups gives you an object with keys year and id.
Destructuring pulls them directly into variables. 
So the ? is just the marker that tells the regex engine: 
“This isn’t a plain group, it’s a special one — in this case, a named capture.”*/

// matchAll — iterate all matches (ES2020)
const allTxns = [..."TXN-001 TXN-002 TXN-003".matchAll(/TXN-(\d+)/g)];
allTxns.map((m) => m[1]); // ['001', '002', '003']
//(\d+)capture one or more digits — the () makes it a capture group
//\d+ = “find digits.”
//(\d+) = “find digits and remember them separately.”

// Without capturing group
const m1 = /TXN-\d{4}-\d+/.exec("TXN-2024-98765");
console.log(m1[0]); // "TXN-2024-98765"
// No way to directly get just "98765"

// With capturing group
const m2 = /TXN-\d{4}-(\d+)/.exec("TXN-2024-98765");
console.log(m2[0]); // "TXN-2024-98765"
console.log(m2[1]); // "2024"
console.log(m2[2]); // "98765"
/* m2[0] always contains the entire match (called Group 0).
m2[1] contains the first capturing group — in this case, "98765".
Since your regex only has one explicit group (\d+), you get:
m2[0] → "TXN-2024-98765" (full match)
m2[1] → "98765" (digits captured) */

// ── Challenge 5: Extract all numbers from a string ────────────────────────
const extractNumbers = (str) => str.match(/\d+(\.\d+)?/g)?.map(Number) ?? [];
extractNumbers("timeout: 3000ms, retries: 3, threshold: 0.75");
// [3000, 3, 0.75]
//\d+(\.\d+)?/g->Matches a whole number (\d+) and optionally a decimal part ((\.\d+)?).
//(\.\d+)? means: “There may or may not be a decimal part after the digits.”
///\d+(\.\d+)/g  with no ? Matches 0.75 ,Does not match 3000
// or 3 (because they don’t have a decimal part)
//With the ?, the decimal part is optional:/\d+(\.\d+)?/g
//Matches 3000 ✅
// Matches 3 ✅
// Matches 0.75 ✅
// This way, the regex can handle both integers and floating‑point numbers.
//Use ?.map(Number) ?? [] when you want a robust function 
// that never crashes, even if no numbers are found.
// Use plain .map(Number) only if
//  you’re 100% sure the regex will always find at least one match.
//?. → prevents errors when .match() returns null.
//?? [] → guarantees a fallback empty array if no numbers are found.
