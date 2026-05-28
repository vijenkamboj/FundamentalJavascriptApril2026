const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Step 1: Go to mobiles category
  await page.goto("https://example.com/mobiles");

  // Step 2: Wait until product cards are loaded dynamically
  await page.waitForSelector(".product-card");

  // Step 3: Extract product details
  const products = await page.$$eval(".product-card", (cards) =>
    cards.map((card) => ({
      name: card.querySelector(".name")?.innerText,
      price: card.querySelector(".price")?.innerText,
      rating: card.querySelector(".rating")?.innerText,
    })),
  );

  console.log(products);

  await browser.close();
})();

// Timeline in Action
// Navigate → You go to https://example.com/mobiles.

// Initial HTML → Page shows placeholders (loading spinners).

// API Call → Site requests /api/products?category=mobiles.

// Response → JSON with product details arrives.

// DOM Update → JavaScript inserts product cards into the page.

// Playwright Waits → You use waitForSelector('.product-card').

// Scrape → Once visible, you extract product names, prices, ratings.
// page.$$eval collects all elements with .product-card.

// cards.map(...) loops through each card and builds an object for that card.

// The result is an array of objects — one object per product.
/* page.$$eval(".product-card", callback)

Playwright finds all elements on the page that match the CSS 
selector .product-card.

It then passes those elements into the callback function as an array called cards.

cards.map((card) => ({ ... }))

For each product card element, we run a function that extracts specific details.

map creates a new array where each item is an object containing the product’s data.

card.querySelector(".name")?.innerText

Inside each card, we look for the element with class .name.

?. is the optional chaining operator — it prevents errors if the element doesn’t exist.

If found, we take its innerText (the visible text on the page).

card.querySelector(".price")?.innerText

Same logic, but for the product’s price.

card.querySelector(".rating")?.innerText

Same logic, but for the product’s rating. */
/* optional chaining (?.) safely accesses deeply nested properties without throwing if an 
intermediate value is null or undefined. Nullish coalescing (??) returns the right-hand 
value only if the left-hand side is null or undefined (unlike || */
