const validateMiddleware = (req,res,next)=>{
    const {id ,title ,author ,price} = req.body
    if(!id||!title||!author||!price){
        return res.status(404).send({
            message: "Enter All the Details"
        })
    }
    next()
}
module.exports = validateMiddleware