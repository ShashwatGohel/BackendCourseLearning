const express = require('express');
const app = express();
const OrderRoutes = require("./orderRoutes")
app.use(express.json());

app.use("/order",OrderRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});