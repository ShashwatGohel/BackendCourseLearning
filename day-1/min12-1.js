const http = require("http")
const server = http.createServer(async(req,res)=>{
    console.log("URL : ", req.url);
    console.log("Method : ", req.method);
    
    if(req.url === "/" && req.method === "GET"){
        res.end("Welcome to the Login API");
    }
    else if(req.url === "/login"){
        if(req.method === "GET"){
            const loginUser = new Promise((resolve, reject)=>{
                setTimeout(() => {
                    let isLoggedin = true;
                    if(isLoggedin){
                        resolve({
                            "id": 1,
                            "username": "shashwat",
                            "role": "Backend Student"
                        })
                    }
                    else{
                        reject("Invalid credential");
                    }
                }, 4000);
            })
            try{
                const userData = await loginUser;
                const responseData = {
                    success : true,
                    message: "Valid Login",
                    user: userData
                };
                res.setHeader("Content-type", "application/JSON");
                res.end(JSON.stringify(responseData));
            }
            catch(error){
                res.statusCode = 500;
                res.end("Login Failed");
            }
        }
        else{
             res.statusCode = 405;

            res.end("Method Not Allowed");
        }
    }
    else if(req.url === "/delay" && req.method === "GET") {

        setTimeout(() => {

            res.end("Response After Delay");

        }, 5000);

    }

    // 404 ROUTE
    else {

        res.statusCode = 404;

        res.end("404 Not Found");

    }
});

server.listen(3000, () => {

    console.log("Server running on port 3000");

});