const express = require('express');
const app = express();
const getAuthors = require("./authorRoute");
app.use(express.json());
app.use("/author",getAuthors);

app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});