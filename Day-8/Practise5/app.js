const express = require('express');
const app = express();
const getCategory = require("./categoryRoute")
app.use("/category", getCategory)
app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});