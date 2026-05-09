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
