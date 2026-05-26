const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const loggerMiddleware = (req,res,next)=>{
    console.log("URL : ", req.url)
    console.log("Method : ", req.method)
    next()
}
const authMiddleware = (req,res,next)=>{
    let isloggedin = true
    if(isloggedin){
        next()
    }
    else{
        res.send("Unauthorized")
    }
};

app.get('/dashboard',loggerMiddleware,authMiddleware,(req,res)=>{
    res.send("Welcome to the Dashboard User")
})
app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});