////HHere’s how you set up .env with dotenv and use process.
// env.BASE_URL in Playwright and plain JavaScript:how you set
//  up .env with dotenv and use process.env.BASE_URL in Playwright and plain JavaScript:

//Put this in the root of your project:
BASE_URL=https://staging.example.com
USERNAME=testuser
PASSWORD=secret123

//Step 2: Install dotenv
//npm install dotenv

//Step 3: Load .env in Playwright Config
import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  use: {
    baseURL: process.env.BASE_URL || 'https://default.example.com',
    extraHTTPHeaders: {
      'x-test-user': process.env.USERNAME || 'guest',
    },
  },
});
//Step 4: Use Variables Inside Tests
import { test, expect } from '@playwright/test';

test('login with env credentials', async ({ page }) => {
  await page.goto(process.env.BASE_URL);

  await page.fill('#username', process.env.USERNAME);
  await page.fill('#password', process.env.PASSWORD);
  await page.click('#loginBtn');

  await expect(page.locator('.welcome')).toContainText(process.env.USERNAME);
});
//At this point, process.env is just a plain object that Node.js maintains. 
// dotenv.config() reads the .env file and populates that object.
