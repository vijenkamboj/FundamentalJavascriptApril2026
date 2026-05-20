/*How to Handle Permissions
You grant permissions at the context level using permissions: [...].
Common permissions include:
geolocation
notifications
camera
microphone
clipboard-read*/

const { test, chromium } = require("@playwright/test");

test("Handle permissions in Playwright", async () => {
  const browser = await chromium.launch({ headless: false });

  // Grant geolocation + notifications permissions
  const context = await browser.newContext({
    permissions: ["geolocation", "notifications"],
    geolocation: { latitude: 28.6139, longitude: 77.209 }, // New Delhi
  });

  const page = await context.newPage();
  await page.goto("https://www.google.com/maps");

  await page.waitForTimeout(5000);
  await page.screenshot({ path: "permissions.png" });

  await browser.close();
});

// Grant permissions dynamically
await context.grantPermissions(["camera", "microphone"], {
  origin: "https://example.com",
});

// Clear permissions
await context.clearPermissions();

/* Notes (your practice style)
Always set permissions at context creation if you know the test needs them.
Use grantPermissions for specific origins when testing multiple sites.
Use clearPermissions to reset between tests for isolation. */
