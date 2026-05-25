const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res)=>{
    console.log("URL : " , req.url);
    console.log("METHOD : " , req.method);

    if(req.url === "/" && req.method === "GET"){
        res.end("Welcome to the Notes API");
    }
    else if(req.url === "/write" && req.method === "GET"){
        fs.writeFile("notes.txt","Learning Backend",(error)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log("File Created Successfully");
            }
        })
    }
    else if(req.url === "/read" && req.method === "GET"){
        fs.readFile("notes.txt","utf-8",(error,data)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log(data);
            }
        })
    }
    else if(req.url === "/append" && req.method === "GET"){
        fs.appendFile("notes.txt","\n Node.js is Powerfull",(error)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log("Content Added");
            }
        })
    }
    else{
        res.statusCode=404;
        res.end("No Page Found");
    }
})
server.listen(3000);