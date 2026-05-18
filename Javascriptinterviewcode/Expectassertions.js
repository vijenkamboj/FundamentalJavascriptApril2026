// These are used with page.locator() or locator() objects:

// Visibility & State

// await expect(locator).toBeVisible();

// await expect(locator).toBeHidden();

// await expect(locator).toBeEnabled();

// await expect(locator).toBeDisabled();

// await expect(locator).toBeChecked();

// await expect(locator).toBeEditable();

// Text & Content

// await expect(locator).toHaveText("Hello World");

// await expect(locator).toContainText("Hello");

// await expect(locator).toHaveValue("input text");

// await expect(locator).toHaveAttribute("class", "active");

// Count

// await expect(locator).toHaveCount(3);

// CSS

// await expect(locator).toHaveCSS("color", "rgb(255, 0, 0)");

// 📌 Page Assertions
// These are used directly on the page object:

// await expect(page).toHaveTitle("Dashboard");

// await expect(page).toHaveURL(/.*dashboard/);

// 📌 API Response Assertions
// When testing APIs with Playwright’s request context:

// expect(response.status()).toBe(200);

// expect(await response.json()).toEqual({ id: 1, name: "John" });

// 📌 General Assertions
// Playwright also supports standard Jest‑style assertions:

// expect(value).toBe(123);

// expect(value).toEqual({ key: "value" });

// expect(array).toContain("item");

// expect(string).toMatch(/regex/);
