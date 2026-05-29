# Day 3: Node.js File System (FS) Module

## Detailed Learning Guide
Welcome to Day 3! Today we explored how Node.js interacts with the operating system's file system using the built-in **`fs`** (File System) module.

### Why do we need the FS module?
A backend application isn't just about serving web pages; it often needs to read configuration files, save user-uploaded images, or write system logs to a text file. The `fs` module allows Node.js to communicate with the OS and manage files on the local machine.

### What is the FS Module?
It is a built-in Node library that provides an API for interacting with the file system. It supports both synchronous (blocking) and asynchronous (non-blocking) methods. In backend development, asynchronous methods are strongly preferred to keep the server responsive.

### How to use the FS Module
1. **Writing to a file (`fs.writeFile`)**: Replaces the file if it exists, or creates a new one.
2. **Appending to a file (`fs.appendFile`)**: Adds new content to the end of an existing file.
3. **Deleting a file (`fs.unlink`)**: Removes the specified file from the system.

**Syntax Example:**
```javascript
const fs = require("fs");

// Writing to a file
fs.writeFile("data.txt", "Hello World!", (error) => {
    if (error) console.error(error);
    else console.log("File Created!");
});
```

## Quick Revision (Interview Prep)
- **Core Methods**: `writeFile`, `readFile`, `appendFile`, `unlink`.
- **Sync vs Async**: Methods like `fs.writeFileSync()` block the main thread. Always use the asynchronous versions (with callbacks or promises) in production code to avoid stalling your server.
- **Error-First Callbacks**: Node.js conventionally uses callbacks where the first argument is an `error` object (or `null` if successful). Always check `if (error)` before proceeding.

## Questions Practiced
- Write text to a new file programmatically using `fs.writeFile`.
- Append additional data to an existing text file to understand data preservation.
- Delete a specific file from the disk using `fs.unlink`.
- Handle File System operation errors using error-first callbacks.
