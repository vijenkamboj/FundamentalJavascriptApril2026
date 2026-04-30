function reverseString() {
  let s = "vijender";
  let rev = ""; // initialize empty string

  for (let i = s.length - 1; i >= 0; i--) {
    rev = rev + s.charAt(i);
  }

  return rev;
}

console.log(reverseString()); // Output: rednejiv
