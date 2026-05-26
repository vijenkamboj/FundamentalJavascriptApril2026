function greet(name, callback) {
  console.log("hello" + name);
  callback();
}

//callback function
function welcome() {
  console.log("welcome");
}

greet("Vijender", welcome);
//hello Vijender
// welcome
//A callback function is a function passed as an
//  argument to another function, to be called later when needed.
//The key thing to notice — welcome is passed without () because you're passing the function
// itself as a reference. Writing welcome() would call it immediately before passing it.
