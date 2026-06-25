function longestWord(sentence) {
  let words = sentence.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.log(longestWord("Playwright automates browser testing")); // Playwright

//second method
function longestWord(sentence) {
  let words = sentence.split(" ");
  let maxLen = Math.max(...words.map((w) => w.length));
  return words.find((w) => w.length === maxLen);
}
console.log(longestWord("Playwright automates browser testing")); // Playwright
