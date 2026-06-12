//when say playwright cross browser support using single api what does that mean

//It means you write your test once and run it on
// Chrome, Firefox, and Safari — without changing any code

// Without Playwright (old way)
// Each browser had its own library/driver:
// Chrome   →  ChromeDriver  +  Selenium Chrome code
// Firefox  →  GeckoDriver   +  Selenium Firefox code
// Safari   →  SafariDriver  +  different handling
// You often had browser-specific workarounds scattered in your code.

// With Playwright (single API)
// You write this once:
// test('user can login', async ({ page }) => {
//   await page.goto('https://example.com')
//   await page.getByLabel('Email').fill('user@test.com')
//   await page.getByRole('button', { name: 'Login' }).click()
//   await expect(page.getByText('Welcome')).toBeVisible()
// })
// Then in config you just list the browsers:
// js// playwright.config.ts
// projects: [
//   { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
//   { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
//   { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
// ]
// npx playwright test
// That same test now runs on all 3 browsers automatically. No code change needed.

// What "Single API" actually means
// js// These work IDENTICALLY on Chrome, Firefox, Safari:
// page.goto()
// page.click()
// page.fill()
// page.waitForResponse()
// expect(locator).toBeVisible()
// Playwright internally handles all the browser
// differences for you — you never write if browser === firefox type conditions.
