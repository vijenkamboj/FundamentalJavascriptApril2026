//Can a JavaScript object hold a function as a property?

let person = {
  name: "vijender",
  branch: "CS",
  lastname: "kumar",
  fullname: function () {
    console.log(this.name + ";" + this.lastname);
  },
};
person.fullname();

//anaymous function

let arr = [1, 2, 3, 4, 5, 6];
let aar1 = arr.map((mul) => mul * 2);
console.log(aar1);

let arr2 = aar1.reduce((a, b) => a + b, 0);
console.log(arr2);

let arr3 = arr.filter((k) => k % 2 == 0);
console.log(arr3);

let scores = [12, 13, 14, 15, 16, 17, 18, 19, 20];
let evenno = scores.filter((score) => score % 2 == 0);
console.log(evenno);

//like summing squares of even numbers

let values = [2, 3, 7, 5, 4, 9];
let oneexpp = values
  .filter((even) => even % 2 == 0)
  .map((sqa) => sqa * 2)
  .reduce((a, b) => a + b, 0);

//anonumous

let greet = function (name) {
  return "hello I am " + name;
};
console.log(greet);

let arrnew = [1, 2, 3, 4, 5, 6, 7, 8];
arrnew.push(9);
console.log(arrnew);

let arrnew1 = [1, 2, 3, 4, 5, 6, 7, 8];
arrnew1.pop();
console.log(arrnew1);

let arrnew2 = [1, 2, 3, 4, 5, 6, 7, 8];
arrnew2.shift();
console.log(arrnew2);

let arrnew3 = [1, 2, 3, 4, 5, 6, 7, 8];
arrnew3.unshift(1);
console.log(arrnew3);

let arrnew4 = [1, 2, 3, 4, 5, 6];
let slices = arrnew4.slice(1, 3);
console.log(slices);
console.log(arrnew4);
//original array remains the same 
