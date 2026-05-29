# Day 10: Complete CRUD User Management API

## Detailed Learning Guide

Today brings together everything learned so far: Express servers, routing, dynamic parameters, request bodies, and the MVC architecture. We combine these to build a complete **CRUD** (Create, Read, Update, Delete) REST API.

### What is a REST API?
REST (Representational State Transfer) is a set of rules for building web services. In a REST API, we use URLs to identify resources (e.g., `/users`) and standard HTTP verbs (GET, POST, PUT, DELETE) to define what action to take on those resources.

### The Complete Set of Endpoints
To fully manage an entity (like a User), you typically need 5 core endpoints:
1. **GET `/users`** - Retrieve all users.
2. **GET `/users/:id`** - Retrieve a single user by their ID.
3. **POST `/users`** - Create a new user.
4. **PUT `/users/:id`** - Update an existing user's details.
5. **DELETE `/users/:id`** - Delete an existing user.

### Handling Edge Cases
A robust API doesn't just work when everything goes right; it gracefully handles errors.
- **User Not Found:** If a user tries to GET, PUT, or DELETE an ID that doesn't exist, the controller must detect this (`find` returns `undefined`) and respond with a `404 Not Found` status.
- **Consistent Responses:** Whether it's a success or failure, the JSON structure should look identical so the frontend can predict the output format.

### Structuring the App
The codebase is now fully structured:
- `app.js`: Connects to port, sets up JSON parsing, and imports top-level routes.
- `routes/userRoute.js`: Defines the 5 endpoints, tying HTTP verbs to specific controller functions.
- `controllers/userController.js`: Contains the logic for the mock array array (the "fake database"), finding data, modifying it, and returning the proper JSON.

---

## Quick Revision (Interview Prep)

- **CRUD:** An acronym for **C**reate, **R**ead, **U**pdate, and **D**elete. The backbone of database operations.
- **RESTful Principles:** Use standard HTTP methods. Don't use URLs like `/deleteUser` or `/createUser`. Use `DELETE /users` and `POST /users` instead.
- **Status Codes:** 
  - `200 OK` (Standard success)
  - `201 Created` (Success for POST)
  - `404 Not Found` (Resource doesn't exist)
- **Path Parameters (`:id`):** Crucial for targeting single items in Read, Update, and Delete operations.

---

## Questions Practiced

1. **User Management API:** Built an end-to-end user management REST API satisfying all 5 standard CRUD operations.
2. **Controller Implementation:** Wrote isolated logic for `getUser`, `getSingleUser`, `createUser`, `updateUser`, and `deleteUser`.
3. **Error Handling:** Added validation to check if a user exists before updating or retrieving a single record, dispatching `404` errors beautifully.
4. **Middleware Addition:** Practiced adding basic middleware to log incoming requests (URL and Method).
