const validateProductMiddleware = (req,res,next)=>{
    const {name,price} = req.body
    if(!name||!price){
        return res.status(400).send({
            message:"Enter Name and Price of teh Product"
        })
    }
    next()
};
module.exports = validateProductMiddleware;