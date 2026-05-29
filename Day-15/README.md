# Day 15: Introduction to MongoDB & Mongoose (Schemas and Models)

## Detailed Learning Guide
As applications grow, storing data in simple text files (like we did with the `fs` module) becomes inefficient, insecure, and difficult to manage. This is where databases come in. For Node.js, **MongoDB** (a NoSQL database) combined with **Mongoose** (an Object Data Modeling library) is the most popular stack.

### What is MongoDB?
Unlike traditional SQL databases (like MySQL or PostgreSQL) that store data in rigid tables and rows, MongoDB stores data in flexible, JSON-like documents. This means the structure of the data can vary from document to document, making it highly adaptable for modern applications.

### What is Mongoose?
While MongoDB is flexible, in an application, we usually *want* some structure to prevent bad data from being saved. Mongoose acts as a bridge between your Express application and your MongoDB database. It provides a straightforward, schema-based solution to model your application data.

### Schemas vs. Models
These are the two fundamental concepts of Mongoose:
1. **Schema**: The blueprint. It defines the structure of your documents, default values, validators, etc. It doesn't actually interact with the database.
   ```javascript
   const userSchema = new mongoose.Schema({
       name: String,
       age: Number
   });
   ```
2. **Model**: The constructor function compiled from the Schema. Models are responsible for all document creation and retrieval from the underlying database. Think of the Schema as the architectural plan, and the Model as the actual house you built from it.
   ```javascript
   const User = mongoose.model('User', userSchema);
   ```

### Connecting to MongoDB
Before you can define models or save data, you must establish a connection to your MongoDB server using `mongoose.connect()`, which returns a Promise.

## Quick Revision (Interview Prep)
- **MongoDB**: A NoSQL, document-oriented database. Data is stored in BSON (Binary JSON).
- **Mongoose**: An ODM (Object Data Modeling) library for Node.js and MongoDB. It provides schema validation, managing relationships, and translating code objects to database representations.
- **Schema**: Defines the shape, structure, and rules of the data.
- **Model**: A compiled version of the schema that provides an interface (methods) to query and interact with the database collection.
- **Gotchas**: Mongoose automatically looks for the plural, lowercased version of your model name. If you name your model `'Student'`, Mongoose will create a collection named `'students'`.

## Questions Practiced
- **Database Connection**: Configured a secure connection to a local MongoDB instance using `mongoose.connect`.
- **Defining Schemas**: Created a `studentSchema` specifying that a student should have a `name` (String) and an `age` (Number).
- **Compiling Models**: Converted schemas into usable Mongoose Models (e.g., `Student` and Movie-related models) to prepare for upcoming database operations.
- **Backend Setup**: Set up initial Express server files and connected them alongside the database connection logic.
