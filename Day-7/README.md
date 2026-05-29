# Day 7: PUT Requests & Updating Resources

## Detailed Learning Guide

In backend development, managing data means more than just creating (POST) and retrieving (GET) it; we often need to **update** existing records. This is where the HTTP **PUT** method comes in. 

### Why do we need PUT?
Imagine a user changes their profile name, or an employee moves to a new department. You shouldn't create a brand-new user; you should modify the existing one. The PUT method tells the server: "Find this specific resource and update its data with the payload I am providing."

### What happens in a PUT request?
1. **Identify the resource:** The client usually sends a unique identifier (like an `id`) in the URL path parameters. Example: `/students/2`.
2. **Provide new data:** The client sends the new, updated information in the request body (JSON format).
3. **Server processing:** 
   - The server parses the ID from `req.params.id`.
   - It searches the database (or mock array) to find the resource.
   - If found, it updates the specific fields using the data from `req.body`.
   - If not found, it responds with a **404 Not Found** status.

### How to implement it in Express?
```javascript
app.put('/resources/:id', (req, res) => {
    // 1. Extract ID
    const resourceId = req.params.id;
    // 2. Find resource
    const resource = resources.find(r => r.id == resourceId);
    
    if (resource) {
        // 3. Update fields
        resource.name = req.body.name;
        res.send({ message: "Updated successfully", data: resource });
    } else {
        // 4. Handle Not Found
        res.status(404).json({ message: "Resource not found" });
    }
});
```

*Note: For these updates to work, remember you must use `app.use(express.json())` so Express knows how to read `req.body`.*

---

## Quick Revision (Interview Prep)

- **PUT vs POST:** POST creates a new resource, while PUT updates an existing resource.
- **Path Parameters (`req.params`):** Used to capture dynamic values in the URL (e.g., `:id`). Essential for identifying *which* item to update.
- **Request Body (`req.body`):** Carries the JSON payload with the new data.
- **Handling Missing Items:** Always check if the item exists! If `find()` returns undefined, you **must** send a `404 Not Found` response to prevent crashes and inform the client properly.
- **DELETE Method:** Often practiced alongside PUT. Use `array.filter()` to remove an item whose ID matches the parameter.

---

## Questions Practiced

1. **Update Student Name:** Created an endpoint to update a student's name based on their ID.
2. **Update Employee Department:** Created an endpoint to assign a new department to an employee using PUT.
3. **Update Course Duration:** Allowed clients to modify the duration of a specific course.
4. **Update Product Price:** Created an e-commerce endpoint to change the price of an existing product.
5. **Mixed Practice (PUT & DELETE):** Implemented both updating records and deleting a movie from a list of movies to cement CRUD concepts.
