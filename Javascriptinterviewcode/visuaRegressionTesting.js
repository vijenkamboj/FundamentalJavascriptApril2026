//How it works
// Playwright captures screenshots, compares them pixel-by-pixel
// against stored baselines, and fails the test if difference exceeds
// threshold.// tests/visual.spec.ts
import { test, expect } from "@playwright/test";
//Comparing Baseline vs New Screenshot in Playwright
// tests/visual.spec.js
test("homepage comparison", async ({ page }) => {
  await page.goto("/");

  // Playwright auto-compares against stored baseline
  await expect(page).toHaveScreenshot("homepage-baseline.png", {
    threshold: 0.2, // pixel color difference tolerance (0-1)
    maxDiffPixels: 100, // max number of different pixels allowed
  });
});
// //
// First run → creates baseline
// Every run after → compares new screenshot against baseline
//tests/
// ├── visual.spec.js
// └── visual.spec.js-snapshots/
//     ├── homepage-chromium-win32.png      ← per browser + OS
//     ├── homepage-firefox-win32.png
//     ├── homepage-chromium-darwin.png
//     └── button-chromium-win32.png
//How Playwright Handles Baseline
// First ever run — no baseline exists
await expect(page).toHaveScreenshot("homepage.png");
// Run 1 → No baseline found → Creates homepage.png → TEST PASSES
// Run 2 → Baseline exists  → Takes new screenshot → Compares → PASS/FAIL
// Run 3 → Baseline exists  → Takes new screenshot → Compares → PASS/FAIL
//Baseline is created once, never changes automatically.
//Playwright Knows the Path Automatically
// When you write:
await expect(page).toHaveScreenshot("homepage.png");
//Playwright automatically stores baseline at:
//tests/
// └── visual.spec.js-snapshots/
//     └── homepage-chromium-win32.png   ← Playwright decides this path
//Playwright builds the path from:
// Test file name → visual.spec.js
// Screenshot name → homepage.png
// Browser → chromium
// OS → win32

//npx playwright test --update-snapshots
// Playwright internally does:
// Runs the test
// Takes new screenshot
// Finds existing baseline at same auto-generated path
// Overwrites it with new screenshot
//First Run — Generate Baselines
// # Creates baseline screenshots in __screenshots__ folder
// npx playwright test --update-snapshots

//Subsequent runs compare against baseline:

//Configure Thresholds
// playwright.config.ts
export default defineConfig({
  expect: {
    toHaveScreenshot: {
      maxDiffPixels: 100, // allow up to 100 different pixels
      threshold: 0.2, // 0-1, pixel color difference tolerance
      animations: "disabled", // stop animations before screenshot
    },
  },
  //Handle Dynamic Content
  // test('dashboard visual test', async ({ page }) => {
  // await page.goto('/dashboard');

  // Mask dynamic elements (dates, user names, ads)
  // await expect(page).toHaveScreenshot('dashboard.png', {
  mask: [
    page.locator(".timestamp"),
    page.locator(".user-avatar"),
    page.locator(".live-chart"),
  ],
});
//Full Page vs Viewport
// viewport only (default)
await expect(page).toHaveScreenshot("above-fold.png");

// full scrollable page
await expect(page).toHaveScreenshot("full-page.png", {
  fullPage: true,
});
//Cross-Browser Visual Testing
// playwright.config.ts
projects: [
  { name: "chromium", use: { ...devices["Desktop Chrome"] } },
  { name: "firefox", use: { ...devices["Desktop Firefox"] } },
  { name: "mobile", use: { ...devices["iPhone 13"] } },
];
//CI/CD Integration
// # .github/workflows/visual.yml
// - name: Run visual tests
//   run: npx playwright test

// - name: Upload diff report on failure
//   if: failure()
//   uses: actions/upload-artifact@v3
//   with:
//     name: playwright-report
//     path: playwright-report/
// });
// });
// //Quick Reference
// Scenario                            Solution
// Flaky animations                 animations: 'disabled'
// Dynamic dates/text               mask: [locator]
// Too sensitive                   Increase maxDiffPixels
// Cross-browser                   Add projects in config
// CI failures                      pload artifact for diff report

//Comparing Baseline vs New Screenshot in Playwright
// tests/visual.spec.js
import { test, expect } from "@playwright/test";

test("homepage comparison", async ({ page }) => {
  await page.goto("/");

  // Playwright auto-compares against stored baseline
  await expect(page).toHaveScreenshot("homepage-baseline.png", {
    threshold: 0.2, // pixel color difference tolerance (0-1)
    maxDiffPixels: 100, // max number of different pixels allowed
  });
});
