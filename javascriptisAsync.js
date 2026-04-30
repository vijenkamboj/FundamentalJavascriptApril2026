console.log("I am 1 prgn");
console.log("I am 2 prgn");
console.log("I am 3 prgn");
console.log("I am 4 prgn");
setTimeout(function () {
  //takes two arguments
  console.log("I am 5  prgn");
}, 2000); //it will not wait for 2s but exceute 6th and then 5 thats why javascript is asynchronous
console.log("I am 6 prgn");
