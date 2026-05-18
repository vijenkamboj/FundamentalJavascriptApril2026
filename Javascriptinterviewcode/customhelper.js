// utils/LoginHelper.js
import { test as base, expect } from '@playwright/test';

export async function login(page, { email, password }) {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.fill('#userEmail', email);
  await page.fill('#userPassword', password);
  await page.click('#login');
  await expect(page.locator('#navbar')).toBeVisible(); // wait for dashboard
}

