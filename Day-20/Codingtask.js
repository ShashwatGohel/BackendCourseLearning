const express = require('express');
const readline = require('readline-sync');
const jwt = require("jsonwebtoken")
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Server Running Successfully');
});



app.post('/login',async(req,res)=>{
    const { email, password } = req.body;
    if(email==="shashwat.g@ahduni.edu.in"&&password === "12345678"){
        const token = jwt.sign({email},"secret")
        return res.send({
            success:true,
            data: token
        })
    }
    res.send({
        success:false,
        message:"Token Generation Failed"
    })
    
})


app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});