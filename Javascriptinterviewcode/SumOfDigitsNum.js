function sumofdigits(num) {
  let result = num
    .toString()
    .split("")
    .reduce((a, b) => a + Number(b), 0);
  console.log(result);
}
sumofdigits(1234);

// 1234
// → "1234"          // .toString()
// → ["1","2","3","4"] // .split("")
// → 1 + 2 + 3 + 4  // .reduce(), converting each to Number
// → 10              // console.log output
//Because .split("") is a string method — it doesn't exist on numbers.
