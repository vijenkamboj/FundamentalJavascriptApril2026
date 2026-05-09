let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// even numbers
let even = arr.filter((a) => a % 2 == 0);
console.log("Even:", even); // [2, 4, 6, 8, 10]

// odd numbers
let odd = arr.filter((a) => a % 2 != 0);
console.log("Odd:", odd); // [1, 3, 5, 7, 9]

//Concate
let combined = even.concat(odd);
console.log(combined);

// numbers array → use a % 2 (value)
// string/characters → use i % 2 (index)
