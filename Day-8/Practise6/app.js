const express = require('express');
const app = express();

const getTags = require("./tagsRoute")
app.use("/tags", getTags)
app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});