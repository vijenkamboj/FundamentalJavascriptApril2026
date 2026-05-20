/* Key Methods
context.addCookies([...]) → Add cookies manually.
context.cookies() → Retrieve cookies for the current context.
context.clearCookies() → Remove all cookies.*/

// cookies.spec.js
const { test, chromium } = require("@playwright/test");

test.describe("Cookie Handling in Playwright", () => {
  test("Add and read cookies", async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://example.com");

    // Add a cookie
    await context.addCookies([
      {
        name: "session_id",
        value: "123456",
        domain: "example.com",
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "Lax",
      },
    ]);

    // Get cookies
    const cookies = await context.cookies();
    console.log("Cookies:", cookies);

    await browser.close();
  });

  test("Clear cookies", async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://example.com");

    // Clear all cookies
    await context.clearCookies();

    const cookies = await context.cookies();
    console.log("After clearing:", cookies);

    await browser.close();
  });
});
