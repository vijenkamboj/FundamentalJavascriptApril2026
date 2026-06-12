//Approaches to Configure Reports per Environment

//1. Environment Variable Based Reporter
//Use process.env to switch reporters depending on the environment
// playwright.config.js
import { defineConfig } from "@playwright/test";

export default defineConfig({
  reporter: process.env.CI
    ? [["dot"], ["json", { outputFile: "results-ci.json" }]]
    : [["list"], ["html", { outputFolder: "results-local" }]],
});
// Local → list + html report
// CI → dot + json report
// Run with:
// npx playwright test (local)
// CI=1 npx playwright test (CI)

//2.Projects for Different Environments
export default defineConfig({
  projects: [
    {
      name: 'staging',
      use: { baseURL: 'https://staging.example.com' },
      reporter: [['html', { outputFolder: 'report-staging' }]],
    },
    {
      name: 'production',
      use: { baseURL: 'https://example.com' },
      reporter: [['json', { outputFile: 'report-prod.json' }]],
    }
  ]
});
//Run staging tests:
// npx playwright test --project=staging
// Run production tests:
// npx playwright test --project=production
// Key Considerations
// CI pipelines: Use lightweight reporters (dot, json) to avoid clutter.
// Local debugging: Prefer list or html for readability.
// Staging/Production: Use projects to separate environments cleanly.
// Always run npx playwright show-report to open HTML reports.

//3.combined Playwright config that supports
//  local, CI, staging, and production reports all in one setup
// JSON → outputFile because it’s one file.
// HTML → outputFolder because it’s a directory with multiple files.

// playwright.config.js
// playwright.config.js
import { defineConfig } from '@playwright/test';
const env = process.env.TEST_ENV || 'local';
const reporterConfig = [
  ['list'],
  ['json', { outputFile: `results-${env}.json` }],
  ['html', { outputFolder: `report-${env}` }]
];

export default defineConfig({
  reporter: reporterConfig,
  projects: [
    {
      name: 'local',
      use: { baseURL: 'http://localhost:3000' },
      reporter: [
        ['list'],
        ['json', { outputFile: `results-${env}-local.json` }],
        ['html', { outputFolder: `report-${env}-local` }]
      ]
    },
    {
      name: 'staging',
      use: { baseURL: 'https://staging.example.com' },
      reporter: [
        ['list'],
        ['json', { outputFile: `results-${env}-staging.json` }],
        ['html', { outputFolder: `report-${env}-staging` }]
      ]
    },
    {
      name: 'production',
      use: { baseURL: 'https://example.com' },
      reporter: [
        ['json', { outputFile: `results-${env}-production.json` }],
        ['html', { outputFolder: `report-${env}-production` }]
      ]
    }
  ]
});
// if u want to run all in parallel then remove const env = process.env.TEST_ENV || 'local'; 
//and run with npx playwright test
// Playwright will:
// Run local, staging, and production projects in parallel.
// Generate separate reports:
// results-local.json + report-local/
// results-staging.json + report-staging/
// results-production.json + report-production/
// Unique JSON files: results-ci-staging.json, results-local-production.json, etc.
// Unique HTML folders: report-ci-staging/, report-local-production/, etc.
// No overlap: Each environment + project combination gets its own isolated report.
// Flexibility: You can run multiple projects in parallel without collisions.


// 🚀 How to Run
// Local debugging(defaults to local)
// npx playwright test --project=local
// → list + html report in report-local

// CI staging
// TEST_ENV=ci npx playwright test --project=staging
// → dot + json report for machine parsing

// Production
// TEST_ENV=production npx playwright test --project=production
// → json + html report in report-prod

//Example GitHub Actions Workflow
// Save this as .github/workflows/playwright.yml:
//name: Playwright Tests

// on:
//   push:
//     branches: [ main ]
//   pull_request:

// jobs:
//   test:
//     runs-on: ubuntu-latest

//     steps:
//       - name: Checkout repo
//         uses: actions/checkout@v4

//       - name: Setup Node.js
//         uses: actions/setup-node@v4
//         with:
//           node-version: 18

//       - name: Install dependencies
//         run: npm ci

//       - name: Run Playwright tests
//         run: |
//           TEST_ENV=ci npx playwright test --reporter=dot,json,html

//       - name: Upload Playwright HTML report
//         uses: actions/upload-artifact@v4
//         with:
//           name: playwright-report
//           path: report-ci

//In short: always parameterize outputFile and outputFolder with environment
//  or project identifiers. That guarantees reports don’t overlap and
//  lets you keep a clean history of results.