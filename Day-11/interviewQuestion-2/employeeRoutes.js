const express = require('express');
const router = express.Router();

const {

    getEmployees,
    getSingleEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getDashboard

} = require('./employeeController');
const authMiddleware = (req,res,next)=>{
    let isloggedin = true
    if(isloggedin){
        next()
    }
    else{
        res.send("Unauthorized")
    }
};
router.get('/', getEmployee)
router.get('/:id', getSingleEmployee)
router.post('/',createEmployee)
router.put('/:id',updateEmployee)
router.delete('/:id',deleteEmplyee)
router.get('/dashboard',authmiddleware,getDashboard)
module.exports = router;