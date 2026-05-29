// playwright.config.js
import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  // ─── TEST DISCOVERY ───────────────────────────────────────────
  testDir: "./tests",
  testMatch: "**/*.spec.js",
  testIgnore: "**/skip/**",

  // ─── PARALLELISM ──────────────────────────────────────────────
  fullyParallel: true,
  workers: 4,

  // ─── RETRIES ──────────────────────────────────────────────────
  retries: process.env.CI ? 2 : 0, // 2 retries in CI, 0 locally

  // ─── TIMEOUT ──────────────────────────────────────────────────
  timeout: 30000,
  expect: {
    timeout: 5000,
  },

  // ─── REPORTING ────────────────────────────────────────────────
  reporter: [
    ["html", { open: "never" }],
    ["list"],
    ["json", { outputFile: "results.json" }],
  ],

  // ─── OUTPUT ───────────────────────────────────────────────────
  outputDir: "test-results/",

  // ─── SHARED SETTINGS ──────────────────────────────────────────
  use: {
    // Navigation
    baseURL: "https://example.com",

    // Browser window
    headless: true,
    viewport: { width: 1280, height: 720 },

    // Auth
    storageState: "auth.json",

    // Timeouts
    actionTimeout: 10000,
    navigationTimeout: 30000,

    // Debugging artifacts
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry",
    launchOptions: { slowMo: 500 },

    // HTTP
    ignoreHTTPSErrors: true,
    extraHTTPHeaders: {
      Authorization: "Bearer mytoken",
    },

    // Locale & timezone
    locale: "en-US",
    timezoneId: "America/New_York",

    // Geolocation
    geolocation: { latitude: 40.7128, longitude: -74.006 },
    permissions: ["geolocation", "notifications"],

    // Display
    colorScheme: "dark",
    deviceScaleFactor: 2,

    // Proxy
    proxy: {
      server: "http://myproxy.com:8080",
      username: "user",
      password: "pass",
    },
  },

  // ─── PROJECTS ─────────────────────────────────────────────────
  projects: [
    // ── Setup project (runs first, saves login state) ──
    {
      name: "setup",
      testMatch: "**/auth.setup.js",
    },

    // ── Desktop browsers ──
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
      dependencies: ["setup"],
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
      dependencies: ["setup"],
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
      dependencies: ["setup"],
    },

    // ── Mobile devices ──
    {
      name: "mobile-chrome",
      use: { ...devices["Pixel 5"] },
      dependencies: ["setup"],
    },
    {
      name: "mobile-safari",
      use: { ...devices["iPhone 13"] },
      dependencies: ["setup"],
    },
    //     {
    //     name: 'smoke',
    //     testMatch: '**/ smoke;
    // /*.spec.ts',
    //     use: { ...devices['Desktop Chrome'] }
    //   },
    //   {
    //     name: 'regression',
    //     testMatch: '**/ regression /*.spec.ts',
    //     use: { ...devices['Desktop Chrome'] }
    //   },
  ],

  // ─── GLOBAL SETUP / TEARDOWN ──────────────────────────────────
  globalSetup: "./global-setup.js",
  globalTeardown: "./global-teardown.js",

  // ─── DEV SERVER ───────────────────────────────────────────────
  webServer: {
    command: "npm run start",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI, // reuse locally, fresh in CI
    timeout: 120000,
  },
});
