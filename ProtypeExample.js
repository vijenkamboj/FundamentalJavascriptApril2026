// Define a constructor function
function Person(name) {
  this.name = name;
}

// Add a method to the prototype
Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

// Create objects
let vijender = new Person("Vijender");
let kumar = new Person("Kumar");

// Both objects share the same prototype method
vijender.sayHello(); // Hello, my name is Vijender
kumar.sayHello();    // Hello, my name is Kumar
