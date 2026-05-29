function sumofdigits(num) {
  let result = num
    .toString()
    .split("")
    .reduce((a, b) => a + Number(b), 0); // Each b is a string, so you must
  //  convert it with Number(b) before adding
  console.log(result);
}
sumofdigits(1234);

// 1234
// → "1234"          // .toString()
// → ["1","2","3","4"] // .split("")
// → 1 + 2 + 3 + 4  // .reduce(), converting each to Number
// → 10              // console.log output
//Because .split("") is a string method — it doesn't exist on numbers.

// Here, .split("") gives you individual digit characters ("1", "2", "3", "4").
// Each b is a string, so you must convert it with Number(b) before adding.
// Otherwise, "1" + "2" would concatenate into "12" instead of numeric addition.
