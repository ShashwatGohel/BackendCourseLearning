# Day 25: Filtering + Search + Pagination (Express + Mongoose)

## What I Practiced
Today I practiced a very common backend pattern for real APIs:
- **Filtering** with query params (example: `category`, `maxPrice`)
- **Searching** using MongoDB regex (`$regex`) for case-insensitive search
- **Pagination** using `.skip()` + `.limit()`
- Building a **single MongoDB query object** instead of multiple DB calls

Files:
- `completeQuestion.js` — combined search + filter + price + pagination in one endpoint
- `filter.js` — basic vs advanced filter examples (`$gt`, `$lt`)
- `pagination_api.js` — pagination formula with `.skip()` and `.limit()`
- `search_regexSearch.js` — simple search vs regex search

---

## Concepts (Medium Depth)

### 1) Filtering with Query Params
Filtering usually means narrowing results based on optional parameters:
- `/products?category=mobile`
- `/products?maxPrice=1000`

In code, you build a `query` object conditionally:
- if the param exists, add that condition
- if it doesn’t, don’t add anything (so it won’t filter on that field)

MongoDB operators you practiced:
- `$gt` (greater than)
- `$lt` (less than)

### 2) Searching with `$regex`
Exact search (`{ name: "Peter" }`) only matches exactly.

Regex search allows partial and case-insensitive matches:
- `{ name: { $regex: "pet", $options: "i" } }`

Notes:
- `$options: "i"` makes it case-insensitive.
- Regex search can be slower on large collections if not indexed carefully.

### 3) Pagination with `.skip()` and `.limit()`
Pagination prevents returning “everything” at once.

Common formula:
- `page = 1, limit = 10`  => skip 0, return 10
- `page = 2, limit = 10`  => skip 10, return next 10

Implementation:
- `skip((page - 1) * limit)`
- `limit(limit)`

### 4) One Optimized Query
Instead of doing multiple `find()` calls, you can combine filters into one query object and run:
- `Model.find(query)`

MongoDB will apply all conditions as an AND (combined filters) and fetch in one call.

---

## Endpoint Practiced
From `completeQuestion.js`:
- `GET /products`
  - optional params: `search`, `category`, `maxPrice`, `page`, `limit`
  - returns: `count` and `data`

Example requests:
- `/products?search=iphone`
- `/products?category=mobile&maxPrice=50000`
- `/products?page=2&limit=10`
- `/products?search=pro&category=laptop&page=1&limit=5`

---

## Interview-Style Questions Practiced
- How do you implement pagination in MongoDB/Mongoose?
- What is the difference between exact match search and regex search?
- How do you combine multiple optional filters into a single query?
- When would regex search become slow, and what can you do about it?

