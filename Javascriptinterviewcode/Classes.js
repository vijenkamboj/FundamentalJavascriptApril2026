class Person {
  age = 25;
}
let person = new Person();
console.log(person.age); //25

//constructor function another class
class Car {
  constructor(make, model, year) {
    //scope of constructor is local to make it golabl use this
    this.make = make;
    this.model = model;
    this.year = year; //scope become global
  }

  fullname() {
    //method of a class
    console.log(this.make + " " + this.model);
  }
}
let car1 = new Car("Toyota", "Camry", 2020); //created object
console.log(car1.make); //Toyota
console.log(car1.model); //Camry
console.log(car1.year); //2020
console.log(car1.fullname()); //Toyota Camry
