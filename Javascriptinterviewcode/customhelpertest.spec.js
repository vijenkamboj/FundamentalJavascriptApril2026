// tests/Dashboard.test.js
import { test, expect } from "@playwright/test";
import { login } from "../customhelper.js";

test("Dashboard loads after login", async ({ page }) => {
  await login(page, {
    email: "vijen.kamboj@gmail.com",
    password: "India@2911",
  });
  await expect(page.locator(".dashboard")).toBeVisible();
});
