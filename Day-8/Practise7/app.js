const express = require('express');
const app = express();
const getComments = require("./commentRoute")
app.use("/comments", getComments)
app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});