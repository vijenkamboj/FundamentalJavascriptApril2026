//session management
// Method 1: Save authentication state
const { chromium } = require("playwright");
const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

// Perform login
await page.goto("https://example.com/login");
await page.fill("#username", "admin");
await page.fill("#password", "password");
await page.click("#login");

// Save authenticated state
await context.storageState({ path: "auth.json" });
await browser.close();
// Method 2: Reuse authentication state
const browser = await chromium.launch();
const context = await browser.newContext({
  storageState: "auth.json",
});
const page = await context.newPage();
await page.goto("https://example.com/dashboard"); // Already logged in

// Method 3: API-based authentication

import { test, request, expect } from "@playwright/test";

let token; // declare globally so it can be reused

test.beforeAll(async () => {
  // Create API context
  const apiContext = await request.newContext();

  // Login request to get token
  const response = await apiContext.post("https://example.com/api/login", {
    data: {
      username: "testuser",
      password: "Password123",
    },
  });

  const responseBody = await response.json();

  //   Parsing requires reading the stream and converting it to text, which is what .json()
  //  does internally.
  // .json() first reads the entire body from the stream.
  // Then it parses the text into a JavaScript object using JSON.parse() internally.
  token = responseBody.token; // ✅ extract token

  console.log("Extracted token:", token);

  await apiContext.dispose();
});

test("use token in another test", async ({ request }) => {
  // Use the token in Authorization header
  const response = await request.get("https://example.com/api/orders", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  expect(response.status()).toBe(200);
  const orders = await response.json();
  console.log("Orders:", orders);
});

// // Method 4: Setup in beforeEach
// test.beforeEach(async ({ page }) => {
//   await page.goto('/login');
//   await page.fill('#username', 'admin');
//   await page.fill('#password', 'password');
//   await page.click('#login');
//   await page.waitForURL('**/dashboard');
//
