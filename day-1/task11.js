const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.url==="/login"){
        if(req.method === "GET"){
            res.end("Valid Login");
        }
        else{
            res.end("Invalid Method");
        }
    }
    else{
        req.statuscode = 404;
        req.end("404 not found")
    }
})