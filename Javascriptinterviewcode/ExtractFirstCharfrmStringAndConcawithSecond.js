function stringkamal(s) {
  let trimmed = s.trim();
  let c = trimmed[0];
  let s2 = trimmed.slice(6, 12);
  console.log(c);
  console.log(s2);
  let con = c.concat(s2);
  console.log(con);
}
stringkamal(" Rahul Sharma");

// s[0]gets first character.
// trim()removes spaces from start and end
// .slice(6, 12)extracts characters from index 6 to 11
// Unlike some other languages like Java or C, where:

// String and char are different types
// you need to convert char → String explicitly using String.valueOf(c)

// In JavaScript there is no char type at all:
//JavaScript no char type❌    already a string->s[0]

// let s = "Rahul Sharma";

// typeof s[0]      // "string" ✅ already a string
// typeof s         // "string" ✅ same type

// no conversion needed!
