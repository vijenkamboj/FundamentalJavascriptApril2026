const [fileChooser] = await Promise.all([
  page.waitForEvent("filechooser"),
  page.click("#uploadButton"), // the action that opens file chooser
]);

await fileChooser.setFiles("tests/resources/sample.txt");
