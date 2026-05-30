// Master Error Handler : Global Error Middleware
app.use((err,req,res,next)=>{
    res.status(err.statusCode || 500).send({
        success:false,
        message:err.message
    });
});
//Route error reach the master Error Middleware
app.get('/users', async(req,res,next)=>{
    try{
        const users =await User.find();
        res.send(users);
    }
    catch(error){
        next(error);
    }
});

//throwing an Error
if(!user){
   throw new Error("User Not Found")
}

//custom error throwing with Status code 
//AppError class to inherit teh Main Error Class 
class AppError extends Error {
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}
//Error code with the  Custom Status code Error throwing
new AppError("User Not Found",404)

//Sample Code with Error Throwing with Routes
app.get('/users/:id',async(req,res,next)=>{
    try{
        const user = await Users.find(req.params.id)
        if(!user){
            throw new AppError("User Not Found", 404)
        }
        res.send(user)
    }
    catch(error){
        next(error)
    }
})
