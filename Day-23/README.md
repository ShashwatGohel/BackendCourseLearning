# Day 23: Complete Authentication API (Express + Mongoose + JWT)

## What I Practiced
Today is a “put it all together” day: building an end-to-end authentication API using:
- **Express** for routes and JSON parsing
- **Mongoose** for MongoDB connection + `User` schema/model
- **bcrypt/bcryptjs** for password hashing and password verification
- **JWT (JSON Web Tokens)** for stateless authentication
- A custom auth middleware to protect routes

Main file: `completeAuthentication.js`

---

## Concepts (Medium Depth)

### 1) Password Hashing (Why + How)
Never store plaintext passwords. Instead:
- On **signup**, hash the password using bcrypt (commonly `saltRounds = 10`).
- Store only the hash in the database.
- On **login**, verify using `bcrypt.compare(plain, hash)`.

Hashing notes:
- Hashing is **one-way** (you can’t “decrypt” a bcrypt hash).
- `compare()` works by hashing the input and checking if it matches the stored hash.

### 2) JWT Basics
A JWT is a signed token that contains some payload (like `userId` or `email`) and can be verified later.

Typical flow:
1. User logs in with email/password.
2. Server verifies password.
3. Server issues a JWT via `jwt.sign(payload, secret)`.
4. Client sends it as `Authorization: Bearer <token>`.
5. Server verifies it via `jwt.verify(token, secret)` on protected routes.

JWT tips:
- Don’t put sensitive data in the token payload.
- In real projects, use expiration (`expiresIn`) and handle refresh/rotation.

### 3) Auth Middleware (Protecting Routes)
Auth middleware usually:
- Reads `req.headers.authorization`
- Extracts the Bearer token
- Verifies it
- Attaches decoded payload to `req.user`
- Calls `next()` to continue

If verification fails, it returns an error response (commonly `401 Unauthorized`).

### 4) Mongoose Model Basics
Mongoose uses:
- **Schema** to define shape + constraints (example: `unique: true` for email)
- **Model** to create/query documents (`User.findOne`, `User.create`, `User.find`, etc.)

---

## Routes Implemented (Practice)
- `POST /signup` — create user (hash password, store in MongoDB)
- `POST /login` — validate credentials and generate JWT
- `GET /profile` — protected route (requires JWT)
- `GET /users` — protected route to fetch all users

---

## Notes / TODOs
This day’s code is practice-focused and may contain typos/bugs to fix later (example: incorrect package import names, inconsistent `User` variable usage, or query mistakes). The README is the learning summary; the code is the hands-on practice.

