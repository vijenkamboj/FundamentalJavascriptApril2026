async function retry(operation, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await operation(); // ✅ success → return result
    } catch (error) {
      console.log(`Attempt ${i + 1} failed`);
      if (i === retries - 1) throw error; // ❌ last attempt → throw
    }
  }
}

//Example Usage
async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  if (!response.ok) throw new Error("Request failed");
  return response.json();
}

retry(fetchData, 3)
  .then((data) => console.log("Data:", data))
  .catch((err) => console.error("Final failure:", err.message));
