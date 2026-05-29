# Day 5: Express.js Routing, Query Params, and Request Body

## Detailed Learning Guide
Welcome to Day 5! Today we went deeper into Express.js, learning how to handle dynamic data sent by the client. We covered **Route Parameters**, **Query Strings**, and **Request Bodies**.

### Why do we need dynamic data?
A static route like `/employees` is great for getting a list of everyone. But what if we want to fetch an employee with a specific ID? Or what if we want to add a completely new employee? The server needs a way to receive and process input data from the user dynamically.

### What are Params, Queries, and Bodies?
- **Route Parameters (`req.params`)**: Used to capture values specified at a certain position in the URL. Ideal for identifying specific resources (e.g., `/employees/:id`).
- **Query Parameters (`req.query`)**: Key-value pairs appended to the end of a URL after a `?`. Ideal for filtering, sorting, or searching lists (e.g., `/filter?department=IT`).
- **Request Body (`req.body`)**: Data sent in the body of an HTTP POST or PUT request. Essential for creating or updating complex resources.

### How to use them
To read JSON data from the request body, we must configure Express to parse it using built-in middleware: `app.use(express.json())`.

**Syntax Example:**
```javascript
// Middleware to parse JSON bodies
app.use(express.json());

// Using Route Parameters
app.get('/employees/:id', (req, res) => {
    const id = req.params.id; 
    res.send(`Employee ID: ${id}`);
});

// Using Request Body
app.post('/employees', (req, res) => {
    const newEmployee = req.body;
    res.status(201).json(newEmployee);
});
```

## Quick Revision (Interview Prep)
- **`express.json()`**: Crucial middleware. Without it, `req.body` will be `undefined` when dealing with JSON payloads.
- **Catch-All Route**: You can use `app.use((req, res) => { ... })` at the very bottom of your file to catch any requests that didn't match previous routes, effectively acting as a custom 404 handler.
- **Status Codes**: Sending the correct HTTP status code is a best practice (e.g., `res.status(201)` for resource creation, `res.status(404)` for not found).

## Questions Practiced
- Extract path parameters (`req.params`) to fetch specific resources by ID.
- Extract query parameters (`req.query`) to simulate filtering data.
- Configure Express to parse incoming JSON payloads using `express.json()`.
- Read data from a POST request body and return it as a structured JSON response.
- Build a generic 404 fallback middleware for undefined routes.
