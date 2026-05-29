# Day 11: Express Middlewares

## Detailed Learning Guide

Middleware functions are the true backbone of Express.js. Think of a request in Express as water flowing through a pipe. Middleware acts like a series of filters that the water passes through before reaching its final destination (the route handler). 

### What is Middleware?
A middleware is a function that has access to the Request object (`req`), the Response object (`res`), and a special function called `next`. 
When a request arrives, a middleware can:
1. Execute any code (like calculating a timestamp or validating a token).
2. Make changes to the request and the response objects.
3. End the request-response cycle (e.g., rejecting an unauthorized user by calling `res.send()`).
4. Call `next()` to pass control to the *next* middleware or route handler.

### The Golden Rule: The `next()` function
If a middleware does not end the request-response cycle (by calling `res.send`, `res.json`, etc.), it **must** call `next()`. If you forget to call `next()`, the request will hang indefinitely, and your API will timeout!

### Types of Middlewares
1. **Global Middleware:** Applied to *every* request that hits the server. Used for things like logging or parsing JSON.
   ```javascript
   app.use((req, res, next) => {
       console.log("Global Logger:", req.method, req.url);
       next();
   });
   ```
2. **Route-Specific Middleware:** Applied only to specific routes. Commonly used for Authentication (checking if a user is logged in before letting them view a dashboard).
   ```javascript
   app.get('/dashboard', authMiddleware, (req, res) => {
       res.send("Welcome!");
   });
   ```

### Why use Middleware?
It allows for incredible reusability. Instead of writing authentication logic inside every single controller, you write it once as a middleware and inject it into the routes that need protection.

---

## Quick Revision (Interview Prep)

- **Middleware Signature:** `(req, res, next) => { ... }`
- **The `next()` Function:** Passes control to the next middleware in the stack. Forgetting it causes infinite hanging!
- **`app.use()`:** Mounts a global middleware.
- **Route-specific:** Passed as arguments between the URL string and the final callback in `app.get()`, `app.post()`, etc.
- **Common Use Cases:** Request logging, authentication/authorization, data parsing (`express.json()`), handling CORS, error handling.

---

## Questions Practiced

1. **Global Logger Middleware:** Created a middleware that automatically logs the HTTP Method and URL of every incoming request before letting it pass to the router.
2. **Authentication Middleware:** Built an `authMiddleware` that checks a boolean `isLoggedIn` variable. If true, it calls `next()`. If false, it blocks the request and sends an "Unauthorized" response without hitting the route logic.
3. **Chaining Middlewares:** Applied multiple middlewares (`logger` and `auth`) to a protected `/dashboard` route.
