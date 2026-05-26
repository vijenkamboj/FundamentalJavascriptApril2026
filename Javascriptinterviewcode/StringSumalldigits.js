function sumalldigits(str) {
  let s1 = str.replace(/[^0-9]/g, "");
  console.log(s1);
  let sum = s1
    .split("")
    .map((a) => parseInt(a)) //.map(Number)
    .reduce((a, b) => a + b, 0);
  console.log(sum);
}
sumalldigits("u4yu7oi9hj6");

// 1. .replace(/[^0-9]/g, "") — strip everything that isn't a digit.
//  The regex [^0-9] means "any character that is NOT 0–9".
// The g flag makes it replace all matches, not just the first. "a1b2c3" → "123".
// 2. .split("") — break the string into individual characters. "123" → ["1", "2", "3"].
//  Now you have an array to work with.
// 3. .map(a => parseInt(a)) — convert each character string to a real number. "1" → 1, "2" → 2, etc.
//  Without this, adding "1" + "2" would give "12" (string concat), not 3.
// 4. .reduce((a, b) => a + b, 0) — fold the array into one number by adding.
//  It starts with 0, then adds each element one at a time.
// The table shows exactly how the accumulator grows each pass.

/* "u4yu7oi9hj6"
     ↓ replace(/[^0-9]/g, "")   — remove all non-digits
"4796"
     ↓ split("")
["4", "7", "9", "6"]
     ↓ map(parseInt)
[4, 7, 9, 6]
     ↓ reduce(a + b, 0)
0+4 = 4
4+7 = 11
11+9 = 20
20+6 = 26 */

//     Key Differences
// Method	                Behavior	                      Pitfall
// .map(a => parseInt(a))	Safe                   if you explicitly pass only the element	If you accidentally use .map(parseInt), index becomes radix → wrong results
// .map(Number)	          Clean,                    direct conversion	No pitfalls
