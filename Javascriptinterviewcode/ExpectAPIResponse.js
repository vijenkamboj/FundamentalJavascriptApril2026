//Here's the complete API / Response assertions with all variations:

// Checks status is 200–299
await expect(response).toBeOK();

// Exact status code
expect(response.status()).toBe(200); // OK
expect(response.status()).toBe(201); // Created
expect(response.status()).toBe(204); // No Content
expect(response.status()).toBe(301); // Moved Permanently
expect(response.status()).toBe(400); // Bad Request
expect(response.status()).toBe(401); // Unauthorized
expect(response.status()).toBe(403); // Forbidden
expect(response.status()).toBe(404); // Not Found
expect(response.status()).toBe(500); // Internal Server Error

// Not a specific status
expect(response.status()).not.toBe(404);
expect(response.status()).not.toBe(500);

// Range checks
expect(response.status()).toBeGreaterThanOrEqual(200);
expect(response.status()).toBeLessThan(300);

//Status Text Assertions
expect(response.statusText()).toBe("OK");
expect(response.statusText()).toBe("Created");
expect(response.statusText()).toBe("Not Found");
expect(response.statusText()).toContain("OK");

//URL Assertions
expect(response.url()).toBe("https://api.example.com/users");
expect(response.url()).toContain("/users");
expect(response.url()).toMatch(/\/users\/\d+/); // regex ?

//Headers Assertions
const headers = response.headers();

// Check specific header exists and its value
expect(headers["content-type"]).toContain("application/json");
expect(headers["content-type"]).toBe("application/json; charset=utf-8");
expect(headers["authorization"]).toBeDefined();
expect(headers["x-custom-header"]).toBeTruthy();

// Check header is not present
expect(headers["x-secret-token"]).toBeUndefined();

// Single header
const contentType = response.headers()["content-type"];
expect(contentType).toContain("application/json");

//Body / JSON Assertions
// Parse JSON body
const body = await response.json();

// Equality
expect(body).toEqual({ id: 1, name: "John" });
expect(body).toStrictEqual({ id: 1, name: "John" }); //?

// Partial match
expect(body).toMatchObject({ name: "John" });
expect(body).toMatchObject({ status: "success" });

// Property checks
expect(body).toHaveProperty("id");
expect(body).toHaveProperty("user.name", "John"); // nested
expect(body).toHaveProperty("items.0.id", 1); // array index

// Array body
expect(body).toHaveLength(5);
expect(body).toContain("admin");
expect(body).toEqual(expect.arrayContaining([{ id: 1, name: "John" }]));

// Truthiness
expect(body).toBeTruthy();
expect(body.data).toBeDefined();
expect(body.error).toBeNull();
expect(body.token).toBeTruthy();

//Text Body Assertions
const text = await response.text();

expect(text).toBe("OK");
expect(text).toContain("success");
expect(text).toMatch(/success/i);
expect(text).toHaveLength(100);

//Intercepting & Asserting API calls in UI Tests
// Wait for a specific API call and assert on it
const responsePromise = page.waitForResponse("**/api/users");
await page.click("#load-users");
const response = await responsePromise;

expect(response.status()).toBe(200);
await expect(response).toBeOK();

const body = await response.json();
expect(body).toHaveProperty("users");
expect(body.users).toHaveLength(10);

//Request Assertions (on the request side)
const request = response.request();

// Method
expect(request.method()).toBe("GET");
expect(request.method()).toBe("POST");
expect(request.method()).toBe("PUT");
expect(request.method()).toBe("DELETE");

// URL
expect(request.url()).toContain("/api/users");
expect(request.url()).toMatch(/\/users\/\d+/);

// Post data (request body)
const postData = request.postDataJSON();
expect(postData).toEqual({ name: "John", email: "john@example.com" });
expect(postData).toHaveProperty("email");
expect(postData).toMatchObject({ name: "John" });

//Full API Test Example
test("POST /api/users creates a user", async ({ request }) => {
  const response = await request.post("/api/users", {
    data: { name: "John", email: "john@example.com" },
  });

  // Status
  expect(response.status()).toBe(201);
  await expect(response).toBeOK();

  // Headers
  expect(response.headers()["content-type"]).toContain("application/json");

  // Body
  const body = await response.json();
  expect(body).toHaveProperty("id");
  expect(body).toMatchObject({ name: "John", email: "john@example.com" });
  expect(body.id).toBeDefined();
  expect(body.createdAt).toBeTruthy();
});
//Quick Reference
// Assert on        Method                 Example
// Status code    .status()                expect(response.status()).toBe(200)
// Status text    .statusText()            expect(response.statusText()).toBe('OK')
// URL            .url()                   expect(response.url()).toContain('/users')
// Headers        .headers()               expect(headers['content-type']).toContain('json')
// JSON body       .json()                  expect(body).toHaveProperty('id')
// Text body       .text()                  expect(text).toContain('success')
// OK range         built-in                await expect(response).toBeOK()
// Method          .request().method()       expect(request.method()).toBe('POST')
// Request body    .request().postDataJSON() expect(postData).toMatchObject({...})
