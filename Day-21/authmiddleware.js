// Auth Middleware with JWT token
const jwt = require("jsonwebtoken")
const authMiddleware = (req,res,next)=>{
    try{
        const token = req.headers.authorization
        const actualtoken = token.split(" ")[1]
        const decoded = jwt.verify(actualtoken,"secretkey")
        req.user = decoded
        next()
    }
    catch(error){
        res.send({
            success:false,
            message:"Unauthorized"
        });
    }
}
// Protected Route
app.get('./dashboard',authMiddleware,(req,res)=>{
    res.send({
        success:true,
        message:"Welcome to the dashboard"
    })
})

//Access User Info 
app.get('/profile',authMiddleware,(req,res)=>{
    res.send({
        user:req.user
    });
})

//req.user stores the user data for the later uses