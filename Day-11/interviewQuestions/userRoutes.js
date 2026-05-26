const express = require('express');
const router = express.Router();

const { getUser,createUser,getDashboard } = require('./userController');
const authMiddleware = (req,res,next)=>{
    let isloggedin = true
    if(isloggedin){
        next()
    }
    else{
        res.send("Unauthorized")
    }
};

router.get('/', getUser);
router.post('/',createUser);
router.get('/dashboard',authmiddleware,getDashboard)

module.exports = router;