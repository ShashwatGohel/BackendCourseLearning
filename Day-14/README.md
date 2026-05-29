# Day 14: Node.js File System (fs Module)

## Detailed Learning Guide
One of the core features that makes Node.js so powerful for backend development is its ability to interact directly with the operating system, including the file system. The **`fs` (File System) module** provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.

### Why Do We Need the File System?
In many applications, you need to persistently store data without necessarily needing a full-blown database, or you need to read configuration files, handle file uploads, or generate logs. 

### Core Concepts of the `fs` Module
The `fs` module provides both synchronous and asynchronous methods. In backend development, we almost exclusively use the **asynchronous** methods to avoid blocking the single execution thread.

1. **Reading Files (`fs.readFile`)**: Reads the entire contents of a file into memory. You must specify the encoding (like `"utf-8"`) so Node knows to translate the raw buffer data into a readable string.
2. **Writing Files (`fs.writeFile`)**: Writes data to a file. **Crucially, if the file already exists, it replaces the entire file.** If it doesn't exist, it creates it.
3. **Appending Files (`fs.appendFile`)**: Adds data to the end of an existing file without overwriting the current contents.
4. **Deleting Files (`fs.unlink`)**: Removes a file from the system.

### Integration with Express
A common pattern is receiving data via an Express API endpoint (like a POST request) and then saving that data to a file using the `fs` module.

```javascript
// Example of writing to a file asynchronously
const fs = require('fs');

fs.writeFile('log.txt', 'Log entry added!', (error) => {
    if (error) {
         console.error('Failed to write to file');
    } else {
         console.log('File successfully written');
    }
});
```

## Quick Revision (Interview Prep)
- **`fs` Module**: Built-in Node.js module used to interact with the file system.
- **Async vs Sync**: Always prefer asynchronous methods (e.g., `fs.readFile` instead of `fs.readFileSync`) to prevent blocking the event loop.
- **Encoding**: When reading text files, always specify `"utf-8"` encoding, otherwise you will receive a raw Buffer object instead of a string.
- **Overwriting vs Appending**: `writeFile` replaces all content; `appendFile` adds to the existing content.
- **Gotchas**: Path resolution can be tricky. Paths provided to `fs` are relative to where the Node process is *started*, not necessarily where the file resides. `__dirname` is often used to create absolute paths securely.

## Questions Practiced
- **Reading Data**: Implemented a script to read text from `data.txt` using `fs.readFile` and log it to the console, handling potential errors.
- **Writing & Appending**: Practiced creating new files and adding content to existing files using both `fs.writeFile` and `fs.appendFile`.
- **Deleting Files**: Created a script to programmatically delete files using the file system API.
- **Express Integration**: Built a basic Express API with a `POST /notes` route that takes a note from the request body and saves it persistently to a `notes.txt` file using the file system.
