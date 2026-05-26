let orders = [
   {
      id: 1,
      item: "Laptop"
   }
];
const getOrders = (req,res)=>{
    res.send({
        success: true,
        message: "Orders fetched successfully",
        data: orders
    })
}

const createOrders = (req,res)=>{
    const newOrder = req.body
    orders.push(newOrder)
    res.send({
        success: true,
        message: "Orders Added Successfully",
        data: orders
    })
}
module.exports = {
    getOrders,createOrders
};