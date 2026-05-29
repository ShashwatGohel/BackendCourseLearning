# Day 22: Full Authentication Flow (Signup, Login, DB Integration)

## Detailed Learning Guide

Today we tied everything together. We combined Mongoose, bcryptjs, and JSON Web Tokens to build a complete, real-world User Authentication flow.

### 1. The User Schema
First, we need a place to store our users. We define a Mongoose `User` schema containing a `name`, `email` (unique), and `password`.

### 2. The Registration (Signup) Flow
When a user signs up via `POST /signup`:
1.  **Check for existence**: Query the DB (`User.findOne`) to ensure the email isn't already registered.
2.  **Hash the Password**: If the user is new, use `bcrypt.hash(password, 10)` to secure their plain-text password.
3.  **Save the User**: Create a new user document in the database containing the hashed password instead of the raw password.

### 3. The Login Flow
When a user logs in via `POST /login`:
1.  **Find the User**: Query the DB by email. If the user isn't found, return an error.
2.  **Compare Passwords**: Use `bcrypt.compare(enteredPassword, user.password)`. This securely checks if the provided password matches the stored hash.
3.  **Generate JWT**: If the passwords match, sign a JWT containing the user's email or ID using `jwt.sign()`.
4.  **Send Token**: Return the JWT to the client.

### 4. The Protected Route Flow
Once logged in, the client sends the JWT in the `Authorization` header for any secure requests.
*   The `authMiddleware` intercepts the request, verifies the token, and attaches the decoded payload to `req.user`.
*   The protected route (e.g., `GET /profile`) then accesses `req.user` to return personalized data.

## Quick Revision (Interview Prep)

*   **Never Store Plain-Text Passwords**: The most critical rule of backend authentication. Always hash before saving (`bcrypt`).
*   **Stateless Authentication**: JWTs allow our server to be stateless. We don't need to keep a session running in server memory; the token itself contains all the proof needed that the user is authenticated.
*   **The Complete Auth Cycle**: Client signs up (Server hashes & saves DB) -> Client logs in (Server compares hash & issues JWT) -> Client requests data (Server middleware verifies JWT).
*   **Database uniqueness**: Enforcing `unique: true` on the email field in the Mongoose schema acts as a secondary safety net against duplicate registrations.

## Questions Practiced

1.  **Setup User Model**: Create a Mongoose schema and model for a User (name, email, password).
2.  **Implement Signup Endpoint**: Create a `POST /signup` route that checks if a user exists, hashes their password, and saves the new user to the MongoDB database.
3.  **Implement Login Endpoint**: Create a `POST /login` route that retrieves a user by email, compares the provided password with the stored hash using `bcrypt`, and returns a signed JWT if successful.
4.  **Protect Profile Endpoint**: Implement a `GET /profile` endpoint guarded by `authMiddleware` that returns the user's details based on the provided JWT.
