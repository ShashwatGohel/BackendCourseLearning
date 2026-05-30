# Day 24: File Uploads with Multer (Express)

## What I Practiced
Today I practiced uploading files to a Node.js backend using:
- **Express** for the API route
- **Multer** for handling `multipart/form-data`

Files:
- `storageSetup.js` — storage configuration practice
- `uploadSingle.js` — single-file upload API route

---

## Concepts (Medium Depth)

### 1) Why Multer?
When you upload files from a browser (or Postman), the request is usually `multipart/form-data`.
Express’s `express.json()` does not parse file streams, so we use Multer to:
- parse the incoming multipart body
- store the file (disk or memory)
- provide metadata on `req.file` / `req.files`

### 2) Storage Engines (diskStorage)
Multer supports different storage engines. `diskStorage` is common for learning:
- `destination(req, file, cb)` decides **where** to store files
- `filename(req, file, cb)` decides **how to name** files

Good filename strategies:
- add timestamps or random IDs to avoid collisions
- keep original extension

### 3) Single File Upload Route
For a single file field (example field name: `images`):
- middleware: `upload.single("images")`
- result:
  - file info becomes available at `req.file`
  - other text fields are in `req.body`

### 4) Practical Notes
- Use a relative path like `uploads/` (not `/uploads`) if you want it inside your project.
- Ensure the `uploads` folder exists, or create it on startup.
- Consider file size limits and file type filters for real projects.

---

## Questions / Tasks Practiced
- Configure Multer storage (destination + filename)
- Build an endpoint to upload a single image and return `req.file`

