# Day 20: Authentication Basics (JWT and Password Hashing)

## Detailed Learning Guide

Today we explored the foundational elements of modern web authentication: **JSON Web Tokens (JWT)** and **Password Hashing**. Security is paramount in backend development, and plain text passwords should never be stored in a database.

### Password Hashing (bcryptjs)
Hashing is a one-way mathematical function that converts a password into an unreadable string of characters. Unlike encryption, hashing cannot be reversed. 
We use **`bcryptjs`**, a library that automatically handles hashing and adds a "salt" (random data) to the password before hashing it. This protects against rainbow table attacks.
*   **Hashing**: `bcrypt.hash(password, saltRounds)`. The `saltRounds` (usually 10) dictates how computationally expensive it is to generate the hash. 
*   **Comparing**: When a user logs in, we can't reverse the database hash to see if it matches what they typed. Instead, we hash what they typed and compare the two hashes using `bcrypt.compare(enteredPassword, storedHash)`.

### JSON Web Tokens (JWT)
A JWT is a secure way to transmit information between parties as a JSON object. In authentication, once a user logs in successfully, the server gives them a JWT. The user then sends this token back to the server with subsequent requests to prove they are authenticated.
*   **Structure**: A JWT has three parts: Header (algorithm), Payload (the data/user info), and Signature (verifies the token wasn't altered).
*   **Signing a Token**: We use `jwt.sign(payload, secretKey)` to generate a token. The `secretKey` is a private string only the server knows.
*   **Verifying a Token**: We use `jwt.verify(token, secretKey)` to ensure the token is valid and extract the payload.

## Quick Revision (Interview Prep)

*   **Hashing vs. Encryption**: Encryption is two-way (can be decrypted with a key). Hashing is one-way (cannot be reversed). Passwords should ALWAYS be hashed.
*   **Salting**: Adding random strings to a password before hashing to ensure identical passwords produce completely different hashes.
*   **JWT Payload**: Do not put sensitive information (like passwords) inside a JWT payload, as it is only base64 encoded, not encrypted. Anyone can decode it. The signature just ensures it hasn't been *tampered* with.
*   **bcrypt.hash()**: Returns a promise that resolves to the hashed password string.

## Questions Practiced

1.  **Generate a JWT Token**: Create an endpoint that receives a hardcoded email and password. If they match the expected credentials, sign and return a JWT containing the user's email.
2.  **Hash a Password**: Write a script using `bcryptjs` that takes a plain text password (e.g., "123456") and a salt round of 10, then logs the resulting hashed password. Try this using ES Modules, CommonJS (async/await), and Promise syntax.
3.  **Verify a Token**: Write a script to decode and verify a token using the server's secret key.
4.  **Match Passwords**: Write a script that takes a plain-text password and compares it against a hashed string using `bcrypt.compare()`.
