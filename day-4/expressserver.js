const express = require("express");
const app = express();
app.use((req,res,next)=>{
    console.log("Middleware Running");
    next();
});
app.get("/",(req,res)=>{
    res.end("Home Page");
});
app.get("/user",(req,res)=>{
    res.json({
        id:1,
        name:"Shashwat"
    })
})
app.listen(3000,()=>{
    console.log("server listens on 3000");
});