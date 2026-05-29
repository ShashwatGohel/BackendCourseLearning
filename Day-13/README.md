# Day 13: Asynchronous JavaScript (Promises & Async/Await)

## Detailed Learning Guide
JavaScript is a single-threaded language, meaning it can only execute one task at a time. However, many backend operations, like reading from a database or making network requests, take time. If JavaScript waited for these tasks to finish (synchronous), the whole application would freeze. Enter **Asynchronous JavaScript**.

### The Problem: Callbacks
Originally, we used callbacks to handle tasks that take time. But when you have multiple asynchronous operations that depend on each other, you end up nesting callbacks inside callbacks, leading to what developers call **Callback Hell** or the **Pyramid of Doom**.

### The Solution: Promises
A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation. Think of it like a restaurant buzzer. You place your order (start the task), and you get a buzzer (the Promise). You can continue chatting with your friends (running other code). When the food is ready, the buzzer goes off (the Promise resolves), and you get your food (the data). If they run out of ingredients, the buzzer might flash red (the Promise rejects).

```javascript
const myPromise = new Promise((resolve, reject) => {
    // some asynchronous operation
    if (success) {
        resolve("Task Completed!");
    } else {
        reject("Task Failed!");
    }
});
```

### The Evolution: Async/Await
While Promises were a huge improvement, `.then()` and `.catch()` chains could still get messy. `async/await` is syntactical sugar built on top of Promises. It allows you to write asynchronous code that *looks* and *behaves* like synchronous code, making it incredibly easy to read.

- **`async`**: Placed before a function, it ensures that the function always returns a Promise.
- **`await`**: Can only be used inside an `async` function. It pauses the execution of that specific function until the Promise is resolved or rejected.

```javascript
async function handleData() {
    try {
        const data = await myPromise; // Execution pauses here until resolved
        console.log(data);
    } catch (error) {
        console.log(error); // Catches rejections
    }
}
```

## Quick Revision (Interview Prep)
- **Synchronous vs Asynchronous**: Sync blocks the thread; Async allows the thread to continue executing other code while waiting for an operation to finish.
- **Promises**: Objects representing eventual completion/failure. States: `Pending`, `Fulfilled` (resolved), `Rejected`.
- **Async/Await**: Syntactic sugar over Promises. Makes async code look synchronous.
- **Error Handling**: Use `.catch()` with standard Promises, and `try...catch` blocks with `async/await`.
- **Gotchas**: You cannot use `await` at the top level of a standard script (unless in an ES module); it must be inside an `async` function. Forgetting `await` will return the pending Promise object itself, not the resolved data!

## Questions Practiced
- **Custom Promise Creation**: Built a custom Promise that simulates a time-consuming task using `setTimeout` and intentionally rejects to practice error states.
- **Async/Await Handling**: Wrote an `async` function utilizing `try...catch` to await the custom Promise, successfully handling the eventual rejection and logging the error cleanly.
- **Final Question Mix**: Solved complex combination problems combining different asynchronous patterns to solidify understanding.
