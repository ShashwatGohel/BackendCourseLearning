const express = require("express")
const fs = require("fs")
appendFile.post("/notes",(req,res)=>{    
    fs.writeFile('notes.txt',req.body.note, (err) => {
    
        if(err){
            return res.status(400).send({
                success: false,
                message: "File Error"
            })
        }
        
        console.log('File written successfully');
        res.send({
            success: true,
            message: "notes Saved"
        });
    
    });
})
