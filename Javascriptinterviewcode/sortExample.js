[3, 1, 2].sort((a, b) => a - b); // [1, 2, 3]

["v", "i", "j", "e"].sort((a, b) => a.localeCompare(b));
// ["e","i","j","v"]

function secondUniqChrString(str) {
  const unique = [...new Set(str)].sort((a, b) => a.localeCompare(b));
  console.log(unique[1]);
}
secondUniqChrString("vijenderi"); // → 'j'
