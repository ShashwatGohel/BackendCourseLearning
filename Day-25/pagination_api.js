const express = require(express)
const app = express()
app.use(express.json())
 
app.get('/users',async(req,res)=>{
    const page = Number(req.query.page)||1;
    const limit = Number(req.query.limit)||5;
    const users = await User.find()
    .skip((page-1)*limit) //formulae with this we get .skip(5) .limit(5) i.e Skip the first 5 values and then give the next 5 values
    .limit(limit)
    res.send(users)
})