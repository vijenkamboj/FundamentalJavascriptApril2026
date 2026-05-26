function Person(name) {
  this.name = name;
}

// Add method to prototype
Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

let vijender = new Person("Vijender");
let kumar = new Person("Kumar");

vijender.sayHello(); // Hello, my name is Vijender
kumar.sayHello(); // Hello, my name is Kumar
// sayHello lives on Person.prototype.

// Both vijender and kumar share the same prototype, so they share the same method without duplication.
//protypes here are used for inheritancs

//  map(), filter(), and reduce() are array methods
// in JavaScript. They’re defined on the Array.prototype
