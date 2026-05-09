function evenodd(s) {
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (i % 2 == 0) {
      console.log("Index is even: " + c);
    } else {
      console.log("Index is even: " + c);
    }
  }
}
evenodd("hello");
// 0 % 2 = 0  → even ✅
// 1 % 2 = 1  → odd
// 2 % 2 = 0  → even ✅
// 3 % 2 = 1  → odd
// 4 % 2 = 0  → even ✅

let s1 = (s) => {
  let arr = s.split(""); // ["v","i","j","e","n","d","e","r"]

  let even = arr.filter((a, i) => i % 2 === 0);
  let odd = arr.filter((a, i) => i % 2 !== 0);

  console.log("Even:", even); // ["v","j","n","e"]
  console.log("Odd:", odd); // ["i","e","d","r"]
};
s1("vijender");

// numbers array → use a % 2 (value)
// string/characters → use i % 2 (index)
