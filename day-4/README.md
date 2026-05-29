# Day 4: Introduction to Express.js & Middleware

## Detailed Learning Guide
Welcome to Day 4! Today marks the transition from Node.js core modules to **Express.js**, the most popular web framework for Node.js.

### Why Express.js?
Writing a server using only the built-in `http` module gets messy quickly. You have to manually parse URLs, extract query parameters, and handle HTTP methods with complex `if/else` chains. Express simplifies this by providing robust routing and middleware architectures out of the box.

### What is Middleware?
Think of middleware as a security guard or receptionist at an office building. Before a visitor (the Request) can reach the specific employee they want to see (the Route Handler), they must pass the receptionist (Middleware), who might check their ID, log their arrival time, or even turn them away.
In Express, middleware are functions that have access to the request object (`req`), the response object (`res`), and the `next` middleware function in the application’s request-response cycle.

### How to set up an Express Server
You initialize an app with `express()`, define routes using `.get()`, `.post()`, etc., and use `.listen()` to start the server.

**Syntax Example:**
```javascript
const express = require("express");
const app = express();

// Application-level middleware
app.use((req, res, next) => {
    console.log("Request received!");
    next(); // Pass control to the next handler
});

// Route handler
app.get("/", (req, res) => {
    res.send("Home Page");
});
```

## Quick Revision (Interview Prep)
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **Routing**: Determining how an application responds to a client request to a particular endpoint (URI) and a specific HTTP request method (GET, POST, etc.).
- **`next()` function**: Crucial in middleware. If you don't call `next()` or send a response (`res.send`), the request will hang indefinitely.
- **Gotcha**: The order of middleware and routes matters! Express executes them sequentially top-to-bottom. 

## Questions Practiced
- Initialize an Express application and start it on a specific port.
- Create basic GET routes returning plain text and JSON responses.
- Implement application-level middleware to intercept and log requests before they reach the route handlers.
- Understand the flow of control using the `next()` function to pass processing to the next function.
