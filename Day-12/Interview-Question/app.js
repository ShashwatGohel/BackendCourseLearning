const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;
const bookRoute = require("./bookRoutes")
const loggerMiddleware = require("./loggerMiddleware")
app.use(loggerMiddleware)
app.use("/book", bookRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});