# Day 26: Backend Project Structure (Scalable Express API)

## What I Learned

Today I learned how to organize a backend project in a clean, scalable way using a layered structure (routes → controllers → services) with separate folders for configuration, models, middleware, and utilities.

This structure helps when your project grows, because each folder has a single responsibility and your code stays easier to maintain and extend.

---

## Recommended Folder Structure

```text
project/
├── app.js
├── config/
│   └── db.js
├── models/
│   └── User.js
├── routes/
│   └── userRoutes.js
├── controllers/
│   └── userController.js
├── middlewares/
│   └── authMiddleware.js
├── services/
│   └── authService.js
├── utils/
│   └── generateToken.js
├── .env
└── package.json
```

---

## What Goes Where (Medium Depth)

### `app.js` (Application Entry Point)

Responsibilities:

- Create the Express app
- Register global middleware (example: `express.json()`, logging, CORS)
- Register routes (example: `app.use("/users", userRoutes)`)
- Start the server (`app.listen(...)`)

### `config/` (Project Configuration)

Contains configuration and setup code.

- `config/db.js`: MongoDB connection using Mongoose (connect once, reuse everywhere)

### `models/` (Database Models)

Contains Mongoose schemas/models.

- `models/User.js`: `UserSchema` + `User` model

### `routes/` (Route Definitions Only)

Defines endpoints and maps them to controller functions.

- Keep route files thin (no business logic here)
- Example: `router.post("/signup", signupController)`

### `controllers/` (Request Handling / HTTP Layer)

Controllers are responsible for:

- Reading input (`req.body`, `req.params`, `req.query`, headers)
- Calling service functions
- Returning responses (`res.status(...).json(...)`)

Rule of thumb: controller = HTTP layer.

### `services/` (Business Logic)

Services contain the core application logic:

- authentication logic (hash password, compare password, create token)
- reusable “use-cases” used by one or more controllers

Rule of thumb: service = app logic.

### `middlewares/` (Reusable Middleware)

Middleware runs before controllers and can:

- validate requests
- verify JWT and attach `req.user`
- centralize error handling

Examples:

- `authMiddleware`
- `isLoggedIn`
- `errorMiddleware`
- request validators

### `utils/` (Helper Functions)

Small reusable helpers that don’t belong to controllers/services.

- Examples: `generateToken()`, `sendEmail()`, `formatDate()`

### `.env` (Environment Variables)

Stores secrets and environment-specific config, for example:

- `PORT`
- `MONGODB_URI`
- `JWT_SECRET`

Important:

- Add `.env` to `.gitignore`
- Use `.env.example` to show required keys without exposing real values

---

## Notes

- Put secrets (JWT secret, DB URI) in `.env` and don’t commit them to GitHub.
- If you push your `.env` to GitHub, just know: GitHub doesn’t forgive… it remembers forever. Rotate your keys immediately and add it to `.gitignore`.
- A common clean-code approach is “thin routes”, “thin controllers”, and “fat services”.
- Want to know what will happen if you push .env . Please click here: https://drive.google.com/file/d/1L82Ped0m3h3q7apDlAvhxZeNBU5SUkjX/view?usp=drive_link
