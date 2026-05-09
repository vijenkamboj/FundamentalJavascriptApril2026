function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  console.log("Factorial of " + num + " is: " + fact);
}
factorial(5);
