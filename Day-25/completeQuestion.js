const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    category: String
});

const Products = mongoose.model("Products", productSchema);

app.get('/products', async(req, res) => {
    try {

        const { search, category, maxPrice, page, limit } = req.query;

        const query = {};

        if(search){
            query.name = {
                $regex: search,
                $options: "i"
            };
        }

        if(category){
            query.category = category;
        }

        if(maxPrice){
            query.price = {
                $lt: Number(maxPrice)
            };
        }

        const pageNumber = Number(page) || 1;
        const limitNumber = Number(limit) || 10;

        const products = await Products.find(query)
            .skip((pageNumber - 1) * limitNumber)
            .limit(limitNumber);

        res.send({
            success: true,
            count: products.length,
            data: products
        });

    }
    catch(error){
        res.send({
            success: false,
            message: error.message
        });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

// const products = await Products.find(query);
// Explanation: Instead of making multiple database calls like find(category), 
// find(search), and find(price), we first build a single query object 
// and then execute Products.find(query). MongoDB automatically combines all conditions 
// using AND and fetches the required data in one optimized database query.