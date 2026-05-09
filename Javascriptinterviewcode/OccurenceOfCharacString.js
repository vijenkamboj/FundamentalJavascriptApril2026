function characterOccurrenceInString(s) {
  // HashMap → Map in JavaScript
  let map = new Map();

  // Count frequency of each character
  for (let i = 0; i < s.length; i++) {
    let c = s[i]; // s.charAt(i) in Java

    if (map.has(c)) {
      // map.containsKey(c) in Java
      map.set(c, map.get(c) + 1); // map.put(c, map.get(c) + 1) in Java
    } else {
      map.set(c, 1); // map.put(c, 1) in Java
    }
  }

  // Iterate map keys (same as map.keySet() in Java)
  for (let x of map.keys()) {
    console.log("Occurrence of character: " + x + " = " + map.get(x));
  }
}

characterOccurrenceInString("Java is an object oriented language");
