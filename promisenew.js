const randomnumberpromise = new Promise((resolve, reject) => {
  // simulate async work (e.g. API call)
  setTimeout(() => {
    const randomvalue = Math.random();
    if (randomvalue > 0.5) {
      resolve(randomvalue);
    } else {
      reject(new Error("value is too small"));
    }
  }, 1000); //delay of 2 s
});

randomnumberpromise
  .then((result) => {
    console.log("promise is fullfilled with the value:", result);
  })
  .catch((error) => {
    console.log("promise is rejected due to an error :", error);
  })
  .finally(() => console.log("Done (always runs)")); //always runs at the end, fulfilled or rejected. Perfect for cleanup like hiding a loading spinner.
