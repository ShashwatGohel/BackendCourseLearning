const jwt = require('jsonwebtoken')
const user = {
    id: "12345",
    name: "Shashwat"
};
const token  = jwt.sign({id:user.id}, "secretkey",{
        expiresIn:"1d"
    });
console.log(token)  