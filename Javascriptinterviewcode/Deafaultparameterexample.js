// Function with default parameters
function greet(name = "Guest", message = "Welcome!") {
  console.log(`Hello ${name}, ${message}`); //Template literals
}

// Calling without arguments uses defaults
greet();
// Output: Hello Guest, Welcome!

// Passing one argument overrides the first default
greet("Vijender");
// Output: Hello Vijender, Welcome!

// Passing both arguments overrides both defaults
greet("Vijender", "Good morning!");
// Output: Hello Vijender, Good morning!

// Default parameters let you avoid undefined values when arguments are missing.
//  They’re especially useful for optional arguments in functions.

// summary
//No arguments → defaults kick in.

// Arguments provided → they override defaults.

// Template literals → build the final string dynamically.
