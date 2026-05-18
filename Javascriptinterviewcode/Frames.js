// Get frame by name or URL
const frame = page.frame("frame-name");
const frame = page.frame({ url: /.*frame.html/ });

// Get frame by selector
const frameElement = page.frameLocator("iframe#my-frame");

// Work with frame content
await frameElement.locator("#button").click();

// Get all frames
const frames = page.frames();

// Main frame
const mainFrame = page.mainFrame();

// Wait for frame
await page.waitForSelector("iframe#my-frame");
const frame = page.frame({ name: "my-frame" });

// Frame locator (recommended for nested frames)
const frameLocator = page.frameLocator("iframe").first();
await frameLocator.locator("#submit").click();
