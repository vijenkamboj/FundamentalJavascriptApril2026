//The event loop in JavaScript is the mechanism that allows asynchronous
// code (like setTimeout or Promise) to run without blocking the main thread.
//  It ensures synchronous code runs first,
// then microtasks (Promises), and finally macrotasks (timers, I/O).

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
//final output order
Start;
End;
Promise;
Timeout;

/* Step‑by‑Step Execution
console.log("Start")  
→ Prints immediately: Start.

setTimeout(..., 0)  
→ Schedules the callback (console.log("Timeout")) to run later, after the current call stack is clear.
→ Goes into the macro‑task queue.

Promise.resolve().then(...)  
→ Schedules the callback (console.log("Promise")) to run as soon as possible after synchronous code, in the micro‑task queue.

console.log("End")  
→ Prints immediately: End.

Event loop runs micro‑tasks first  
→ Executes Promise callback: Promise.

Event loop runs macro‑tasks next  
→ Executes Timeout callback: Timeout. */
