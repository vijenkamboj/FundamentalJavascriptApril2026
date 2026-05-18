// //Playwright provides automatic waiting for most actions, which eliminates the need for
// many manual waits.
// However, explicit waiting strategies are available when necessary, such as:
// • waitForSelector() – wait for an element state
// • waitForURL() – wait for navigation
// • waitForLoadState() – wait for page load events
// • waitForResponse() – wait for network responses
// • waitForFunction() – wait for custom JavaScript conditions
// While networkidle can be used to wait until no network requests are active, it should be
// used carefully. In most cases, it is better to wait for specific UI conditions or API
// responses rather than relying on network inactivity.
await page.waitForSelector("#spinner", { state: "hidden" });
await page.waitForSelector(".results", { state: "visible", timeout: 10000 });

// Wait for navigation
await page.waitForURL("**/dashboard");

// Wait for load state
await page.waitForLoadState("networkidle"); // no requests for 500ms

// Wait for API response
const [response] = await Promise.all([
  page.waitForResponse((r) => r.url().includes("/api/data")),
  page.click("#load-data-btn"),
]);
const data = await response.json();

// Wait for custom condition
await page.waitForFunction(() => document.querySelectorAll(".item").length > 5);
