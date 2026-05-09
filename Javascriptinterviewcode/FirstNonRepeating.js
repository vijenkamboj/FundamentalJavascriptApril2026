function findingFirstNonRepeatingChar(s) {
  // Map maintains insertion order (same as LinkedHashMap in Java)
  let map = new Map();

  // Count frequency of each character (same as Java's for loop)
  for (let i = 0; i < s.length; i++) {
    let c = s[i]; // s.charAt(i) in Java
    if (map.has(c)) {
      map.set(c, map.get(c) + 1); // map.put(c, map.get(c) + 1) in Java
    } else {
      map.set(c, 1); // map.put(c, 1) in Java
    }
  }

  // Iterate map entries (same as Entry<Character, Integer> in Java)
  for (let [key, value] of map) {
    if (value === 1) {
      console.log(key); // System.out.println(x.getKey()) in Java
      break;
    }
  }
}

findingFirstNonRepeatingChar("vijender"); //
