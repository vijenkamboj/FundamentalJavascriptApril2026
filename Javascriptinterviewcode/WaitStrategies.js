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