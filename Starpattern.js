function starPattern() {
  for (let i = 1; i <= 4; i++) {
    let row = ""; // start with an empty row
    for (let j = 1; j <= i; j++) {
      row += "*"; // add one star each time
    }
    console.log(row); // print the full row at once
  }
}
starPattern();
// JavaScript's console.log() always adds a newline,
// so instead of printing star-by-star like Java's System.out.print("*"),
// the stars are collected into a row string and printed all at once — producing the exact same result.
