// Normal Filter() Method 
const product = await Product.find({category:req.query.category})

// Advanced Filter() Method
const product = Products.find({
    // greater than 
    price:{$gt:2000},

    // Less than
    price_new:{$lt:1000}
})

