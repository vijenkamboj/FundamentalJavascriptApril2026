function fibonaci(n) {
  let first = 0;
  let second = 1;
  let third;
  for (let i = 0; i <= n; i++) {
    third = first + second;
    first = second;
    second = third;
  }
  console.log("The fibonacci of n is" + ":" + third);
}
fibonaci(10);
