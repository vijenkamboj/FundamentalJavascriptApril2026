// Handle alert - accept
page.on("dialog", async (dialog) => {
  console.log(dialog.message());
  await dialog.accept();
});
// Handle prompt - provide input
page.on("dialog", async (dialog) => {
  if (dialog.type() === "prompt") {
    await dialog.accept("User Input");
  }
});
// Handle confirmation - dismiss
page.on("dialog", async (dialog) => {
  if (dialog.type() === "confirm") {
    await dialog.dismiss();
  }
});
// Conditional handling
page.on("dialog", async (dialog) => {
  if (dialog.message().includes("Are you sure?")) {
    await dialog.accept();
  } else {
    await dialog.dismiss();
  }
});
// One-time dialog handling
page.once("dialog", (dialog) => dialog.accept());
await page.locator("#delete-btn").click();

// Dialog Object Properties
// When you register a handler with page.on("dialog", handler), Playwright passes a Dialog object. You can access:

// dialog.type() → Returns the type (alert, confirm, prompt, beforeunload)

// dialog.message() → Returns the text shown in the dialog

// dialog.defaultValue() → Returns the default input value (only for prompt)

// dialog.accept([promptText]) → Accepts the dialog (optionally sends text for prompt)

// dialog.dismiss() → Cancels or closes the dialog (used for confirm or prompt)
// Types of Dialogs
// Playwright can intercept four types of browser dialogs:

// Dialog Type	Trigger Example	Typical Use Case
// alert	window.alert("Message")	Simple notification
// confirm	window.confirm("Are you sure?")	Yes/No confirmation
// prompt	window.prompt("Enter your name")	User input
// beforeunload	Triggered when navigating away from a page	Prevent accidental navigation
