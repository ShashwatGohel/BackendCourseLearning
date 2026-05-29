# Day 6: Building RESTful APIs (CRUD Operations)

## Detailed Learning Guide
Welcome to Day 6! Today, we brought all previous concepts together to build a complete **RESTful API** capable of handling CRUD operations using an in-memory database.

### Why RESTful APIs?
REST (Representational State Transfer) is a standard architectural style for building web services. It establishes a uniform way for the frontend (like a React app, mobile app, or another server) and backend to communicate using standard HTTP methods. This consistency makes APIs intuitive and easy to integrate with.

### What is CRUD?
CRUD stands for the four foundational operations of persistent storage:
1. **C**reate: Handled via the `POST` method
2. **R**ead: Handled via the `GET` method
3. **U**pdate: Handled via the `PUT` or `PATCH` method
4. **D**elete: Handled via the `DELETE` method

By combining these methods with standard endpoints (e.g., `/students`), you create a predictable and logical structure for developers to interact with your data objects.

### How to implement CRUD
In this day's practice, we used an array as a "fake database" to simulate database operations. We used standard array methods like `.push()`, `.find()`, and `.filter()` to manipulate our data according to the incoming HTTP request.

**Syntax Example:**
```javascript
let students = [{ id: 1, name: "Peter" }];

// CREATE
app.post('/students', (req, res) => {
    students.push(req.body);
    res.send(students);
});

// DELETE
app.delete('/students/:id', (req, res) => {
    students = students.filter(student => student.id != req.params.id);
    res.send(students);
});
```

## Quick Revision (Interview Prep)
- **REST Principles**: Client-Server architecture, Statelessness (each request contains all needed info), and uniform interface (using standard HTTP methods properly based on their intent).
- **PUT vs PATCH**: `PUT` is typically meant to replace the entire resource object, whereas `PATCH` is meant to apply partial modifications to the resource.
- **In-Memory Storage**: Using variables/arrays to store data is fine for quick learning exercises, but this data is volatile and resets every time the server restarts. A real database (like MongoDB, MySQL, or PostgreSQL) is needed for true persistence.

## Questions Practiced
- Develop a full CRUD API for managing a "Students" resource.
- Implement a GET endpoint to return a list of all items.
- Implement a GET endpoint using route params to find and return a single item from an array.
- Implement a POST endpoint to parse request bodies and push new items into a global array.
- Implement a DELETE endpoint to remove items from an array matching a specific ID.
- Implement a placeholder PUT endpoint for future update functionality.
