# Day 1: Asynchronous JavaScript & Intro to Node.js HTTP Module

## Detailed Learning Guide
Welcome to Day 1! Today we dive into the foundational concepts of modern JavaScript backends: **Asynchronous Programming** and the built-in **Node.js HTTP module**. 

### Why Asynchronous JavaScript?
In Node.js, we often perform tasks that take time—like querying a database, reading a file, or fetching data from an external API. If JavaScript was purely synchronous, it would wait for these slow tasks to finish before executing the next line of code, effectively "freezing" your application. Asynchronous programming prevents this by allowing the program to continue running other code while waiting for operations to finish.

### What are Promises & Async/Await?
- **Promises**: Think of a Promise like a real-life promise. If you promise to buy a friend a coffee, you're currently in a *pending* state. Eventually, you will either *resolve* the promise (buy the coffee) or *reject* it (forget your wallet).
- **Async/Await**: Syntactic sugar over Promises that makes asynchronous code look synchronous and easier to read. You use `async` to mark a function, and `await` to pause execution within that function until a Promise resolves.

**Syntax Example:**
```javascript
async function getUserData() { 
    try {
        const user = await fetchUser(); // Waits for the Promise to resolve
        console.log(user);
    } catch(error) {
        console.error("Failed to fetch user");
    }
}
```

### The Node.js HTTP Module
Node.js comes with a built-in `http` module to create web servers without needing any external libraries. You can listen to incoming requests and return responses based on the URL and HTTP Method (like `GET` or `POST`).

## Quick Revision (Interview Prep)
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine. It allows JS to be run on the server.
- **Event Loop**: The secret behind Node.js's non-blocking I/O. It handles executing multiple async tasks concurrently.
- **Promises States**: Pending, Fulfilled (Resolved), Rejected.
- **`http.createServer`**: The core method to instantiate a basic Node.js server.
- **Gotcha**: Always remember to call `res.end()` in your HTTP server, otherwise the client will keep waiting for a response forever!

## Questions Practiced
- Create a basic Node API server returning distinct JSON data for different routes (`/user`, `/posts`, `/comments`).
- Handle a 404 "Not Found" route manually using core Node.js.
- Simulate an asynchronous user fetch mechanism utilizing Promises and `setTimeout`.
- Consume promises using the `async/await` syntax with a `try/catch` block for error handling.
- Write a food delivery order simulation returning resolved/rejected Promises.
