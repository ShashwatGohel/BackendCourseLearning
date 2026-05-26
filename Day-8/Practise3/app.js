const express = require('express');
const app = express();
const routes = reqiure("./Route.js")
app.use("/users",userRoute)
app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});