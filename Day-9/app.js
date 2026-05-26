const express = require('express');
const app = express();
const getCourses = require("./courseRoute")
app.use("./courses",getCourses)

app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});