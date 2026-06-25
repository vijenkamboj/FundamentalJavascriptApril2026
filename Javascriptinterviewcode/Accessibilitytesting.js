//npm install @playwright/test axe-core playwright-axe
//@playwright/test → Playwright test runner
//axe-core → Accessibility engine
//playwright-axe → Helper to run axe inside Playwright

import { test, expect } from "@playwright/test";
import { injectAxe, checkA11y } from "playwright-axe";

//Step 3: Write an Accessibility Test
test("homepage should have no accessibility violations", async ({ page }) => {
  await page.goto("https://example.com");

  // Inject axe-core into the page
  await injectAxe(page);

  // Run accessibility checks
  await checkA11y(page, null, {
    detailedReport: true,
    detailedReportOptions: { html: true },
  });
});

// injectAxe(page) → loads axe-core into the DOM.

// checkA11y(page) → runs accessibility scan.

// Options let you generate detailed reports.

//How Playwright + axe ensures WCAG 2.1 compliance

import { test } from "@playwright/test";
import { injectAxe, checkA11y } from "playwright-axe";

test("homepage accessibility check", async ({ page }) => {
  await page.goto("https://example.com");

  // Inject axe-core
  await injectAxe(page); //loads axe-core into the DOM.

  // Run accessibility scan against WCAG 2.1
  await checkA11y(page, null, {
    //runs accessibility scan
    axeOptions: { runOnly: ["wcag2a", "wcag2aa", "wcag21aa"] },
    detailedReport: true,
    detailedReportOptions: { html: true },
  });
});
