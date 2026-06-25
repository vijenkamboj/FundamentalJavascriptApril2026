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
//          as long as the inner functions exist\

//another example
function greet(name) {
  setTimeout(() => {
    console.log("Hello " + name);
  }, 1000);
}
greet("Vijender");

// greet("Vijender") runs → schedules the callback.

// greet finishes immediately.

// After 1 second → the callback executes → logs "Hello Vijender".
//Because of lexical scope, the arrow function still has access to the name parameter ("Vijender")
// even though greet has already finished executing.

// //Why Playwright Relies on Closures
// Keeps test context alive (fixtures, page objects, data).
// Encapsulates setup/teardown logic without polluting global scope.
// Allows async callbacks for events, retries, and waits.

//Test Definitions (test blocks)
test("login test", async ({ page }) => {
  await page.goto("https://example.com");
  await page.fill("#username", "Vijender");
  await page.fill("#password", "secret");
  await page.click("#login");
});
//The arrow function (async ({ page }) => { ... }) is a closure.
// It captures the page fixture provided
//  by Playwright and keeps it alive inside the test body.

//Fixtures
const test = base.extend({
  userData: async ({}, use) => {
    const data = { name: "Vijender", role: "QA" };
    await use(data); // closure keeps `data` alive until test finishes
  },
});
