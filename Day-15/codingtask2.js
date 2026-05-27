const express = require('express');
const mongoose = require("mongoose")
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://127.0.0.1:27017/productDB").then(()=>{
    console.log("MongoDB Connected Successfully")
})

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    category:String
})

const Product = mongoose.model(
    "product",
    productSchema
)

app.get('/', (req, res) => {

    res.send("MongoDB Connected Successfully");

});

app.post('/create-product',async(req,res)=>{
    try{
        const newProduct = new Product(req.body)

        await newProduct.save()

        res.send({
            success:true,
            message:"Product added Successfully",
            data:newProduct
        })
    }
    catch(error){

        res.status(500).json({
            success: false,
            message: "Error creating student",
        });

    }
})

app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});