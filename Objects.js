//pbjects are collection of properties and properties defined as key value pair person is a object

let person = {
  name: "John",
  age: 30,
  city: "New York",
};
//accessing object properties
console.log(person.name); // John
console.log(person["age"]); // 30
//adding new property to object
person.job = "Engineer";
console.log(person.job); // Engineer
//deleting a property from object
delete person.city;
console.log(person.city); // undefined
//iterating over object properties
for (let key in person) {
  console.log(key + ": " + person[key]);
} // Output:
// name: John
// age: 30
// job: Engineer
//object methods

let person1 = {
  name: "John",
  age: 30,
  city: "New York",

  fullname: function () {
    console.log(this.name + " " + this.city);
  },
};
console.log(person1.fullname()); // John New York

//Object.entries({ a: 1, b: 2 }); // [['a',1],['b',2]]
