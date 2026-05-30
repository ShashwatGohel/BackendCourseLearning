const multer = require('multer')
const express = require("express")
const app = express();
app.use(express.json())
const storage = multer.discStorage({
    destination:function(req,file,cb){
        cb(null,'/uploads')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+"_"+file.originalname)
    }
})
const upload= multer({storage})
app.post('/uploads',upload.single("images"),(req,res)=>{
    res.send({
        success:true,
        message:"File Saved Properly",
        file:req.file
    })
})

app.listen(3000)