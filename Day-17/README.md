# Day 17: Mongoose Schema and Models

## Detailed Learning Guide

In this lesson, we explored how to define and structure our MongoDB data using **Mongoose**, an Object Data Modeling (ODM) library for MongoDB and Node.js. 

### Why Mongoose?
MongoDB is a NoSQL database, meaning it is schema-less by default. While this provides flexibility, it can lead to inconsistent data. Mongoose helps us impose a structure (a Schema) on our data, providing validation, default values, and type casting, which makes our backend robust and predictable.

### What is a Schema?
A **Schema** defines the structure of the document, default values, and validation rules. It dictates exactly what fields are allowed, what data types they should be, and whether they are required.

Example constraints we used:
*   `type`: Specifies the data type (e.g., `String`, `Number`).
*   `required`: A boolean specifying if the field is mandatory.
*   `unique`: Ensures no two documents have the same value for this field.
*   `default`: Sets a default value if none is provided.
*   `min` and `max`: Used for `Number` types to set acceptable boundaries.

### What is a Model?
A **Model** is a compiled version of the schema. It provides an interface to the database for creating, querying, updating, and deleting records.
```javascript
const movieSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    ratings: { type: Number, min: 1, max: 10 }
});
const Movie = mongoose.model("Movie", movieSchema);
```

### Retrieving Data
We also learned how to use the Model to query the database using the `.find()` method, which returns an array of documents that match the query parameters (or all documents if left empty).

## Quick Revision (Interview Prep)

*   **Schema vs. Model**: A Schema is just the structure/blueprint of the data. A Model is a compiled constructor function based on the Schema that allows you to interact with the MongoDB collection.
*   **Validation**: Mongoose allows built-in validation (like `required: true`, `min`, `max`) before data is ever saved to the database.
*   **`.find()`**: A mongoose method that returns a promise resolving to an array of all matching documents.
*   **Gotchas**: If you define a field as `unique: true`, it builds a unique index in MongoDB. If there is already duplicate data, index creation will fail. 

## Questions Practiced

1.  **Movie Database Initialization**: Create an Express server connected to a MongoDB database named `moviesDB`.
2.  **Define a Movie Schema**: Create a structured schema for a movie including properties like `name` (required, unique), `genre` (with a default value), `ratings` (limited from 1 to 10), and `hero` (required).
3.  **Fetch All Movies**: Implement a `GET /getMovies` route that fetches and displays all the saved movies in the database, wrapping the result in a standard JSON response indicating success or failure.
