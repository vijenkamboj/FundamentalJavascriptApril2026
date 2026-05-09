function english(s) {
  let consonents = s.match(/[bcdfghjklmnpqrstvxyz]/gi);
  let vowels = s.match(/[aeiou]/gi);
  return `vowels:${vowels.length},consonents:${consonents.length}`;
}
console.log(english("vijender"));
//i=case insentive and g is global
