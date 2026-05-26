const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
let products = [
   {
      id: 1,
      name: "Laptop"
   },
   {
      id: 2,
      name: "Phone"
   }
];
app.get('/', (req, res) => {
  res.send('Server Running Successfully 🚀');
});

app.put('/products/:id',(req,res)=>{
    const product = products.find(product=>product.id == req.params.id)
    if(product){
        product.name = req.body.name
        res.send({
            message: "Product Found",
            products
        })
    }
});
app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});