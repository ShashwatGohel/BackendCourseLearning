const fs = require("fs")
fs.writeFile("data.txt","Hello , I am learning Backend Engineering",(error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("Changes Made")
    }
});