const express = require("express");
const app = express();
app.use((req,res,next)=>{
    console.log("Request Received");
    next();
})
app.get("/",(req,res)=>{
    res.send("Home Page");
});
app.get("/about",(req,res)=>{
    res.send("About Page");
});
app.get("/contact",(req,res)=>{
    res.send("Contact Page");
});
app.get("/user/:id",(req,res)=>{
    res.send(req.params.id);
});
app.get("/search",(req,res)=>{
    res.send(req.query.name)
})
app.get("/user",(req,res)=>{
    res.json({
        id:1,
        name:"Shashwat",
        role:"Backend Engineer"
    })
});
app.listen(3000,()=>{
    console.log("Server Listens on Port 3000");
})