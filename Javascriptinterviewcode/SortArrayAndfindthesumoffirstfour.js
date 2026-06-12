let arr1 = [6, 9, 0, 3, 1, 7];
let sumoffirstfour = arr1
  .sort((a, b) => a - b)
  .slice(0, 4)
  .reduce((c, d) => c + d, 0);
console.log(sumoffirstfour);
