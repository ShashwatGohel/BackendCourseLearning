const http = require("http");
const server = http.createServer((req,res)=>{
    console.log("URL : " , req.url);
    console.log("Method : " , req.method);
    if(req.url === "/user" && req.method === "GET"){    
        const user = {
            name: "Shashwat",
            age: 20,
            role: "Student"
        }
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify(user));
    }
})
server.listen(3000);