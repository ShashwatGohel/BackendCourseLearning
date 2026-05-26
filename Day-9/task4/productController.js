let products = [
   {
      id: 1,
      name: "Laptop"
   }
];
const getProducts = (req,res)=>{
    res.send({
        success: true,
        message: "Prouducts Displayed",
        data: products
    })
};
const createProducts = (req,res)=>{
    const newProducts = req.body
    products = products.push(newProducts)
    res.send({
        success: true,
        message: "product Created Succesfully",
        data:products
    })
};
module.exports ={
    getProducts,
    createProducts
}