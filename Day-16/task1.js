const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/practiseDB')
.then(() => {
    console.log('MongoDB Connected Successfully');
})
.catch((error) => {
    console.log(error);
});

app.get('/', (req, res) => {
    res.send('Server Running Successfully');
});
const productSchema = new mongoose.Schema({
    id:Number,
    prodName:String,
    price:Number
})

const Product = mongoose.model(
    "Product",
    productSchema
)
app.get('/getProducts',async(req,res)=>{
    try{
        const product = await Product.find()
        res.status(200).send({
            success:true,
            message:"Products Displayed Correctly",
            data:product
        })
    }
    catch(error){
        res.status(500).send({
            success:false,
            message:"Products Not Displayed"
        })
    }
})
app.get('/getProducts/:id',async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id)
        if(product){

            res.send({
                success:true,
                message:"Product Found",
                data:product
            })

        }
        else{

            res.send({
                success:false,
                message:"Product Not Found"
            })

        }

    }
    catch(error){
        res.send({
            success:false,
            message:"Product Not Found"
        })
    }
})

app.put('/updateproducts/:id',async(req,res)=>{
    try{
        const product = await Product.updateOne({_id:req.params.id},{prodName:req.body.prodName})
        res.send({
            success:true,
            message:"product Name Updated",
            data:product
        })
    }
    catch(error){
        res.send({
            success:false,
            message:"No Product Found"
        })
    }
})

app.delete('/deleteProducts/:id',async(req,res)=>{
    const product = await Product.deleteOne({_id:req.params.id})
    try{
        res.send({
            success:true,
            message:"Product Deleted",
            data:product
        })
    }
    catch(error){
        res.send({
            success:false,
            message:"Product Not Deleted"
        })
    }
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port 3000`);
});