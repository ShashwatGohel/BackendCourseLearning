# Day 28: Global Error Handling & HTTP Status Codes

## Detailed Learning Guide

Today we implemented a master error handler (global error middleware) for Express apps and practiced throwing and propagating errors with custom status codes.

- The global error handler centralizes error responses using `app.use((err, req, res, next) => { ... })` and sends a consistent JSON structure (for example `{ success: false, message: err.message }`).
- Use `next(error)` inside `catch` blocks so runtime or async errors are forwarded to the global handler.
- Create a custom `AppError` class that extends `Error` and carries a `statusCode` so routes can throw errors with the appropriate HTTP status.

## Quick Revision (Interview Prep)

- Global error middleware example:

```javascript
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message,
  });
});
```

- Throwing and forwarding errors:

```javascript
try {
  const users = await User.find();
  res.json(users); // 200 OK by default
} catch (error) {
  next(error); // send to global error handler
}
```

- Custom error class:

```javascript
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

// Usage: throw new AppError('User Not Found', 404)
```

## Common HTTP Status Codes (simple meanings)

- `200 OK`: Request succeeded and response contains the requested data.
- `201 Created`: Resource successfully created (commonly after POST).
- `400 Bad Request`: Client sent invalid data or request parameters.
- `401 Unauthorized`: Authentication required or invalid credentials (not logged in).
- `403 Forbidden`: Authenticated but not allowed to access this resource (role/permission issue).
- `404 Not Found`: The requested resource does not exist.
- `409 Conflict`: Request could not be completed because of a conflict (e.g., duplicate record).
- `422 Unprocessable Entity`: Request well-formed but semantic validation failed.
- `500 Internal Server Error`: Unexpected server error — catch-all for unhandled exceptions.

## Custom Error Throw Codes (how they fit)

- Use custom thrown errors (like `AppError`) to attach an appropriate HTTP status code. Examples:
  - `new AppError('Invalid input', 400)` — invalid client request
  - `new AppError('Authentication failed', 401)` — login issues
  - `new AppError('Access denied', 403)` — role/authorization
  - `new AppError('User Not Found', 404)` — missing resource
  - `new AppError('Database error', 500)` — internal problem

- The global handler should respect `err.statusCode` when present and default to `500` otherwise.

## Tips

- Always run authentication middleware before authorization checks so `req.user` is populated.
- Return consistent JSON shapes for success and error responses to make frontend handling simpler.
- Prefer proper HTTP status codes (e.g., `403` for forbidden) rather than sending `200` with an error message.

This README captures the core ideas from `globalErrorMiddleware.js` and explains common HTTP status codes and how to throw custom errors.
