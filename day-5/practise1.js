const express = require("express");
const app = express();
app.use(express.json());
app.get("/students",(req,res)=>{
    res.send([
  {
    "id": 1,
    "name": "Peter"
  }
])
});
app.post("/students",(req,res)=>{
    console.log(req.body);
    console.log(req.body.name);
    res.json({
   "message": "Student Added",
   "student": req.body.name
})
});
app.listen(3000);