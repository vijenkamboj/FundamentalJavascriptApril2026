import { test as base, expect } from "@playwright/test";

// Extend the base test with a custom fixture
const test = base.extend({
  // Define a fixture called "loggedInPage"
  loggedInPage: async ({ page }, use) => {
    // Perform login steps once
    await page.goto("https://example.com/login");
    await page.fill("#username", "testuser");
    await page.fill("#password", "Password123");
    await page.click("#loginBtn");

    // Pass the logged-in page to the test
    await use(page);
  },
});

test("dashboard test with custom fixture", async ({ loggedInPage }) => {
  await loggedInPage.goto("https://example.com/dashboard");
  await expect(loggedInPage.locator("h1")).toHaveText("Welcome");
});
