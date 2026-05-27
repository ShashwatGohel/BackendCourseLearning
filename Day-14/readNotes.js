const fs = require('fs');
const expres = require("express")
app.get("/notes", (req,res)=>{
    fs.readFile('notes.txt', 'utf-8', (err, data) => {

    if(err){
        res.status(400).send({
            success: false,
            message: "File Not Found"
        })
    }

    console.log(data);
    res.send({
        succes: true,
        message:"File Found",
        data:data
    })
})

});