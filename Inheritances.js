// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a sound.");
  }
}

// Child class inheriting from Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // call parent constructor
    this.breed = breed;
  }
  speak() {
    console.log(this.name + " barks. Breed: " + this.breed);
  }
}

// Usage
let dog1 = new Dog("Tommy", "German Shepherd");
dog1.speak(); // Output: Tommy barks. Breed: German Shepherd
