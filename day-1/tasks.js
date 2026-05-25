const http = require("http");
const server = http.createServer((req,res)=>{
    // Task-2 
    console.log(req.url);
    console.log(req.method);
    // Task-1
    if(req.url === "/" && req.method === "GET"){
        res.end("Welcome to the home page");
    }
    else if(req.url === "/about" && req.method === "GET"){
        res.end("Welcome to the About page");
    }
    else if(req.url === "/contact" && req.method === "GET"){
        res.end("Welcome to the contact page");
    }
    // Task-4
    else if(req.url === "/time" && req.method === "GET"){
        const currentTime = new Date();
        res.end(currentTime.toString())
    }
    // Task-5
    else if(req.url === "/user" && req.method === "GET"){
        const user = {
            name:"Shashwat",
            role:"Student"
        };
        res.setHeader("Content-type","applicatio/json");
        res.end(JSON.stringify(user));
    }
    else if(req.url === "/product" && req.method === "GET"){
        const product = [
            {
                id:1,
                product_name : "laptop",
                price: 45000
            },
            {
                id: 2,
                product_name: "Phone",
                price: 50000
            }
        ]
        res.setHeader("Content-type", "application/json");
        res.end(JSON.stringify(product));
    }
    else if(req.url === "/services" && req.method === "GET"){
        res.end("Welcome to the Service Page");
        console.log(req.method);
    }
    else if(req.url === "/profile" && req.method === "GET"){
        const profile1 = {
            name:"Shashwat",
            mname:"Sunilkumar",
            lname:"Gohel",
            age: 21,
            role:"Student",
            city:"Ahmedabad",
            state:"Gujarat",
            country:"India"
        }
        res.setHeader("Content-type","applicatio/json");
        res.end(JSON.stringify(profile1));
    }
    else if(req.url === "/status" && req.method === "GET"){
        const presentTime = new Date();
        const status = {
            server: "running",
            time: presentTime.toISOString
        }
        res.setHeader("Content-type", "application/json");
        res.end(JSON.stringify(status));
    }
    else{
        res.end("404 bad Request")
    }
})
server.listen(3000);