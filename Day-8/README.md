# Day 8: Express Router & MVC Architecture Basics

## Detailed Learning Guide

As your backend application grows, putting every single route in your main `server.js` (or `app.js`) file quickly becomes unmanageable. It results in a massive, hard-to-read file. To solve this, we use the **MVC (Model-View-Controller)** pattern and **Express Router**. 

### The Problem: Monolithic Files
If you have students, courses, employees, and products, placing all their GET, POST, PUT, and DELETE methods in one file causes "spaghetti code." 

### The Solution: Separation of Concerns
We divide our code into logical files:
- **Routes:** Decide *where* a request goes. (e.g., `StudentsRoute.js`)
- **Controllers:** Decide *what* happens when the route is hit. The actual business logic. (e.g., `studentsController.js`)

### What is `express.Router()`?
It is like a mini Express application. It only handles routing and middleware. 
Instead of writing `app.get()`, you write `router.get()`. Then, you export this router and tell your main `app` to use it for a specific base URL.

### How it fits together:
1. **Controller (`studentsController.js`):**
   ```javascript
   const getStudents = (req, res) => { res.send("All Students"); };
   module.exports = { getStudents };
   ```
2. **Router (`StudentsRoute.js`):**
   ```javascript
   const express = require('express');
   const router = express.Router();
   const { getStudents } = require('./studentsController');
   
   router.get('/', getStudents); // Maps to /students/
   module.exports = router;
   ```
3. **Main App (`Server.js`):**
   ```javascript
   const studentRoute = require('./StudentsRoute');
   app.use('/students', studentRoute); // Connects the route
   ```

By doing this, any request to `/students` is forwarded to `StudentsRoute.js`, which then triggers the logic in `studentsController.js`.

---

## Quick Revision (Interview Prep)

- **MVC:** Model (Data), View (UI), Controller (Logic). In pure APIs, we focus heavily on Routes & Controllers.
- **`express.Router()`:** Creates modular, mountable route handlers. Think of it as a "mini-app".
- **`app.use('/path', router)`:** Mounts a router. If mounted at `/users`, a `router.get('/profile')` will trigger at `/users/profile`.
- **`module.exports` & `require`:** Node.js syntax to share functions and objects across different files. 
- **Benefits of Separation:** Improved readability, easier debugging, seamless collaboration (multiple developers can work on different files simultaneously).

---

## Questions Practiced

1. **Refactoring a Monolith:** Extracted logic from a single file into a proper MVC folder structure.
2. **Implementing Controllers:** Created isolated controller functions for basic `GET` routes.
3. **Implementing Routers:** Created isolated route files linking endpoints to their respective controller functions.
4. **Connecting it to App:** Used `app.use()` in the main server file to connect modular routes.
