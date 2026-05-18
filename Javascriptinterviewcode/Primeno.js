function primeno(n) {
  if (n <= 1) {
    console.log("no is not prime");
    return;
  }
  let temp = 0;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      temp = temp + 1;
    }
  }
  if (temp > 0) {
    console.log("no is not prime");
  } else {
    console.log("no is prime");
  }
}
//If temp > 0, it means you found at least one divisor → the number is not prime.
primeno(6); // no is not prime
primeno(7); // no is prime
//A prime number is a number greater than 1 that is divisible only by 1 and itself.
