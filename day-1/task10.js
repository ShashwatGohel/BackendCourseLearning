const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        if(req.method === "GET"){
            res.end("GET Request Received")
        }
        else{
            res.end("Only GET Allowed")
        }
    }
})
server.listen(3000,()=>{
    console.log("server listens on 3000");
})