// “A closure is a function that retains access to variables
//  from its outer scope even after the outer function has
//   executed. It’s commonly used for data privacy,
//    maintaining state, and handling asynchronous operations.”
//another example
function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}
const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3

//another
function greet(name) {
  setTimeout(() => {
    console.log("Hello " + name);
  }, 1000);
}
greet("Vijender");

//
// ┌─────────────────────────────────┐
// │  outer scope                    │
// │  count = 0  ← stays alive!      │
// │                                 │
// │  ┌──────────────────────────┐   │
// │  │  inner functions         │   │
// │  │  increment → count++     │   │
// │  │  value     → return count│   │
// │  └──────────────────────────┘   │
// └─────────────────────────────────┘
//          ↑
//          closed over — garbage collector won't touch it
//          as long as the inner functions exist
