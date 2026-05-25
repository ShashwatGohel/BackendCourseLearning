const express = require("express");
const app = express();
app.use((req,res,next)=>{
    console.log("URL : " , req.url);
    console.log("Method : " , req.method);
    next();
});
app.get("/",(req,res)=>{
    res.send("Welcome to express API");
});
app.get("/user",(req,res)=>{
    res.json([
    {
        id: 1,
        name: "Shashwat"
    },
    {
        id: 2,
        name: "Peter"
    }
]);
});

app.get("/user/:id", (req, res) => {

    const userId = req.params.id;

    res.send(`User ID : ${userId}`);

});

app.get("/search",(req,res)=>{
    const searchName = req.query.name;
    res.send(`Searching for ${searchName}`);
});

app.listen(3000,()=>{
    console.log("Server Listens on port 3000");
})