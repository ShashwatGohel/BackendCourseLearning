const express = require('express');
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;
app.use((req,resizeBy,next)=>{
    console.log("URL : ", req.url);
    console.log("Method : ", req.method);
    next()
});
const employeeRoutes = require("./employeeRoutes")
app.use('/employees',employeeRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});