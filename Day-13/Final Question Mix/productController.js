const products = require("./data")

const getproducts = async (req, res) => {
    try{
        await newPromise((resolve)=>{
            setTimeout(resolve, 3000);
            res.send({
                success: true,
                message: "Products Displayed Correctly",
                data: products
            })
        })
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};

module.exports = {
    getproducts
};