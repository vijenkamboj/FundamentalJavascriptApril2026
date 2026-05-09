function greet(name, callback) {
  console.log("hello" + name);
  callback();
}

//callback function
function welcome() {
  console.log("welcome");
}

greet("Vijender", welcome);
