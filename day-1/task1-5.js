const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.url === "/" && req.method === "GET"){
        console.log("URL: ", req.url);
        console.log("Method: " , req.method);
        res.end("Welcome to my Backend Server");
    }
    else if(req.url === "/help" && req.method === "GET"){
        console.log("URL: ", req.url);
        console.log("Method: " , req.method);
        res.end("This is the help page");
    }
    else if(req.url === "/about" && req.method === "GET"){
        console.log("URL: ", req.url);
        console.log("Method: " , req.method);
        res.end("Wthis is the about page");
    }
    else if(req.url === "/contact" && req.method === "GET"){
        console.log("URL: ", req.url);
        console.log("Method: " , req.method);
        res.end("this is the contact page");
    }
    else if(req.url === "/time" && req.method === "GET"){
        const time = new Date();
        res.end(time.toString());
    }
    else{
        const statuscode = 404;
        res.end("Page not found");
        console.log(statuscode);
    }
})
server.listen(3000);