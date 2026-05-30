const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtokens');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

//MongoDB Connection

mongoose.connect('mongodb://127.0.0.1:27017/practiseDB')
.then(() => {
    console.log('MongoDB Connected Successfully');
})
.catch((error) => {
    console.log(error);
});

//MOngoDB Schema and Model

const userSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String
})
const user = mongoose.model("User", userSchema)

//Authentication Middleware

const authMiddleware = async(req,res,next)=>{
    try{
        const token  = req.headers.authorization
        const actualtoken = token.split(" ")[1]
        const decoded = jwt.verify(actualtoken,"secretkey")
        req.user = decoded
        next()
    }
    catch(error){
        res.send({
            success:false,
            message:"Jwt Token Failed Creation"
        })
    }
}

// Signup Route

app.post('/signup',async(req,res)=>{
    try{
        const existingmail = await User.findOne({email:req.body.email})
        if(existingmail){
            res.send({
                success:false,
                message:"Enter different email, Email already exists !"
            })
        }
        const hashPassword = await bcrypt.hash(user.password, 10)
        const user = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:hashPassword
        })
        res.send({
            success:true,
            message:"User Created Successfully",
            data:user
        })
    }
    catch(error){
        res.send({
            success:false,
            message:"Failed Creating User"
        })
    }
})

// Login Route - POST
//Find user
//Compare password
//Generate JWT
// Login Route - POST
// Find user
// Compare password
// Generate JWT

app.post('/login', async(req,res)=>{
    try{
        const existingUser = await User.findOne({
            email:req.body.email
        });
        if(!existingUser){
            return res.send({
                success:false,
                message:"User Not Found"
            });
        }
        const comparePassword = await bcrypt.compare(
            req.body.password,
            existingUser.password
        );
        if(!comparePassword){
            return res.send({
                success:false,
                message:"Invalid Password"
            });
        }
        const token = jwt.sign(
            { email: existingUser.email },
            "secretkey"
        );
        res.send({
            success:true,
            message:"JWT Generated Successfully",
            token:token
        });
    }
    catch(error){
        res.send({
            success:false,
            message:"JWT Generation Failed"
        });
    }
});

//Get Profile - Protected Route(AuthMiddleware Implemented)
app.get('/profile', authMiddleware,async(req,res)=>{
    try{
        const existingUser = await User.findById({email:req.user.email})
        if(existingUser){
            res.send({
                success:true,
                message:"User Found",
                data:existingUser
            })
        }
        else{
            req.send({
                success:false,
                message:"User Not Found"
            })
        }
    }
    catch(error){
        res.send({
            success:false,
            message:"User Not Found"
        })
    }
})

//Return All the Users 
app.get('/users',authMiddleware,async(req,res)=>{
    try{
        const users = await User.find()
        res.send({
            success:true,
            message:"Users Fetched Successfully",
            data:users
        });
    }
    catch(error){
        res.send({
            success:false,
            message:"Failed To Fetch Users"
        });
    }
});
// Server Listening Port

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});

