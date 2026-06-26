// How Auto-Wait Works
// Playwright automatically waits for:

// Element readiness

// Attached to the DOM
// Visible (not hidden)
// Stable (not moving/animating)
// Enabled (not disabled)
// Navigation & network events

// If an action triggers navigation (like clicking a link), Playwright waits
// until the page is loaded.
// Assertions
// expect(locator).toBeVisible() waits until the condition is true or times out.

// import { test, expect } from '@playwright/test';

// test('auto-wait example', async ({ page }) => {
//   await page.goto('https://example.com');

//   // Auto-waits until #login is visible and enabled
//   await page.locator('#login').click();

//   // Auto-waits until input is ready
//   await page.locator('#username').fill('Vijender');

//   // Auto-waits until button is clickable
//   await page.locator('#submit').click();

//   // Assertion auto-waits until element becomes visible
//   await expect(page.locator('.success-message')).toBeVisible();
// });
