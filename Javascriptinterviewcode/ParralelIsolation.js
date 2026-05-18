// // playwright.config.ts
// export default defineConfig({
//   workers: process.env.CI ? 2 : 4, // CI: fewer workers
//   fullyParallel: true, // run tests in files in parallel

//   // Per-file: disable parallelism for sequential tests
//   // In spec file:
//   test.describe.configure({ mode: 'serial' });
// });

// // Test isolation - each test gets fresh context
// test.beforeEach(async ({ context }) => {
//   // context is brand new per test
//   await context.clearCookies();
// });
