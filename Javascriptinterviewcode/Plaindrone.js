function plaindrone(name) {
  let s = name;
  let rev = s.split("").reverse().join("");
  console.log(s === rev ? "String is plaindrone" : "String is not plaindrone");
}
plaindrone("madam");
plaindrone("vijender");
