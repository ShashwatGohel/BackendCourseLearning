# Day 27: Roles in Schema & Role-based Authorization

## Detailed Learning Guide

Today we learned how to add role-based access control to a Node.js + Mongoose app. The key ideas are:

- Add a `role` field to the user schema (with a sensible default, e.g. `"user"`) so each user has a role attached.
- Include the user's `role` inside the JWT payload when signing tokens, so downstream middleware can make authorization decisions from the decoded token.
- Implement middleware that checks `req.user.role` and either allows the request to continue or rejects it (example: allow only `admin`).
- Create a flexible `authorize` middleware factory that accepts a single role or an array of roles and returns middleware that validates membership.

## Quick Revision (Interview Prep)

- `role` in schema: `role: { type: String, default: 'user' }` ensures every user has a role.
- Sign JWT with role: `jwt.sign({ id: user.id, email: user.email, role: user.role }, secretKey)`.
- Simple role middleware:

```javascript
const roleMiddleware = (req, res, next) => {
  if (req.user.role === "admin") return next();
  return res.status(403).json({ success: false, message: "Access Denied" });
};
```

- Flexible authorizer (single or multiple roles):

```javascript
const authorize = (allowed) => (req, res, next) => {
  const role = req.user.role;
  if (Array.isArray(allowed) ? allowed.includes(role) : role === allowed)
    return next();
  return res.status(403).json({ success: false, message: "Invalid Access" });
};

// Usage examples:
// app.delete('/user/:id', authmiddleware, authorize('admin'), deleteUser)
// app.delete('/user/:id', authmiddleware, authorize(['admin','teacher']), deleteUser)
```

## Implementation Notes

- Ensure `authmiddleware` runs before role checks so `req.user` is populated from the verified JWT.
- Prefer HTTP status `403 Forbidden` for denied access instead of a generic success=false payload.
- Keep JWT payload minimal; do not store sensitive data in the token.

## Questions Practiced

- Add a `role` field to a Mongoose schema and set a default value.
- Sign and verify JWTs that include non-sensitive user metadata (like role).
- Write middleware that enforces role-based access and test routes for single and multiple-role requirements.

This README summarizes the main takeaways from `AddingRoletoSchema.js` and mirrors the format used across other Day README files.
