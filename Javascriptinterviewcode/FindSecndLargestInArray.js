function secondlargest(arr) {
  let unique = [...new Set(arr)]; // Remove duplicates
  let ascendingsort = unique.sort((a, b) => a - b); //sort in Asending  order(a,b) =>b-a sort in desceding order
  console.log(ascendingsort);
  console.log(ascendingsort[3]);
}
secondlargest([6, 10, 60, 5, 34]);
