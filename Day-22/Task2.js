const express = require('express');
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/practiseDB')
.then(() => {
    console.log('MongoDB Connected Successfully');
})
.catch((error) => {
    console.log(error);
});

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,},
    email:{
        type:String,
        required:true,
        unique:true},
    password:{
        type:String,
        required:true}
})

const User = mongoose.model("User",userSchema)

const authMiddleware = async(req,res,next)=>{
    try{
        const token = await req.headers.authorization
        const actualtoken = token.split(" ")[1]
        const decoded = jwt.verify(actualtoken,"secretkey")
        req.user = decoded
        next()
    }
    catch(error){
        res.send({
            success:false,
            message:"Token Invalid"
        })
    }
}

app.post('/signup',async(req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email})
        if(user){
            const hashedPassword = await bcrypt.hash(
                req.body.password,
                10
            );
            const user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            });
        }
        res.send({
            success:true,
            message:"User Entered and Saved",
            data:user
        })
    }
    catch(error){
        res.send({
            success:false,
            message:"Failed User Creation"
        })
    }
})

app.post('/login',async(req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email})
        if(user){
            const isMatched = await bcrypt.compare(req.body.password , user.password  )
            if(isMatched){
                const token = jwt.sign({email:user.email},"secretkey")
                res.send({
                    success: true,
                    message: "User Logged In",
                    token: token
                });
            }
            else{
                res.send({
                    success:false,
                    message:"Password not Matched"
                })
            }
        }
        else{
            res.send({
                success:false,
                message:"User Not Found"
            })
        }
    }
    catch(error){
        res.send({
            success:false,
            message:"Failed User login"
        })
    }
})

app.get('/profile',authMiddleware,async(req,res)=>{
    res.send({
        success:true,
        message:"Profile Details Displayed",
        user:req.user
    })
})
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});     