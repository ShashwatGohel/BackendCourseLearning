const express = require('express');
const app = express();
const userRoute = require("./userRoute")
app.use(express.json());
app.use("/user",userRoute);
app.use((req,res,next)=>{
    console.log("URL : ", req.url);
    console.log("Method : ", req.method);
    next()
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});