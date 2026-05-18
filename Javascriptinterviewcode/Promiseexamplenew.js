// Creating a Promise
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("data loaded");
  }, 1000);
});

// Consuming
fetchData
  .then((data) => console.log(data))
  .catch((err) => console.error(err))
  .finally(() => console.log("done"));

//sequential run
async function runSequential(tasks) {
  const results = [];
  for (const task of tasks) {
    results.push(await task());
  }
  return results;
}

//Execute promises in parallel
async function runParallel(tasks) {
  return Promise.all(tasks.map((task) => task()));
}
