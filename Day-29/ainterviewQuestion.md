# EXPRESS & MIDDLEWARE

## What is middleware and why do we need it?

Middleware is a function that runs during the request-response cycle in an Express app. It can inspect, modify, or terminate requests before they reach the route handler, and can also process responses. We need middleware to keep our code modular, reusable, and easy to maintain. It helps implement cross-cutting concerns like logging, authentication, validation, and error handling without duplicating code inside every route.

## What is the purpose of next()?

`next()` passes control to the next middleware function in the stack. If a middleware function does not call `next()`, the request will hang and the route handler will never execute. It is essential for chaining middleware together and for allowing Express to continue processing the request until a response is sent.

## Difference between app.use() and app.get()?

`app.use()` registers middleware for every HTTP method and can match a path prefix. It is typically used for general-purpose middleware like parsing JSON, logging, or authentication. `app.get()` registers a route handler only for the GET method and a specific route path. Use `app.use()` for middleware and `app.get()` for route-specific GET endpoints.

## What happens if next() is not called?

If `next()` is not called, Express stops processing the current request chain. The request will neither reach the next middleware nor the final route handler, and the client will usually time out waiting for a response. This makes `next()` critical whenever middleware is intended to pass control forward rather than ending the request immediately.

## Explain the complete middleware execution flow.

When a request comes in, Express evaluates all matching middleware in order. First, middleware registered with `app.use()` or a route-specific path is executed. Each middleware may modify `req` or `res`, then call `next()` to continue. If a handler sends a response, the chain ends. If an error occurs, it is passed to `next(error)` and Express routes execution to error-handling middleware. The flow is sequential and depends on registration order.

## How would you implement authentication middleware from scratch?

A simple authentication middleware verifies a token or session and populates `req.user`. Example:

```js
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token)
    return res.status(401).json({ success: false, message: "Unauthorized" });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};
```

This ensures that only authenticated requests continue and that downstream middleware or routes can trust the user identity.

## Difference between normal middleware and error middleware?

Normal middleware has the signature `(req, res, next)` and handles normal request processing. Error middleware has four arguments: `(err, req, res, next)`. It only runs when an error is passed to `next(error)` or thrown in an async context. Error middleware centralizes error formatting and response logic, while normal middleware handles validation, authentication, or request transformation.

# MVC

## What is MVC?

MVC stands for Model-View-Controller. It is an architectural pattern that separates application logic into three layers: Models handle data and database interaction, Views render output or responses, and Controllers manage incoming requests, coordinate between models and views, and return the final response. In backend apps, MVC helps organize code and keep responsibilities clear.

## Why not write everything inside app.js?

Putting all code inside `app.js` quickly becomes unmaintainable. It mixes routing, business logic, database access, and configuration in one file. Using separate folders and files makes the application easier to read, test, and scale, and it reduces the risk of bugs by keeping each responsibility isolated.

## Explain Login API using MVC architecture.

In MVC, a Login API works like this:

- Controller: receives email and password, validates input, and calls a service or model.
- Model/Service: fetches the user from the database, verifies the password, and returns the user object if valid.
- Controller: generates a JWT or session and sends back the response.
  This separation keeps the controller focused on handling HTTP details while the service/model handles authentication logic.

## Difference between Routes and Controllers?

Routes define the URL structure and HTTP methods used by the API. Controllers contain the actual logic executed when those routes are hit. In other words, routes map requests to controller functions, and controllers implement what happens after the route is matched.

## Controller vs Service Layer?

The controller is responsible for HTTP interaction: reading request data, calling business logic, and sending responses. The service layer contains reusable business rules and operations that are independent of HTTP. This separation improves testability and allows controllers to stay thin and focused on request handling.

## Advantages of MVC in large-scale applications?

MVC organizes code into clear sections, making it easier for multiple developers to work together. It improves maintainability by isolating concerns, simplifies testing, and allows features to grow without turning the codebase into a monolithic file. MVC also enables reuse of business logic across different interfaces, such as REST APIs and admin dashboards.

# MONGODB + MONGOOSE

## Difference between Collection and Document?

A MongoDB collection is like a SQL table: it stores multiple records. A document is like a row in that table: a single JSON-like object inside a collection. Collections group documents, and documents hold the actual data.

## What is a Schema?

In Mongoose, a schema defines the shape of documents in a collection. It declares the fields, data types, default values, and validation rules. A schema is a blueprint that tells Mongoose how to structure and validate documents.

## What is a Model?

A model is a compiled constructor created from a schema. It provides an interface for creating, reading, updating, and deleting documents in the corresponding MongoDB collection. Models are the primary way to interact with the database in Mongoose.

## Difference between find(), findOne() and findById()?

`find()` returns an array of documents matching a filter. `findOne()` returns the first matching document or `null`. `findById()` is a shortcut for finding a document by its `_id`; it returns a single document or `null` and is often more convenient when you already have the id.

## Schema vs Model?

A schema describes the structure and rules of the data. A model is the compiled object that uses the schema and provides methods to query and manipulate the database. Schema defines shape, model executes queries.

## Why use Mongoose?

Mongoose adds structure, validation, middleware, and object mapping to MongoDB. It simplifies database interactions by letting developers work with JavaScript objects instead of raw BSON, and it helps prevent invalid data from being stored.

## Why MongoDB over SQL for some applications?

MongoDB is often chosen when the data is document-oriented, schema can evolve frequently, and scalability is important. It is a good fit for flexible data models, nested objects, and when rapid development is required. SQL may be better for rigid schemas and complex relational queries.

## What happens internally when you call User.find()?

`User.find()` builds a MongoDB query from the filter, sends it to the database driver, and returns a promise. MongoDB executes the query against the collection, retrieves the matching documents, and then Mongoose converts them into model instances if necessary.

## Explain how Mongoose communicates with MongoDB.

Mongoose uses the MongoDB Node.js driver under the hood. It creates a connection pool, translates model methods into database commands, executes queries over the driver, and maps returned BSON documents into JavaScript objects.

# CRUD APIs

## What is CRUD?

CRUD stands for Create, Read, Update, Delete. It represents the four basic operations for managing data in an application.

## Which HTTP methods are used for CRUD?

- Create: POST
- Read: GET
- Update: PUT or PATCH
- Delete: DELETE

## Difference between updateOne() and findByIdAndUpdate()?

`updateOne()` updates the first document matching a filter and returns an operation result, not the updated document by default. `findByIdAndUpdate()` finds a document by `_id`, updates it, and can return the updated document if `new: true` is set.

## Difference between deleteOne() and findByIdAndDelete()?

`deleteOne()` deletes the first document matching a filter and returns the result of the operation. `findByIdAndDelete()` deletes a document by `_id` and can return the deleted document.

## Which Mongoose methods return documents and which return operation results?

Methods like `findOne()`, `findById()`, and `find()` return documents. Methods like `updateOne()`, `deleteOne()`, and `insertMany()` return operation result objects describing how many documents were affected.

## Design Product CRUD APIs.

A Product CRUD API typically includes:

- `GET /products` to list products
- `GET /products/:id` to view one product
- `POST /products` to create a new product
- `PUT /products/:id` or `PATCH /products/:id` to update a product
- `DELETE /products/:id` to remove a product
  Each route should validate input, handle missing resources, and return appropriate status codes like `201` for creation and `404` for not found.

# JWT

## What is JWT?

JWT stands for JSON Web Token. It is a compact token format used to securely transmit claims between parties. A JWT contains a header, payload, and signature.

## Why do we use JWT?

JWT is used for stateless authentication. It allows the server to verify user identity without storing session state, and it can carry small amounts of trusted user data in the token payload.

## Difference between jwt.sign() and jwt.verify()?

`jwt.sign()` creates a token from a payload and signs it with a secret or private key. `jwt.verify()` checks that a token is valid and untampered, and returns the decoded payload if the signature is correct.

## What is Stateless Authentication?

Stateless authentication means the server does not keep session state between requests. Instead, each request carries authentication data, typically in a JWT, and the server verifies it on every request.

## What should be stored inside JWT?

JWT should store non-sensitive claims such as user id, email, and role. Do not store passwords or private data. Keep the payload minimal and use the signature to verify authenticity.

## Explain complete JWT authentication flow.

In the flow, the user logs in with credentials. The server verifies them and issues a JWT signed with a secret. The client stores this token and sends it with future requests, usually in the Authorization header. The server validates the token, extracts the user identity, and allows access if valid.

## JWT vs Session Authentication?

Session authentication stores state on the server, typically using a session store and session ID cookie. JWT is stateless and stores the authentication claims in the token itself. JWT scales better because no server-side session storage is needed, but sessions can be easier to invalidate centrally.

## Why is JWT scalable?

JWT is scalable because the server does not need to keep session data in memory or a shared store. Each request is self-contained, so multiple servers can validate tokens independently as long as they share the secret or public key.

# AUTHENTICATION & AUTHORIZATION

## Authentication vs Authorization?

Authentication verifies who the user is. Authorization determines what the authenticated user is allowed to do. In short, authentication is identity, authorization is permission.

## What is a Protected Route?

A protected route is an endpoint that requires the user to be authenticated before access is granted. It usually runs auth middleware first and returns `401` or `403` if the user is not allowed.

## What is authMiddleware?

`authMiddleware` is middleware that checks whether a request contains valid authentication credentials, such as a JWT. It verifies the token, populates `req.user`, and either calls `next()` or rejects the request.

## How is req.user created?

`req.user` is typically created by authentication middleware after verifying a token or session. The middleware decodes the user identity from the token or session store and assigns it to `req.user` for downstream handlers.

## Why should authorization happen after authentication?

Authorization relies on knowing the user identity and roles. If a request is not authenticated, there is no verified user to authorize. Authentication must happen first so authorization can make decisions based on a trusted identity.

## Design Admin-only access system.

An admin-only system uses authentication middleware to verify the user, then a second authorization middleware to check the role. For example:

```js
const requireAdmin = (req, res, next) => {
  if (req.user?.role === "admin") return next();
  return res.status(403).json({ success: false, message: "Forbidden" });
};
```

Protected routes use both `authMiddleware` and `requireAdmin`.

## Explain Role Based Access Control (RBAC).

RBAC assigns permissions to roles and users are granted access based on their role. Instead of checking individual permissions per user, the application verifies whether the user has a role like `admin`, `editor`, or `user`, and then allows or denies actions accordingly.

# BCRYPT

## Why hash passwords?

Passwords are hashed so they cannot be read if the database is compromised. Hashing helps protect user credentials by transforming the password into a one-way value that cannot be reversed.

## What is bcrypt?

bcrypt is a password hashing library that adds salt and multiple rounds of hashing to produce a secure hash. It is designed to be slow enough to resist brute-force attacks.

## bcrypt.hash() vs bcrypt.compare()?

`bcrypt.hash()` generates a secure hash from a plain text password. `bcrypt.compare()` checks whether a plain text password matches a hashed password by hashing the plain text and comparing the result.

## Why not store plain text passwords?

Storing plain text passwords is unsafe because anyone with database access can read user passwords. It exposes users to account takeover and makes data breaches far more damaging.

## Hashing vs Encryption?

Hashing is one-way: you cannot recover the original input from the hash. Encryption is two-way: encrypted data can be decrypted with a key. Passwords should be hashed, not encrypted, because you should never need to recover the original password.

## Explain complete login flow using bcrypt and JWT.

In login flow, the user sends email and password. The server finds the user record, compares the submitted password with the stored bcrypt hash using `bcrypt.compare()`. If the password matches, the server issues a JWT with the user id and role and sends it to the client. The client uses that token for future authenticated requests.

# POPULATE & RELATIONSHIPS

## What is populate()?

`populate()` is a Mongoose method that replaces a referenced ObjectId with the actual related document. It lets you fetch related data in one query instead of manually querying both collections.

## What is ObjectId?

`ObjectId` is the default MongoDB identifier type for documents. It is a 12-byte value used as the `_id` field in MongoDB and is also used to reference documents between collections.

## What is ref?

`ref` is a Mongoose schema property that specifies the target model for a referenced field. It tells Mongoose which collection to look up when using `populate()`.

## Why use populate()?

Populate simplifies joins in MongoDB by automatically resolving references and embedding related documents into the query result. It reduces the need for manual follow-up queries.

## Populate vs SQL JOIN?

Populate is similar to a SQL JOIN because both retrieve related data from separate tables or collections. The difference is that populate is application-level and works with document references, while SQL JOIN is executed directly by the relational database.

## Design Student-Course relationship.

Define a `Student` schema with `courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]` and a `Course` schema. Use `Student.findById(id).populate('courses')` to get student details along with enrolled courses.

## Design Book-Author relationship.

Define a `Book` schema with `author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' }`. Use `Book.findById(id).populate('author')` to retrieve book details plus author information in one query.

# PAGINATION, SEARCH & FILTERING

## Why pagination?

Pagination improves performance by limiting how much data is returned in a single response. It reduces load on the server and database and provides a better user experience when browsing large datasets.

## What is skip()?

`skip()` tells MongoDB to skip a specified number of documents before returning results. It is used to move to later pages of a result set.

## What is limit()?

`limit()` restricts the number of documents returned by a query. It is used together with `skip()` to control page size.

## Explain pagination formula.

The pagination formula is usually `skip = (page - 1) * pageSize`. This calculates how many documents to skip before returning the current page.

## What is regex search?

Regex search uses a regular expression to match text fields. In MongoDB, you can use `{ name: { $regex: searchTerm, $options: 'i' } }` to perform case-insensitive text search.

## Design Product Search API with search, category filter, pagination.

A Product Search API might accept `search`, `category`, `page`, and `limit` query parameters. Build a filter object from category and regex search, then apply `skip((page-1) * limit)` and `limit(limit)` to the query. Return paged results and metadata like total count.

## Why does pagination improve performance?

Pagination limits the number of documents processed and sent over the network. It avoids fetching huge datasets at once and reduces memory usage on both the server and client.

# MULTER

## Why Multer?

Multer is middleware for handling multipart/form-data, which is used for file uploads. It parses incoming files and saves them to disk or memory so the server can process uploads.

## req.body vs req.file?

`req.body` contains text fields from a multipart form. `req.file` contains metadata for a single uploaded file when using `upload.single()`.

## req.file vs req.files?

`req.file` is used when a single file is uploaded. `req.files` is used when multiple files are uploaded and holds an array or object of file data.

## originalname vs filename?

`originalname` is the original name of the uploaded file from the client. `filename` is the name Multer assigns when saving the file on the server.

## Design Profile Picture Upload API.

Use `Multer` with `upload.single('photo')`. The route would authenticate the user, accept the file, store it in a folder or cloud storage, update the user record with the file path or URL, and return the uploaded file metadata.

## Explain complete file upload flow.

The client submits a multipart/form-data request. Multer parses the request and stores the file. The route handler receives `req.file`, validates it, and saves the file path or URL in the database. Finally, the server responds with success and file details.

# PROJECT STRUCTURE

## Why MVC?

MVC separates responsibilities, keeps code organized, and makes it easier to scale and maintain. It avoids putting all logic in one place and supports cleaner structure for growing projects.

## Why separate folders?

Separate folders group related concerns: controllers, routes, models, middleware, and utilities. This makes the project easier to navigate and helps developers find code faster.

## Why use .env?

`.env` stores configuration values like API keys, database URLs, and secrets outside the codebase. This keeps sensitive values secure and makes the app easier to configure across environments.

## What belongs inside config folder?

The config folder contains environment-specific settings, database connection logic, and reusable constants. It typically includes files for database setup, app settings, and third-party service configuration.

## Controller vs Service?

Controllers handle HTTP requests and responses. Services contain business logic and reusable operations. Keeping controllers thin and moving logic into services improves maintainability.

## Design backend structure for an E-commerce project.

A typical structure would include folders for `models`, `controllers`, `routes`, `services`, `middleware`, and `config`. Models define product, user, order schemas. Controllers handle endpoints. Services manage business rules like payment processing, inventory updates, and cart management.

# ERROR HANDLING

## Why try/catch?

`try/catch` is used to capture runtime errors during async operations and prevent crashes. It allows the application to handle failures gracefully and return meaningful responses.

## What is Error Middleware?

Error middleware is a special Express middleware that receives four arguments `(err, req, res, next)`. It centralizes error responses and formats all errors consistently.

## What is next(error)?

`next(error)` forwards an error to the next error-handling middleware. It tells Express that something went wrong so it can skip normal middleware and execute the error handler.

## Why centralized error handling?

Centralized error handling keeps response logic consistent and avoids repeating error formatting in every route. It makes debugging easier and allows global behavior like logging, custom status codes, and fallback messages.

## Explain complete error flow.

When a route throws an error or calls `next(error)`, Express skips the rest of the normal middleware chain and invokes error middleware. The error handler reads `err.message` and `err.statusCode`, then sends a structured error response. This ensures all errors are handled in one place.

## Why use custom errors?

Custom errors let you attach metadata such as HTTP status codes and error types. They make it easy to differentiate client errors from server errors and return clearer, more appropriate responses.

# TOP 15 QUESTIONS I WOULD BET MONEY ON ⭐

1. What is Middleware?

Middleware is a function that runs between receiving the request and sending the response in an Express app. It can inspect or modify `req` and `res`, handle authentication, validation, logging, and decide whether to continue by calling `next()`.

2. What is MVC?

MVC stands for Model-View-Controller. It separates concerns: Models manage data and database interaction, Views handle response formatting, and Controllers handle incoming requests and orchestrate the application logic.

3. Difference between find(), findOne(), and findById()?

- `find()` returns an array of documents matching a filter.
- `findOne()` returns the first matching document or `null`.
- `findById()` finds a document by its `_id` and is a convenient alias for `findOne({ _id: id })`.

4. What is JWT?

JWT is a JSON Web Token used for authentication. It is a signed token containing a header, payload, and signature that proves the token is valid and untampered.

5. jwt.sign() vs jwt.verify()?

- `jwt.sign()` creates a token from a payload and a secret.
- `jwt.verify()` checks the token signature and decodes the stored payload to verify the token’s authenticity.

6. What is Stateless Authentication?

Stateless authentication means the server does not store session data between requests. Each request contains authentication information, usually a JWT, and the server verifies it every time.

7. Authentication vs Authorization?

Authentication confirms the user’s identity. Authorization decides whether that authenticated user has permission to perform a specific action.

8. How does authMiddleware work?

`authMiddleware` usually reads a token from request headers, verifies it, extracts the user payload, attaches `req.user`, and calls `next()`. If verification fails, it returns a `401 Unauthorized` response.

9. Why bcrypt?

bcrypt is used to securely hash passwords. It adds salt and multiple hashing rounds so passwords are not stored in plain text and are hard to reverse-engineer in case of a breach.

10. Hashing vs Encryption?

Hashing is one-way and cannot be reversed; it is suitable for storing passwords. Encryption is two-way and can be decrypted with a key; it is suitable for data that must be recovered.

11. What is populate()?

`populate()` in Mongoose replaces referenced ObjectIds with actual documents from the related collection, letting you retrieve linked data in a single query.

12. Populate vs SQL JOIN?

Both fetch related data, but `populate()` is an application-level reference resolution in MongoDB/Mongoose, while SQL JOIN is executed directly inside a relational database.

13. Why Pagination?

Pagination improves performance by limiting the number of records returned in one response. It reduces memory usage and speeds up APIs when working with large datasets.

14. skip() and limit()?

- `skip()` moves past a number of documents in the query result.
- `limit()` restricts how many documents are returned.
  Together they implement paging.

15. Design Login API using JWT and bcrypt.

A login API should:

- receive email and password,
- find the user by email,
- compare the entered password with the stored bcrypt hash using `bcrypt.compare()`,
- if valid, sign a JWT with user ID and role,
- send the token back to the client.
  This flow keeps authentication secure and supports stateless requests.
