# Day 16: CRUD Operations with Express and Mongoose

## Detailed Learning Guide
Now that we understand how to connect to MongoDB and define our data structure using Mongoose Schemas and Models, it's time to actually manipulate the data. This involves the four fundamental operations of persistent storage: **CRUD** (Create, Read, Update, Delete).

By combining Express routes with Mongoose Model methods, we can create a fully functional REST API.

### The CRUD Operations

1. **Create (POST)**: We use the `.save()` method on a new instance of a model, or `Model.create()` to insert new documents into the database.
2. **Read (GET)**: 
   - To get all documents, we use `Model.find()`.
   - To get a specific document, we often use `Model.findById(id)` or `Model.findOne({ query })`.
3. **Update (PUT/PATCH)**: To modify existing records, Mongoose provides methods like `Model.updateOne()`, `Model.updateMany()`, or `Model.findByIdAndUpdate()`.
4. **Delete (DELETE)**: To remove records, we use `Model.deleteOne()`, `Model.deleteMany()`, or `Model.findByIdAndDelete()`.

### Asynchronous Database Operations
Every Mongoose operation that interacts with the database takes time. Therefore, they all return Promises. You must use `async/await` (or `.then()`) in your Express route handlers to wait for the database to respond before sending the HTTP response back to the client.

```javascript
// Example of a Read operation
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find(); // Wait for DB
        res.status(200).send({ data: products });
    } catch (error) {
        res.status(500).send({ message: "Server Error" });
    }
});
```

## Quick Revision (Interview Prep)
- **CRUD**: Acronym for Create, Read, Update, Delete - the basic operations of any database-driven application.
- **RESTful Mapping**:
  - GET `/items` -> `find()`
  - GET `/items/:id` -> `findById()`
  - POST `/items` -> `.save()` or `create()`
  - PUT `/items/:id` -> `updateOne()` or `findByIdAndUpdate()`
  - DELETE `/items/:id` -> `deleteOne()` or `findByIdAndDelete()`
- **Async/Await**: Mandatory for route handlers interacting with the database to prevent returning empty/pending responses.
- **Gotchas**: When using `updateOne({ _id: req.params.id }, { ... })`, remember that the first argument is the query filter, and the second is the data to update. Also, wrap database calls in `try...catch` blocks to gracefully handle connection issues or invalid queries.

## Questions Practiced
- **Read All (GET)**: Implemented a `/getProducts` endpoint utilizing `Product.find()` to retrieve and return all products from the database.
- **Read One (GET by ID)**: Created a `/getProducts/:id` endpoint using `Product.findById()` to fetch a specific product using its unique MongoDB ObjectId. Added error handling for products not found.
- **Update (PUT)**: Built an `/updateproducts/:id` endpoint using `Product.updateOne()` to change the name of a specific product based on its ID and request body.
- **Delete (DELETE)**: Configured a `/deleteProducts/:id` endpoint leveraging `Product.deleteOne()` to remove a specific product from the collection permanently.
