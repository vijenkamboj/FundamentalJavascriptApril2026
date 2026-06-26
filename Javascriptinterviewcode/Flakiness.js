// //Main Reasons for Flakiness in Playwright
// 1. Timing & Synchronization Issues
// Not waiting for elements to be visible, enabled, or stable before interacting.
// Using page.click() before the element is fully rendered or ready.
// Relying on arbitrary wait() instead of Playwright’s auto-waiting mechanisms.

// 2. Dynamic Content
// Pages that load data asynchronously (AJAX, API calls).
// Animations or transitions that delay element availability.
// Elements that change position or disappear quickly.

// 3. Network Instability
// API responses delayed or failing intermittently.
// Backend services not consistent in returning data.

// 4. Environment Factors
// Tests running in parallel without proper isolation.
// Shared test data causing conflicts.
// Resource constraints (CPU/memory spikes on CI/CD pipelines).

// 5. Selectors
// Using brittle or unstable locators (like XPath with indexes).
// Elements with dynamic IDs or classes that change per session.
// Multiple elements matching the same selector

// 6. Third-Party Dependencies
// External services (payment gateways, APIs) not always available.
// Ads, popups, or cookie banners interfering with test flow.

// ✅ How to Reduce Flakiness

// Use Playwright’s built-in auto-waiting (page.locator().click() waits for element to be ready).
// Prefer stable selectors (data-test-id, role-based locators).
// Apply retry logic for flaky steps (e.g., re-checking API responses).
// Run tests in isolated environments with fresh test data.
// Avoid hard-coded wait(); use await expect(locator).toBeVisible() instead.
// Use fixtures to set up and tear down clean states.
