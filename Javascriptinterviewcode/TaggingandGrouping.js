/*  1. test.describe — basic grouping
test.describe('Login Tests', () => {
  test('valid login', async ({ page }) => { ... })
  test('invalid login', async ({ page }) => { ... })
  test('forgot password', async ({ page }) => { ... })
})

2. Nested test.describe — group within group
test.describe('Authentication', () => {

  test.describe('Login', () => {
    test('valid credentials', async ({ page }) => { ... })
    test('invalid credentials', async ({ page }) => { ... })
  })

  test.describe('Register', () => {
    test('new user signup', async ({ page }) => { ... })
    test('duplicate email', async ({ page }) => { ... })
  })

})

3. Separate files — most common in real projects
tests/
  auth/
    login.spec.ts
    register.spec.ts
  checkout/
    cart.spec.ts
    payment.spec.ts
  dashboard/
    overview.spec.ts
Run a specific folder:
bashnpx playwright test tests/auth/
npx playwright test tests/checkout/

4. Tags — flexible grouping across files
test('login @smoke', async ({ page }) => { ... })
test('payment @smoke @regression', async ({ page }) => { ... })
test('export report @regression', async ({ page }) => { ... })
Run by tag:
bashnpx playwright test --grep @smoke
npx playwright test --grep @regression
npx playwright test --grep-invert @smoke   # exclude smoke

5. projects in config — group by browser or environment
js// playwright.config.ts
projects: [
  {
    name: 'smoke',
    testMatch: '**/ smoke;
/*.spec.ts',
    use: { ...devices['Desktop Chrome'] }
  },
  {
    name: 'regression',
    testMatch: '**/ regression /*.spec.ts',
    use: { ...devices['Desktop Chrome'] }
  },
  {
//     name: 'mobile',
//    // testMatch: '**/ * spec.js;
//     use: { ...devices['iPhone 13'] }
//   }
// ]
// Run specific project:
// bashnpx playwright test --project=smoke
// npx playwright test --project=mobile

// 6. test.describe.serial — run tests in order (one after another)
// js// by default describe runs in parallel
// // serial forces them to run in sequence
// test.describe.serial('Checkout flow', () => {
//   test('add to cart', async ({ page }) => { ... })
//   test('enter address', async ({ page }) => { ... })
//   test('make payment', async ({ page }) => { ... })
// })

// Quick comparison
// MethodBest fortest.describeLogical grouping
// in one fileNested describeSub-grouping within
// a featureSeparate files/foldersLarge projects,
//  team structureTags @smokeCross-cutting
//   groups (smoke, regression)projectsBrowser, env,
//    or suite-level groupingdescribe.serialTests that depend on each other

// Most real projects use a combination
//  — folders for structure, tags for test types,
//   and projects for browsers/environments. */
