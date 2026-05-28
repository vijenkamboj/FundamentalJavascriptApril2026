// Wait for element state
await page.locator("#element").waitFor({ state: "visible" });
await page.locator("#element").waitFor({ state: "hidden" });
await page.locator("#element").waitFor({ state: "attached" });
await page.locator("#element").waitFor({ state: "detached" });

// Wait for load states
await page.waitForLoadState("load"); // full page load
await page.waitForLoadState("domcontentloaded"); // DOM ready
await page.waitForLoadState("networkidle"); // no network activity

// Wait for selector
await page.waitForSelector("#element");
await page.waitForSelector("#element", { state: "visible" });

// Wait for function
await page.waitForFunction(() => {
  return document.querySelectorAll(".item").length > 5;
});

// Wait for URL
await page.waitForURL("**/dashboard");
await page.waitForURL(/.*profile.*/);

// Wait for response
await page.waitForResponse("**/api/users");
await page.waitForResponse(
  (response) => response.url().includes("/api/") && response.status() === 200,
);
// Wait for event
await page.waitForEvent("console");
await page.waitForEvent("download");
await page.waitForEvent("Filechooser");
await page.waitForEvent("page");
await page.waitForEvent("popup");

// Wait for timeout (use sparingly)
await page.waitForTimeout(3000);
/*     */

//waitForSelector is used to wait for an element to appear in the DOM
//  with states like attached, visible, or hidden. 
// Playwright doesn’t support state: 'enabled' directly,
//  because “enabled” is not a DOM state but an element property.
//To handle that, I’d combine waitForSelector with an 
// assertion like expect(locator).toBeEnabled().
//  This way, I ensure the element is both present and interactable before clicking.