let numbers = [1, 2, 3, 4, 5, 6];
let newnum = numbers.slice(1, 4);
console.log(newnum);

let person = {
  firtname: "vijender",
  lastname: "kumar",
  fullname: function () {
    console.log(this.firtname + ":" + this.lastname);
  },
};
console.log(person.fullname());
