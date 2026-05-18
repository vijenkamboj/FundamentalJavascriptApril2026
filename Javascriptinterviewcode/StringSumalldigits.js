function sumalldigits(str) {
  let s1 = str.replace(/[^0-9]/g, "");
  console.log(s1);
  //let num = parseInt(s1, 10);
  let sum = s1
    .split("")
    .map((a) => parseInt(a))
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
