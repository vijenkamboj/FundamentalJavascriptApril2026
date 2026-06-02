const listOfIngredients = [];
describe("this is a test structure", () => {
  it("this is a test body", () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => listOfIngredients.push(data))
      .then(console.log(listOfIngredients))
      .catch((err) => console.log(err));
  });
});
//---------------------converting to asyncawait-------------------
const listOfIngredients = [];

describe("this is a test structure", () => {
  test("this is a test body", async () => {
    try {
      // Make the API call
      const response = await apiContext.get(url);
      // Parse JSON
      const data = await response.json();
      // Push into array
      listOfIngredients.push(data);
      // Check if array has items
      if (listOfIngredients.length > 0) {
        console.log(listOfIngredients);
      } else {
        console.log("No ingredients found");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  });
});
