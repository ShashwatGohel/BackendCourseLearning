# Day 21: Authentication Middleware

## Detailed Learning Guide

Today we focused on **Middleware**, specifically building an Authentication Middleware to protect our Express routes using JSON Web Tokens (JWT).

### What is Middleware?
Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application's request-response cycle (commonly denoted by a variable named `next`). They execute *between* the raw request arriving and your final route handler logic.

### Building Auth Middleware
When a user wants to access a protected route (like a user profile or dashboard), they must prove who they are. They do this by sending their JWT in the **Authorization Header** of the HTTP request, usually in the format: `Bearer <token>`.

Our custom `authMiddleware` does the following:
1.  **Extracts the Token**: Reads `req.headers.authorization` and splits the string to separate the word "Bearer" from the actual token string.
2.  **Verifies the Token**: Uses `jwt.verify(actualToken, "secretKey")`. If the token is fake or expired, this throws an error, which we catch and return an "Unauthorized" response.
3.  **Attaches the User**: If verification succeeds, `jwt.verify` returns the decoded payload (e.g., `{ id: 1, email: "..." }`). We attach this payload to the request object (`req.user = decoded`).
4.  **Calls `next()`**: Finally, we call `next()` to pass control to the actual route handler.

### Protecting Routes
To protect a route, we simply drop our `authMiddleware` into the route definition before the final callback:
`app.get('/dashboard', authMiddleware, (req, res) => { ... })`

## Quick Revision (Interview Prep)

*   **Middleware Pipeline**: Express processes requests through a chain of middleware. If a middleware doesn't end the request (by calling `res.send()`), it MUST call `next()` or the request will hang indefinitely.
*   **Bearer Token**: A standard convention where the JWT is passed in the header as `Authorization: Bearer eyJhbG...`
*   **`req.user`**: A standard convention in Node/Express authentication. By attaching the decoded token payload to `req.user` inside the middleware, subsequent route handlers immediately know exactly which user is making the request without hitting the database.

## Questions Practiced

1.  **Implement Auth Middleware**: Write a custom middleware function that intercepts a request, reads the `authorization` header, verifies the JWT, and calls `next()` on success or sends an error on failure.
2.  **Mock Login Route**: Create a POST `/login` route that accepts hardcoded credentials and returns a signed JWT. Note: The middleware shouldn't apply to the login route!
3.  **Protected Routes**: Create a `GET /dashboard` and a `GET /profile` route. Apply the `authMiddleware` to both. Ensure that the profile route responds by sending back the `req.user` data that the middleware attached.
