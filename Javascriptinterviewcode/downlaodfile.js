import { test, expect } from "@playwright/test";

test("validate downloaded file name", async ({ page }) => {
  await page.goto("https://example.com/download");

  // Wait for download event while triggering the action
  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.click("#downloadButton"), // action that triggers download
  ]);

  // Get suggested filename from server
  const fileName = download.suggestedFilename();
  console.log("Suggested filename:", fileName);

  // ✅ Verify filename
  expect(fileName).toBe("report-2024.csv");

  // Get the temporary path where Playwright stored the file
  const path = await download.path();
  console.log("Downloaded to temporary path:", path);

  // Save the file to a custom directory
  await download.saveAs(`downloads/${fileName}`);
});
