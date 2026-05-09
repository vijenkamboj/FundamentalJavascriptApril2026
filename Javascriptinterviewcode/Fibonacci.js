function fibonacci(num) {
  let first = 0;
  let second = 1;
  for (let i = 1; i <= num; i++) {
    let third = second + first;
    first = second;
    second = third;
    console.log(first);
  }
}
fibonacci(5);
