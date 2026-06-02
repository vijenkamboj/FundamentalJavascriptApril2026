async function loginTest(page) {
  try {
    await page.goto("https://myapp.com/login");
    await page.fill("#email", "user@test.com");
    await page.click("#submit");
    await page.waitForURL("**/dashboard");
    console.log("Login successful");
  } catch (error) {
    console.error("Login failed:", error);
    throw error; // re-throw so test fails
  }
}
