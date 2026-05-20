//all visual testing options for toHaveScreenshot:
//Page Screenshot
await expect(page).toHaveScreenshot("homepage.png");
await expect(locator).toHaveScreenshot("button.png");

//Pixel-Based Threshold
// Max number of pixels that can differ
await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });

// Max percentage of pixels that can differ (0 to 1)
await expect(page).toHaveScreenshot({ maxDiffPixelRatio: 0.05 }); // 5%
await expect(page).toHaveScreenshot({ maxDiffPixelRatio: 0.01 }); // 1%
await expect(page).toHaveScreenshot({ maxDiffPixelRatio: 0 }); // exact match

//Pixel Color Threshold
// How different each pixel color can be (0 to 1)
// 0 = exact color match, 1 = any color accepted
await expect(page).toHaveScreenshot({ threshold: 0.2 }); // default
await expect(page).toHaveScreenshot({ threshold: 0 }); // strict color match
await expect(page).toHaveScreenshot({ threshold: 0.5 }); // lenient color match

//Clip / Crop Area
// Only compare a specific region of the page
await expect(page).toHaveScreenshot({
  clip: {
    x: 0,
    y: 0,
    width: 800,
    height: 600,
  },
});

//Full Page Screenshot
// Captures the full scrollable page
await expect(page).toHaveScreenshot({ fullPage: true });
await expect(page).toHaveScreenshot("full.png", { fullPage: true });

//Mask Elements
// Hide dynamic elements (ads, timestamps, avatars) before comparing
await expect(page).toHaveScreenshot({
  mask: [
    page.locator(".timestamp"),
    page.locator(".ad-banner"),
    page.locator("#user-avatar"),
  ],
});

// Customize the mask color (default is magenta #FF00FF)
await expect(page).toHaveScreenshot({
  mask: [page.locator(".timestamp")],
  maskColor: "#000000",
});

//Animations
// Disable CSS animations before taking screenshot (default: 'disabled')
await expect(page).toHaveScreenshot({ animations: "disabled" });

// Allow animations to run
await expect(page).toHaveScreenshot({ animations: "allow" });

//Timeout
await expect(page).toHaveScreenshot({ timeout: 10000 }); // 10 seconds

/*Tip: On first run, Playwright generates the baseline screenshots. 
On subsequent runs it compares against them. Run with --update-snapshots
 flag to regenerate baselines when UI changes intentionally:
npx playwright test --update-snapshots*/
