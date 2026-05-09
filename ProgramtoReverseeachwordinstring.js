function reverseEachWord(s) {
  let result = s
    .split(" ") // split into words
    .map((a) => a.split("").reverse().join("")) // reverse each word
    .join(" "); // join back with space
  console.log(result);
}
reverseEachWord("Hello World How Are You");
// "olleH dlroW woH erA uoY"
