// Playwright can interact with elements inside open Shadow DOM automatically using
// standard locators. This allows tests to locate elements inside web components without
// requiring special handling.
// However, closed Shadow DOM cannot be accessed directly, because it is intentionally
// encapsulated by the browser. In such cases, you would need to use JavaScript execution
// to interact with
//  elements inside the closed Shadow DOM, which is more complex and less reliable.
// Playwright auto-pierces open shadow DOM
//In Playwright, the >> operator inside a locator is specifically used to pierce into Shadow DOM
// boundaries.
//Playwright’s locators are shadow‑aware — using >> tells Playwright to traverse
//  into the shadow root and continue matching selectors inside
//In Playwright, the >> operator inside a locator is officially
//  called the shadow‑piercing descendant combinator.
await page.locator("my-component >> input").fill("value");

// Using CSS pierce selector
await page.locator("custom-input >>> input[type=text]").fill("test");

// getByRole and getByLabel also pierce shadow DOM
await page.getByLabel("Username").fill("testuser");

// Check if element is in shadow DOM
const isInShadow = await page.evaluate(() => {
  return (
    document.querySelector("my-widget")?.shadowRoot?.querySelector("button") !==
    null
  );
});

// For closed Shadow DOM, you would need to execute JavaScript to access it, which is not recommended:
const buttonText = await page.evaluate(() => {
  const host = document.querySelector("closed-component");
  return host.shadowRoot.querySelector("button").textContent;
});

// >> is not a general operator; it’s Playwright’s syntax for shadow DOM traversal.

// You can chain multiple >> if there are nested shadow roots:
page.locator("outer-element >> inner-element >> span.label");
//Piercing with >>> (deep combinator) — crosses shadow boundaries explicitly:
