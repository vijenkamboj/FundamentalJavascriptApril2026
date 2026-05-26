//hcltcb
// // Button
await page.getByRole("button", { name: "Submit" }).click();

// Link
await page.getByRole("link", { name: "Home" }).click();

// Heading
await page.getByRole("heading", { name: "Welcome" });

// Checkbox
await page.getByRole("checkbox", { name: "Remember me" }).check();

// Textbox
await page.getByRole("textbox", { name: "Email" }).fill("test@test.com");

// Combobox (dropdown)
await page.getByRole("combobox", { name: "Country" }).selectOption("India");

//2. Common ARIA Roles
// Form elements
page.getByRole("textbox"); // <input type="text">
page.getByRole("checkbox"); // <input type="checkbox">
page.getByRole("radio"); // <input type="radio">
page.getByRole("combobox"); // <select>
page.getByRole("spinbutton"); // <input type="number">
page.getByRole("searchbox"); // <input type="search">

// Navigation
page.getByRole("link"); // <a href="">
page.getByRole("button"); // <button>
page.getByRole("menuitem"); // menu item
page.getByRole("tab"); // tab

// Structure
page.getByRole("heading"); // <h1> to <h6>
page.getByRole("list"); // <ul>, <ol>
page.getByRole("listitem"); // <li>
page.getByRole("table"); // <table>
page.getByRole("row"); // <tr>
page.getByRole("cell"); // <td>

// Regions
page.getByRole("dialog"); // modal/dialog
page.getByRole("alert"); // alert message
page.getByRole("banner"); // <header>
page.getByRole("navigation"); // <nav>
page.getByRole("main"); // <main>

//name Option — Exact & Partial
// Exact match (default is case-insensitive)
page.getByRole("button", { name: "Sign In" });

// Exact case-sensitive match
page.getByRole("button", { name: "Sign In", exact: true });

// Partial match using regex
page.getByRole("button", { name: /sign/i });

//4. State Options
// Checked state
page.getByRole("checkbox", { name: "Agree", checked: true });

// Disabled state
page.getByRole("button", { name: "Submit", disabled: true });

// Expanded (accordion, dropdown)
page.getByRole("button", { name: "Menu", expanded: false });

// Heading level
page.getByRole("heading", { name: "Dashboard", level: 1 }); // <h1>
page.getByRole("heading", { level: 2 }); // any <h2>

//5. getByLabel() — Form Inputs by Label
// Finds input associated with <label>Email</label>
await page.getByLabel("Email").fill("user@test.com");
await page.getByLabel("Password").fill("secret");
await page.getByLabel("Subscribe").check();

//6. getByText() — By Visible Text
// Partial match
page.getByText("Welcome");

// Exact match
page.getByText("Welcome, Vijender!", { exact: true });

// Regex
page.getByText(/welcome/i);

//7. getByPlaceholder() — Input Placeholder
await page.getByPlaceholder("Enter your email").fill("test@test.com");
await page.getByPlaceholder("Search...").type("Playwright");

//8. getByAltText() — Image Alt Text
await page.getByAltText("Company Logo").click();
await expect(page.getByAltText("Profile Picture")).toBeVisible();

//9. getByTitle() — Title Attribute
await page.getByTitle("Close Dialog").click();
await page.getByTitle("Settings").hover();

//getByTestId() — Locate by Test ID Attribute
// Default attribute is "data-testid"
await page.getByTestId("login-btn").click();
await page.getByTestId("email-input").fill("user@test.com");

//10. Chaining & Filtering
// Inside a specific section
const form = page.getByRole("form", { name: "Login" });
await form.getByRole("textbox", { name: "Email" }).fill("test@test.com");
await form.getByRole("button", { name: "Submit" }).click();

// Filter by text inside a list
page.getByRole("listitem").filter({ hasText: "Playwright" });

// Nth element
page.getByRole("button", { name: "Delete" }).nth(0); // first delete button
page.getByRole("row").last(); // last table row

//Priority Guide — Which Locator to Use?
// 1. getByRole()        ← Best — mirrors how users & screen readers see page
// 2. getByLabel()       ← Great for form fields
// 3. getByPlaceholder() ← Good for inputs without labels
// 4. getByText()        ← Good for buttons, links, paragraphs
// 5. getByAltText()     ← For images
// 6. getByTitle()       ← For title attributes
// 7. getByTestId()      ← Fallback when no ARIA option works

//Playwright recommends ARIA locators first because they test accessibility
//  and reflect real user behavior — if a screen reader can't find it,
//  neither should your test.
