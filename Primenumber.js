// no-n divisble only by itself and 1 is prime so we need to check if
//its divisble buy1 to n-1-so we need to check its divisibilty from 2 to n-1 a

function primnumber(n) {
  let temp = 0;
  for (let i = 2; i <= n - 1; i++) {
    if (n % i == 0) {
      temp = temp + 1;
    }
  }
  if (temp > 0) {
    console.log("no is not prime");
  } else {
    console.log("no is  prime");
  }
}
primnumber(9);
