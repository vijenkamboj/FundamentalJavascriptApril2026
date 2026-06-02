const arr = [1, [2, [3, [4]]]];

let arr1 = arr.flat(Infinity);
console.log(arr1);
//output [1, 2, 3, 4]

//APIs or databases often return nested arrays.
const categories = [["Electronics"], ["Mobiles", ["Smartphones"]]];
console.log(categories.flat(Infinity));
// ["Electronics", "Mobiles", "Smartphones"]

// 👉 Quick tip for interviews:
// flat(1) → flattens one level → [1, 2, [3, [4]]]
// flat(2) → flattens two levels → [1, 2, 3, [4]]
// flat(Infinity) → flattens all levels → [1, 2, 3, 4]
