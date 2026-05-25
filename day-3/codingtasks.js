const fs = require("fs")
fs.writeFile("data.txt","Coding Task",(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("File Created");
    }
})
fs.readFile("data.txt","utf-8",(error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
})
fs.appendFile("data.txt","\nI am Learning Backend",(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("content Appended");
    }
})
fs.unlink("data.txt",(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("File deleted");
    }
})