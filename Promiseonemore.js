function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 2000);
  });
}
//--------------------------------------------------
fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

let checkEven = new Promise((resolve, reject) => {
  let number = 4;
  if (number % 2 === 0) {
    resolve("The number is even!");
  } else {
    reject("The number is odd!");
  }
});

checkEven
  .then((message) => console.log(message)) // Success handler
  .catch((error) => console.error(error)); // Error handler
