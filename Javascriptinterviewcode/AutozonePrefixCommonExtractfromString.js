//Finding the longest common substring across all strings in the array
let input = ["Autozone", "Automotive", "Automatic"];
let first = input[0]; // Step 1: Take the first string → "Autozone"
let longest = ""; // Step 2: Start with an empty longest substring

// Step 3: Loop through every starting position in "Autozone"
for (let i = 0; i < first.length; i++) {
  // Step 4: Loop through every ending position after i
  for (let j = i + 1; j <= first.length; j++) {
    // Step 5: Slice out a substring from i to j
    let sub = first.slice(i, j);
    // Example: when i=0, j=4 → sub = "Auto"
    // Step 6: Check if this substring exists in ALL other strings
    //.every() — returns true only if ALL elements pass the test
    if (input.every((str) => str.includes(sub))) {
      //.includes() — checks if a string contains another string
      // Step 7: If it does, and it's longer than what we found before, update longest
      if (sub.length > longest.length) {
        longest = sub;
      }
    }
  }
}
// Step 8: Print the result
console.log(longest); // "Auto"
/* Every combination produced by the two loops
i (start)	j (end)	slice(i, j)	length
0	        1	      "A"	     1
0	2	"Au"	2
0	3	"Aut"	3
0	4	"Auto"	4
0	5	"Autoz"	5
0	6	"Autozo"	6
0	7	"Autozon"	7
0	8	"Autozone"	8
1	2	"u"	1
1	3	"ut"	2
1	4	"uto"	3
1	5	"utoz"	4
1	6	"utozo"	5
1	7	"utozon"	6*/
//every is indeed an Array prototype method, just like map, filter, and reduce.
// Comparison with other methods
// Method	        Purpose	                      Return type
// map	         Transform each element	           New array
// filter	    Keep only matching elements      	New array
// reduce	    Accumulate into single value	     Any type
// every	      Check if all match condition	     Boolean
// some	      Check if at least one matches	     Boolean
