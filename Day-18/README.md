# Day 18: MongoDB CRUD Operations with Mongoose

## Detailed Learning Guide

Today's focus was on completing the **CRUD** (Create, Read, Update, Delete) cycle using Mongoose. We practiced retrieving specific documents, updating existing documents, and deleting them.

### Reading Specific Documents
While `.find()` gets multiple documents, often we want just one.
*   `Model.findOne(query)`: Finds the first document that matches the query object (e.g., `{ name: "Avenger" }`).
*   `Model.findById(id)`: A convenience method that searches directly by the document's unique `_id`.

### Updating Documents
Updating documents requires finding the specific entry and applying the changes.
*   `Model.findOneAndUpdate(query, update, options)`: Finds a document matching the query and updates it. 
*   **The `{ new: true }` Option**: By default, Mongoose update methods return the *original* document as it was before the update. If you want the method to return the *updated* document, you must pass `{ new: true }` in the options object.

### Deleting Documents
Deleting documents cleans up unwanted or outdated data.
*   `Model.findByIdAndDelete(id)`: Finds a document by its ID and removes it from the collection entirely. Returns the deleted document (or null if not found).

### URL Parameters (req.params)
To dynamically target specific documents (like updating or deleting a specific movie), we pass the document's ID in the URL route itself, like `/movies/:id`. We can then access this dynamic value in our code using `req.params.id`.

## Quick Revision (Interview Prep)

*   **CRUD**: Create, Read, Update, Delete. The four fundamental operations of persistent storage.
*   **`req.params` vs `req.body`**: `req.params` extracts data from the URL path variables (e.g., `/:id`). `req.body` extracts data from the HTTP request payload (useful for POST/PUT).
*   **`findOneAndUpdate` default behavior**: Always remember it returns the old document unless you specify `{ new: true }`.
*   **Error Handling**: Database operations can fail (e.g., invalid ID format, database offline). Always wrap asynchronous Mongoose calls in `try...catch` blocks to prevent the server from crashing.

## Questions Practiced

1.  **Find a Specific Movie**: Implement a `GET /getOneMovie` route that searches for a specific movie by its name and returns the document if found.
2.  **Update a Movie by ID**: Create a `PUT /getOneandUpdate/:id` route that takes a document ID from the URL and a new name from the request body. Update the movie's name in the database and return the newly updated document.
3.  **Delete a Movie by ID**: Implement a `DELETE /movies/:id` route to find a movie by its URL ID parameter, delete it from the database, and send a successful deletion response.
