const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const getRoutes = require("./userRountes")
app.use((req,res,next)=>{
    console.log("URL : ", req.url);
    console.log("Method : ", req.method);
    next()
});
app.use("/users",getRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});