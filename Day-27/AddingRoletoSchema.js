// Adding Role into your Schema

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        default:"user"
    }
})

//Storing Role inside your JWT 
const user = {}
const token = jwt.sign({id:user.id , email:user.email,role:user.role},"secretkey")

// Role Middleware 
const roleMiddleware = (req,res,next)=>{
    if(req.user.role === "admin"){
        next()
    }
    else{
        res.send({
            success:false,
            message:"Access Denied"
        })
    }
}   

//Protected Admin Route
app.delete('/user/:id',authmiddleware,roleMiddleware,deleteUser)

// flexible Role Middleware 
const authorize = (role)=>{
    return (req,res,next)=>{
        if(req.user.role == role){
            next()
        }
        else{
            res.send({
                success:false,
                message:"Invalid Access"
            })
        }
    }
}

app.delete('/user/:id', authmiddleware, authorize(admin),deleteUser)

//For the case of Multiple roles 
const authorize = (role)=>{
    return (req,res,next)=>{
        if(req.user.role == role){
            next()
        }
        else{
            res.send({
                success:false,
                message:"Invalid Access"
            })
        }
    }
}

app.delete('/user/:id', authmiddleware, authorize(["admin","teacher"]),deleteUser)