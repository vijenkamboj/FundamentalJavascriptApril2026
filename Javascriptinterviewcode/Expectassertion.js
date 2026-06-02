//Here's the complete expect assertions including all Page, Element, API, and Generic methods:

//1.Element Assertions (expect(locator))

// Visibility
await expect(locator).toBeVisible();
await expect(locator).toBeHidden();

// State
await expect(locator).toBeEnabled();
await expect(locator).toBeDisabled();
await expect(locator).toBeChecked();
await expect(locator).toBeEditable();
await expect(locator).toBeFocused();
await expect(locator).toBeEmpty();

// Content
await expect(locator).toHaveText("Hello");
await expect(locator).toContainText("Hell");
await expect(locator).toHaveValue("input value");
await expect(locator).toHaveValues(["opt1", "opt2"]); // multi-select

// Attributes & Properties
await expect(locator).toHaveAttribute("href", "/home");
await expect(locator).toHaveClass("btn-primary");
await expect(locator).toHaveId("submit-btn");
await expect(locator).toHaveCSS("color", "rgb(0, 0, 0)");
await expect(locator).toHaveRole("button"); // ARIA role

// Count
await expect(locator).toHaveCount(5);
await expect(locator).toBeGreaterThan(5);

//2.Page Assertions (expect(page))
// URL
await expect(page).toHaveURL("https://example.com/dashboard");
await expect(page).toHaveURL(/dashboard/); // regex
await expect(page).not.toHaveURL("/login");

// Title
await expect(page).toHaveTitle("My App");
await expect(page).toHaveTitle(/My App/); // regex

// Screenshot (visual comparison)
await expect(page).toHaveScreenshot("homepage.png");
await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });

//3.API / Response Assertions (expect(response))
await expect(response.status()).toBe(200); // status 200–299

//4.Modifiers
// Negate
await expect(locator).not.toBeVisible();
await expect(page).not.toHaveURL("/login");
expect(value).not.toBe(0);

// Soft assertions — continues test even on failure
await expect.soft(locator).toBeVisible();
await expect.soft(locator).toHaveText("Hello");
await expect.soft(page).toHaveURL("/dashboard");

// Custom timeout
await expect(locator).toBeVisible({ timeout: 10000 });
await expect(page).toHaveURL("/dashboard", { timeout: 15000 });

// Custom failure message
await expect(locator, "Submit button should be visible").toBeVisible();
await expect(page, "Should redirect to dashboard").toHaveURL("/dashboard");

//Generic (Jest-style) Assertions (expect(value))
// Equality
expect(value).toBe(42);
expect(value).toEqual({ name: "John" });
expect(value).toStrictEqual({ name: "John" });
expect(value).not.toBe(0);

// Truthiness
expect(value).toBeTruthy();
expect(value).toBeFalsy();
expect(value).toBeNull();
expect(value).toBeUndefined();
expect(value).toBeDefined();

// Numbers
expect(value).toBeGreaterThan(5);
expect(value).toBeGreaterThanOrEqual(5);
expect(value).toBeLessThan(10);
expect(value).toBeLessThanOrEqual(10);
expect(value).toBeCloseTo(3.14, 2);

// Strings
expect(value).toContain("hello");
expect(value).toMatch(/regex/);
expect(value).toHaveLength(3);

// Arrays
expect(array).toContain("item");
expect(array).toHaveLength(3);
expect(array).toEqual(expect.arrayContaining(["a", "b"]));

// Objects
expect(obj).toHaveProperty("user.name", "John");
expect(obj).toMatchObject({ name: "John" }); // partial match

// Errors
expect(() => fn()).toThrow();
expect(() => fn()).toThrow("error message");
expect(() => fn()).toThrow(TypeError);

//Quick Reference Summary
// Assert On                    Common Methods
// expect(page)                 toHaveURL, toHaveTitle, toHaveScreenshot
// expect(locator)              toBeVisible, toHaveText, toHaveValue, toBeChecked,toHaveCount
// expect(response)             toBeOK
// expect(value)                toBe, toEqual, toContain, toHaveLength, toThrow
