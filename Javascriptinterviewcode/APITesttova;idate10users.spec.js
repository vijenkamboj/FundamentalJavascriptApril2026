import { test, expect, request } from "@playwright/test";
import userData from "/..Javascriptinterviewcode/userData.json" assert { type: "json" };

test.describe("validating 10 users to login", () => {
  for (const data of userData) {
    test(`log in with valiod email ${data.email}`, async ({ request }) => {
      const apicontext = await request.newContext();
      const response = await apicontext.post("**/api.com", {
        data: { useremail: data.email, userpassword: data.password },
      });
      expect(response.status()).toBe(200);
      const body = await response.json();
      // The server sends JSON as a string in the HTTP body.
// response.json() parses that string into a JavaScript 
// object so you can access properties directly.
      expect(body).toHaveProperty("token");
    });
  }
});

// How It Works
// Loop through users in the JSON file.
// Each iteration sends a POST request to the login API.
// Validate status code and token presence.
// Playwright’s request.newContext() ensures isolation per user.
//Parallel execution → Playwright runs each test
// independently, so all 10 users can be validated quickly.
//passing token to other ui test

// Summary of Options
// storageState.json → easiest, Playwright‑native.
// Environment variables → secure, good for CI/CD pipelines.
// Fixtures → reusable, clean design pattern.
// Save state after login
import { test } from "@playwright/test";

// 1.storageState.json → easiest, Playwright‑nativePlaywright can save the entire
// browser state (cookies + localStorage + token) after login, then reuse it.
test("Login and save storage state", async ({ page }) => {
  await page.goto("https://yourapp.com/login");
  await page.fill("#email", "abc@gmail.com");
  await page.fill("#password", "abc");
  await page.click("#login");

  // Save storage state to file
  await page.context().storageState({ path: "storageState.json" });
});
//then
// playwright.config.js
export default defineConfig {
  use: {
    storageState: "storageState.json",
  },
};
//OR
//storagestate per context
import { test, expect } from '@playwright/test';
test('Dashboard test with storageState', async ({ browser }) => {
  // Create a new context using saved state
  const context = await browser.newContext({ storageState: 'storageState.json' });
  const page = await context.newPage();
  await page.goto('https://yourapp.com/dashboard');
  await expect(page.locator('.dashboard')).toBeVisible();
});


//2. Use Environment Variables
// .env
TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6...

// test
import dotenv from 'dotenv';
dotenv.config();

test('Reuse token from env', async ({ page }) => {
  await page.addInitScript(token => {
    window.localStorage.setItem('token', token);
  }, process.env.TOKEN);

  await page.goto('https://yourapp.com/dashboard');
});
//3. Use Playwright Fixtures
import { test as base } from '@playwright/test';

const test = base.extend({
  token: async ({ request }, use) => {
    const response = await request.post('https://api.com/login', {
      data: { userEmail: 'abc@gmail.com', userPassword: 'abc' }
    });
    const body = await response.json();
    await use(body.token);
  }
});

test('UI test with fixture token', async ({ page, token }) => {
  await page.addInitScript(value => {
    window.localStorage.setItem('token', value);
  }, token);

  await page.goto('https://yourapp.com/dashboard');
});

//Option 4: Per Test File
import { test } from '@playwright/test';

test.use({ storageState: 'storageState.json' });
test('Profile page loads for logged-in user', async ({ page }) => {
  await page.goto('https://yourapp.com/profile');
  await page.locator('#username').isVisible();
});
//various variations of test 
// test.only,test.skip,test.fixme,test.use 

// ✅ Summary

// playwright.config.js → applies globally to all tests.

// test.use({ storageState }) → applies to all tests in a file.

// browser.newContext({ storageState }) → applies only to specific tests.


//option 5 
const fs = require('fs');

// Save token in the same folder as userData.json
fs.writeFileSync(
  './Javascriptinterviewcode/tokens/' + data.email + '.json',
  JSON.stringify({ token: body.token })
);
//This will create files like:Javascriptinterviewcode/tokens/abc@gmail.com.json
//Javascriptinterviewcode/tokens/abc1@gmail.com.json
//the token is saved as a JSON string.
// Javascriptinterviewcode/
// ├── userData.json
// ├── tokens/
//any name 


//read that token from file in the test
import { test, expect } from '@playwright/test';
import fs from 'fs';
test('UI test with saved token', async ({ page }) => {
  // Read token from file
  const token = JSON.parse(
    fs.readFileSync('./Javascriptinterviewcode/tokens/abc@gmail.com.json', 'utf-8')
  );
const token = data.token;
  // Inject token before page load
  await page.addInitScript(value => {
    window.localStorage.setItem('token', value);
  }, token);

  // Navigate to dashboard
  await page.goto('https://yourapp.com/dashboard');
  await expect(page.locator('.dashboard')).toBeVisible();
});




//const body = await response.json();

