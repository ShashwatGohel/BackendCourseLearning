const http = require("http");
const server = http.createServer((req,res)=>{
    console.log("URL : " , req.url);
    console.log("Method : " ,req.method);
    if(req.url ==="/user" && req.method === "GET"){
        const user = {
            name: "Shashwat",
            age: 20,
            role: "Student"
        }
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify(user));
    }
    else if(req.url ==="/posts" && req.method === "GET"){
        const post = {
            name:"Shashwat_Gohel",
            caption: "Beach view"
        }
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify(post));
    }
    else if(req.url ==="/comments" && req.method === "GET"){
        const comments = [
            {
                id:"Shashwat",
                comment: "Very good sunset"
            },
            {
                id: "Gram",
                comment: "very satisfing"
            }
        ]
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify(comments));
    }
    else{
        res.statusCode = 404;
        res.end("404 not found");
    }
})
server.listen(3000, ()=>{
    console.log("server running on 3000");
})