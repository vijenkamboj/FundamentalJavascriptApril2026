let str = "He$ll@%oWorld!";

// Step 1: split into array
let arr = str.split("");

// Step 2: extract only letters
let letters = arr.filter((c) => /[a-zA-Z]/.test(c));
// → ["H","e","l","l","o","W","o","r","l","d"]

// Step 3: reverse the letters
letters.reverse();
// → ["d","l","r","o","W","o","l","l","e","H"]

// Step 4: put letters back, skip special positions
let letterIndex = 0;
for (let i = 0; i < arr.length; i++) {
  if (/[a-zA-Z]/.test(arr[i])) {
    //The if condition is the guard:
    // When arr[i] is $, @, %, ! → test() returns false →
    //  the if block never runs → arr[i] is never touched →
    //  it stays exactly where it is.
    arr[i] = letters[letterIndex++]; // only runs for letters
  }
}
// Step 5: join back to string
console.log(arr.join("")); // "dl$ro@%WolleH!"
// i=2  arr[2]="$"  → false → skip → "$" stays at position 2 forever
// i=5  arr[5]="@"  → false → skip → "@" stays at position 5 forever
// i=6  arr[6]="%"  → false → skip → "%" stays at position 6 forever
// i=13 arr[13]="!" → false → skip → "!" stays at position 13 forever
