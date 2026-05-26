const express = require('express');
const app = express();
const getProducts = require("./productRoute")
app.use("/products",getProducts)

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});