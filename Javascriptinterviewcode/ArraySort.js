function arraysort(arr) {
  //Function declaration
  let sortarr = arr.sort((a, b) => a - b); //ascending order
  console.log(sortarr);
}
arraysort([1, 5, 3, 6, 0, 3, 7]);

let sortarr1 = (arr) => {
  //Function expression
  let sortarr = arr.sort((a, b) => a - b);
  console.log(sortarr);
};
sortarr1([1, 5, 3, 6, 0, 3, 7]);

// Normal A→Z (ascending)
sort((a, b) => a.localeCompare(b)); // a compared to b
// ['apple', 'banana', 'cherry']

// Reversed Z→A (descending)
sort((a, b) => b.localeCompare(a)); // b compared to a  ← your code
// ['cherry', 'banana', 'apple']
