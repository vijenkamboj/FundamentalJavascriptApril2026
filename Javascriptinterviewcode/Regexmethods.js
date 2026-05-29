// RegExp has 3 built-in methods
// Method           Returns                    Use when
// .test(str)       true/false                You just want to know if it matches
// .exec(str)       match details or null     You want info about what matched
// str.match(regex)  array or null            You want all matches from a string

let regex = /[0-9]+/; //+ → quantifier meaning “match one or more of the preceding element”.
let str = "hello123world";

regex.exec(str);
// → ["123", index: 5, input: "hello123world"] It returns
// an array with extra info — not just what matched, but where it matched.

let result = /[0-9]+/.exec("hello123world");
result[0]; // "123"          ← the matched text
result.index; // 5              ← position where match started
result.input; // "hello123world" ← the original string

//Extracting date
let str = "Order placed on 2024-05-29 successfully";
let result = /(\d{4})-(\d{2})-(\d{2})/.exec(str);

result[0]; // "2024-05-29"  ← full match
result[1]; // "2024"        ← first group  (year)
result[2]; // "05"          ← second group (month)
result[3]; // "29"          ← third group  (day)
result.index; // 16           ← position in string
//It returns an array with extra info — not just what matched, but where it matched
//You want info about what matched
//The () brackets are capture groups
// they let you extract specific parts of the match.

// extract the date string
let str = "Order placed on 2024-05-29 successfully";
let result = /(\d{4})-(\d{2})-(\d{2})/.exec(str);
console.log(result[0]); // "2024-05-29"

let str = "Order placed on 2024-05-29 successfully";
let result = /(\d{4})-(\d{2})-(\d{2})/.exec(str);

if (result) {
  let year = result[1]; // "2024"
  let month = result[2]; // "05"
  let day = result[3]; // "29"
  console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);
  // → Year: 2024, Month: 05, Day: 29
}

//Multiple dates in one string
let str = "Start: 2024-01-01, End: 2024-05-29";
let matches = str.match(/(\d{4})-(\d{2})-(\d{2})/g);
console.log(matches); // ["2024-01-01", "2024-05-29"]

//.exec() vs .test() vs .match()

let str = "hello123";

// /[0-9]+/.test(str)     // true         // ← just yes/no
// /[0-9]+/.exec(str)     // ["123", index: 5, ...] // ← match details
// str.match(/[0-9]+/)    // ["123", index: 5, ...]  //← same as exec

//.exec() and .match() give similar results
//the difference shows up with the g flag:
// str.match(/[0-9]/g)     // ["1","2","3"]  ← ALL matches at once g->global
// /[0-9]/.exec(str)       // ["1"]          ← only FIRST match
//   call exec again to get next match
