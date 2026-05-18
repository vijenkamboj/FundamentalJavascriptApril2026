const [newPage] = await Promise.all([
  context.waitForEvent("page"), // waits for new tab/window
  page.click('a[target="_blank"]'), // action that opens new tab
]);

await newPage.waitForLoadState();
console.log(await newPage.title());

// Get all pages
const pages = context.pages();

// Switch between pages
await pages[0].bringToFront();
await pages[1].bringToFront();
// Close specific page
await newPage.close();

//popupo
const [popup] = await Promise.all([
  page.waitForEvent("popup"), // waits for popup window
  page.click("#loginButton"), // action that triggers popup
]);

await popup.fill("#username", "Vijender");
await popup.fill("#password", "secret");
await popup.click("#submit");

// Key Difference
// Type	Event	Typical Use
// New Tab	context.waitForEvent('page')	Opens via link with target="_blank"
// Popup Window	page.waitForEvent('popup')	Opens via JS window.open()
