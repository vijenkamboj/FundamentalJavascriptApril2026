//In Playwright, selectOption() is the method used to
// interact with <select> dropdowns. It lets you choose
//  options by value, label (visible text), or index.

//1. Select by Value
await page.locator("select#country").selectOption("IN");
// selects <option value="IN">India</option>

//2. Select by Label (Visible Text)
await page.locator("select#country").selectOption({ label: "India" });

//3. Select by Index
await page.locator("select#country").selectOption({ index: 2 });
// selects the 3rd option (index starts at 0)

//4. Select Multiple Options
await page.locator("select#skills").selectOption(["java", "python"]);

//Common Issues
//Wrong locator → Make sure you target the <select> element, not the <option>.
//Custom dropdowns (non-<select>) → For div-based dropdowns, selectOption() won’t work.
// You’ll need to click the dropdown and then the option manually.
//Dynamic dropdowns → If options load asynchronously, wait for them:
javascript;
await page.waitForSelector("select#country option");
