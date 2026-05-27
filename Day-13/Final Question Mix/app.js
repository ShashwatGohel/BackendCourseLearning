const express = require('express');
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;
const productRoutes = require("./productRoutes")
app.use("/products", productRoutes)
app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});