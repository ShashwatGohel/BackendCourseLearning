const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

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
            cuccess:false,
            message:"Token Verification failed"
        })
    }
}
app.post('/login',authMiddleware,(req,res)=>{
    const email =req.body.email
    const password = req.body.password
    if(email === "shashwat.g@ahduni.edu.in" && password === "12345678"){
        const token = jwt.sign({
            id:1,
            email:email
        },"secretkey")
    }
    else{
         res.send({
            success:false,
            message:"Invalid Credentials"
        });
    }
})
app.get('/dashboard',authMiddleware,(req,res)=>{
    res.send({
        success:true,
        message:"Welcome to Dashboard Page"
    })
})
app.get('/profile',authMiddleware,(req,res)=>{
    res.send({
        success:true,
        message:"The Profile Details are Displayed",
        user:req.user
    })
})
app.listen(PORT, () => {
    console.log(`Server running on port 3000`);
});