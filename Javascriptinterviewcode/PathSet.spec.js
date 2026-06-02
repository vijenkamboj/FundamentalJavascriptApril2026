// A simple Playwright test (preview)
const urls = ["/login", "/dashboard", "/profile"];
for (const path of urls) {
  await page.goto("https://myapp.com" + path);
  const title = await page.title();
  console.log(path + "->" + title);
}
