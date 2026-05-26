//in line with do we need to write each time
// const browser=await Chromium.launch()
// const context=await browser.newContext()
//const page=await context.newPage()

//No, you don't need to repeat it every time.
// Playwright gives you several ways to avoid that boilerplate:
//1. Use test fixtures (recommended) — built-in page is injected automatically
import { test, expect } from "@playwright/test";
// `page` is provided automatically — no setup needed
test("my test", async ({ page }) => {
  await page.goto("https://example.com");
});
//Playwright's test runner handles the entire browser
//  → context → page lifecycle for you behind the scenes.
//Great question! page is not defined in playwright.config.ts — the config just sets default options.
// The page object is defined and injected by Playwright's built-in fixture system.

//Here's how it works under the hood:
// playwright.config.ts          →  sets OPTIONS (baseURL, storageState, browser settings)
//                                          ↓
// Playwright Test Runner        →  reads config, then automatically creates:
//                                    1. browser  (launches Chromium/Firefox/WebKit)
//                                    2. context  (applies storageState, baseURL, etc.)
//                                    3. page     (new tab inside that context)
//                                          ↓
// test('...', async ({ page }) →  receives the ready-made page as a parameter

// Global setup with playwright.config.ts
// playwright.config.ts
export default {
  use: {
    baseURL: "https://example.com",
    storageState: "auth.json", // reuse login session
  },
};
