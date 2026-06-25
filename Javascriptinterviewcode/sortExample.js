[3, 1, 2].sort((a, b) => a - b); // [1, 2, 3]

//So numbers are sorted in ascending numeric order.

["v", "i", "j", "e"].sort((a, b) => a.localeCompare(b));
// ["e","i","j","v"]

function secondUniqChrString(str) {
  const unique = [...new Set(str)].sort((a, b) => a.localeCompare(b)); //alphabetically ["d", "e", "i", "j", "n", "r", "v"]

  console.log(unique[1]);
}
secondUniqChrString("vijenderi"); // → 'j'
//So strings are sorted in alphabetical order a to z
