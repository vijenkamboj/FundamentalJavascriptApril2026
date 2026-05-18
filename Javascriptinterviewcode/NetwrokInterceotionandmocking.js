// Mock API responses
await page.route("**/api/users", async (route) => {
  await route.fulfill({
    status: 200,
    contentType: "application/json",
    body: JSON.stringify([
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ]),
  });
});
// Always set Content-Type: application/json in headers when sending JSON.
// JSON.stringify() ensures the body is a valid JSON string, not a raw JS object.

// Abort requests (block images, fonts)
await page.route("**/*.{png,jpg,jpeg}", (route) => route.abort());

// Modify requests
await page.route("**/api/**", async (route) => {
  const headers = route.request().headers(); // get original headers
  headers["Authorization"] = "Bearer token123"; // add/override Authorization
  await route.continue({ headers }); // forward request with new headers
});

// Intercept and log network calls
page.on("request", (request) => {
  console.log("Request:", request.url());
});

page.on("response", (response) => {
  console.log("Response:", response.url(), response.status());
});

// Wait for specific API call
await page.waitForResponse("**/api/users");

//Modify and send request body
// Flow Explanation

// Browser Page → A request is triggered (e.g., API call).

// Playwright Intercept Script → Playwright catches the request via page.route().

// You can inspect headers, URL, method, etc.

// Modify them (e.g., add Authorization header).

// Call route.continue() to forward the modified request.

// Web Server → Receives the modified request.

// Response → Server sends back the response.

// Frontend App → Receives the response and continues execution.

// 💡 Tip: If instead of forwarding you want to mock the response, you’d use route.fulfill().

//INTERCEPTION METHODS
// This code sets up two event listeners on a Playwright page object to log network activity:

// page.on("request", ...) fires whenever the browser makes any outgoing request, logging its URL.
// page.on("response", ...) fires when a response comes back, logging the URL and HTTP status code (200, 404, etc.).

// It's essentially a basic network traffic monitor —
// useful for debugging what requests a page is making and whether they're succeeding.
