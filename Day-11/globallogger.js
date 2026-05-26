const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
app.use((req,res,next)=>{
    console.log("URL : " , req.url)
    console.log("Method : " , req.method)
    next()
})

app.get('/',(req,res)=>{
    res.send("Home Page")
});
app.get('/user',(req,res)=>{
    res.send("User Created")
});
app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});