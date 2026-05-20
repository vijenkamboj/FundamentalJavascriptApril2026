//in Playwright, geolocation lets you simulate a user’s
// physical location in your browser tests. This is especially
// useful when testing apps that rely on location-based features
//  (maps, delivery zones, localized content, etc.).

// geolocation.spec.js
const { test, expect, chromium } = require("@playwright/test");

test.describe("Geolocation Testing", () => {
  test("Set geolocation to New Delhi", async () => {
    // Launch browser
    const browser = await chromium.launch({ headless: false });

    // Create context with geolocation permissions
    const context = await browser.newContext({
      permissions: ["geolocation"],
      geolocation: { latitude: 28.6139, longitude: 77.209 }, // New Delhi
    });

    // New page
    const page = await context.newPage();

    // Navigate to a site that uses geolocation
    await page.goto("https://www.google.com/maps");

    // Wait for map to load
    await page.waitForTimeout(5000);

    // Screenshot for verification
    await page.screenshot({ path: "delhi-location.png" });

    // Close browser
    await browser.close();
  });

  test("Change geolocation dynamically to New York", async () => {
    const browser = await chromium.launch({ headless: false });

    const context = await browser.newContext({
      permissions: ["geolocation"],
      geolocation: { latitude: 40.7128, longitude: -74.006 }, // Initial NYC
    });

    const page = await context.newPage();
    await page.goto("https://www.google.com/maps");

    // Update geolocation after context creation
    await context.setGeolocation({ latitude: 34.0522, longitude: -118.2437 }); // Los Angeles

    await page.waitForTimeout(5000);
    await page.screenshot({ path: "la-location.png" });

    await browser.close();
  });
});
// 📝 Breakdown (in your practice style)
// test.describe groups related geolocation tests.

// permissions: ['geolocation'] → mandatory for location access.

// geolocation: { latitude, longitude } → initial location.

// context.setGeolocation(...) → lets you switch location mid‑test.

// Screenshots → quick way to confirm the simulated location.
