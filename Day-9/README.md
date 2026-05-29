# Day 9: Building REST APIs with MVC Pattern (GET & POST)

## Detailed Learning Guide

Building on the foundation of MVC Architecture and Express Router, the next step is handling meaningful data operations. Today focuses on implementing **GET** (Retrieve) and **POST** (Create) functionality using isolated Controllers and Routes.

### Expanding the Controller Logic
When we build RESTful APIs, our controllers do heavy lifting. For a "Course" entity:
1. **GET all courses:** The controller accesses our database (or array), formats a standard JSON response, and sends it back to the client.
2. **POST a new course:** The controller reads the incoming JSON payload (`req.body`), validates it (optionally), pushes it to our data store, and responds with a success status.

### The Standardized JSON Response
A good backend doesn't just send raw text. It sends structured JSON so the frontend easily knows if the request worked. 
```javascript
res.send({
    success: true,
    message: "Operation description",
    data: myData
})
```

### HTTP Status Codes matter!
When retrieving data, Express defaults to a `200 OK` status. However, when you successfully *create* something with a POST request, it is best practice to send a **`201 Created`** status code. 

### How to implement POST in a Controller:
```javascript
const createCourse = (req, res) => {
    const newCourse = req.body;
    courses.push(newCourse);
    
    // Using 201 Created status!
    res.status(201).send({
        success: true,
        message: "Course created successfully",
        data: courses
    });
};
```
Don't forget to map this in your route file: `router.post('/', createCourse);`

---

## Quick Revision (Interview Prep)

- **GET Method:** Used to request data from a specified resource. It should *never* change server state.
- **POST Method:** Used to submit data to the server to create a new resource. Requires a request body.
- **Status 201:** The HTTP status code indicating that a new resource was successfully created. Used with POST requests.
- **Request Flow in MVC:** Client Request -> `app.use` (Main App) -> `express.Router` (Route) -> Controller Function -> Response.
- **Data Encapsulation:** Controllers abstract away *how* data is handled, making routes look extremely clean.

---

## Questions Practiced

1. **Course API (GET & POST):** Built an API using MVC that retrieves a list of courses and creates new ones.
2. **Standardized Responses:** Practiced sending properly formatted JSON objects containing `success`, `message`, and `data` properties instead of plain strings.
3. **Connecting Middlewares:** Ensured `express.json()` is present in the main `app.js` before routes are triggered, so controllers can properly read `req.body`.
