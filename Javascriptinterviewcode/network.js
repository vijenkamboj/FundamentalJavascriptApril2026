import{page,request} from "@playwright/test"


// Intercept ALL requests
await page.route('**/*', route => {
    console.log(route.request().url());
    route.continue();   // let request proceed
});

await page.goto('https://example.com');

// Block Requests (images, css, ads)
js// Block images and stylesheets
await page.route('**/*', route => {
    const type = route.request().resourceType();

    if (['image', 'stylesheet', 'font'].includes(type)) {
        route.abort();          // ❌ block it
    } else {
        route.continue();       // ✅ allow it
    }
});

//3. Mock / Fake API Response
await page.route('**/api/users', route => {
    route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([
            { id: 1, name: 'Vijender' },
            { id: 2, name: 'John' }
        ])
    });
});

await page.goto('https://myapp.com');
// App now receives fake API data ✅

4. Modify Request (change headers, body, URL)
jsawait page.route('**/api/data', route => {
    route.continue({
        headers: {
            ...route.request().headers(),
            'Authorization': 'Bearer my-token',   // inject token
            'Custom-Header': 'hello'
        },
        method: 'POST',                            // change method
        postData: JSON.stringify({ key: 'value' }) // change body
    });
});

5. Modify Response
jsawait page.route('**/api/products', async route => {
    const response = await route.fetch();          // get real response
    const json = await response.json();

    // Modify the response
    json.push({ id: 99, name: 'Fake Product' });

    route.fulfill({
        response,
        body: JSON.stringify(json)                 // send modified data
    });
});

6. Simulate Network Errors
jsawait page.route('**/api/payment', route => {
    route.abort('failed');       // simulate network failure
});

// abort reasons: 'aborted' | 'failed' | 'timedout' | 'connectionrefused'

7. page.on('request') & page.on('response') — Spy/Listen
js// Listen to all requests (no blocking)
page.on('request', request => {
    console.log('➡️ Request:', request.method(), request.url());
});

// Listen to all responses
page.on('response', response => {
    console.log('⬅️ Response:', response.status(), response.url());
});

await page.goto('https://example.com');

8. Wait for Specific Request/Response
js// Wait for a specific API call to happen
const [response] = await Promise.all([
    page.waitForResponse('**/api/login'),     // wait for this
    page.click('#login-btn')                  // trigger it
]);

const data = await response.json();
console.log(data);

9. Remove a Route
jsconst handler = route => route.continue();

await page.route('**/*', handler);

// Later — remove the intercept
await page.unroute('**/*', handler);

Quick Reference
MethodPurposeroute.continue()Pass request through as-isroute.abort()Block the requestroute.fulfill()Return a fake/mock responseroute.fetch()Get real response, then modifypage.on('request')Spy on requests (no blocking)page.on('response')Spy on responsespage.waitForResponse()Wait for a specific API callpage.unroute()Remove an interceptor

Common Use Cases

✅ Mock APIs during testing (no real backend needed)
✅ Block ads/images to speed up tests
✅ Inject auth tokens into every request
✅ Simulate errors (500, network failure)
✅ Capture API calls for assertions
