//extract values from arrays or objects or functions into variables in a single line
// is destructuring
// Destructuring allows unpacking values from arrays or properties from objects into distinct
// variables. It's commonly used in Playwright to extract test context fixtures, configuration

//array destructuring
let arr = [1, 2, 3];
let [a, b, c] = arr;
console.log(a, b, c);

//object destructuring
let obj = { name: "vijender", age: 25 };
let { name, age } = obj;
console.log(name, age);

//selecting specific values from object destructuring

let obj1 = { name1: "john", age: 30, city: "new york" };
let { name1, city } = obj1;
console.log(name1, city);

//nested object destructing
let obj2 = {
  name: "jane",
  address: {
    cityn: "los angeles",
    country: "usa",
  },
};
let {
  name: name2,
  address: { cityn, country },
} = obj2;
console.log(name2, cityn);

//destructuring with function parameters
//Array Destructuring
function printCoordinates([x, y]) {
  console.log(`X: ${x}, Y: ${y}`); // it’s called a backtick (`). It allows you to embed
  //  expressions inside a string using ${expression} syntax.template literal
}
printCoordinates([10, 20]); // X: 10, Y: 20

//Object Destructuring in Parameters
function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

greet({ name: "Vijender", age: 30 });
// Hello Vijender, you are 30 years old.

function english(s) {
  let consonents = s.match(/[bcdfghjklmnpqrstvxyz]/gi);
  let vowels = s.match(/[aeiou]/gi);
  return `vowels:${vowels.length},consonents:${consonents.length}`;
}
console.log(english("vijender"));
//i=case insentive and g is global

// Object destructuring
import { chromium, firefox, webkit } from "@playwright/test"; //is an ES module import statement
