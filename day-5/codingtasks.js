const express = require("express");
const app = express();
app.use(express.json());
app.use((req,res,next)=>{
    console.log("URL : ", req.url);
    console.log("Method : ", req.method);
    next();
})
app.get("/", (req,res)=>{
    res.send("Welcome to Products API");
});
app.get("/products",(req,res)=>{
    res.json([
  {
    "id": 1,
    "name": "Laptop"
  },
  {
    "id": 2,
    "name": "Phone"
  }
])
});
app.post("/product",(req,res)=>{
    console.log(req.body);
    console.log(req.body.name);
    res.status(201).json({
        message: "Product Created Successfully",
        product: req.body
    })
});
app.get("/product/:id",(req,res)=>{
    const productid = req.params.id;
    res.send(`Product id : ${productid}`);
});
app.get("/filter",(req,res)=>{
    const searchName = req.query.category;
    res.send(`Searching For : ${searchName}`);
});

app.listen(3000);