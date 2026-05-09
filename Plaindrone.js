//if reverse of strin is same as the original string

function plaindrone(s) {
  let rev = "";
  for (let i = s.length - 1; i >= 0; i--) {
    rev = rev + s.charAt(i);
  }
  if (s == rev) {
    console.log("String is plaindrone");
  } else {
    console.log("String is not plaindrone");
  }
}
plaindrone("madam");
