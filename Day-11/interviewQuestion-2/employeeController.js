let employees = [
   {
      id: 1,
      name: "Tony Stark",
      department: "Engineering"
   },
   {
      id: 2,
      name: "Peter Parker",
      department: "Development"
   },
   {
      id: 3,
      name: "Steve Rogers",
      department: "Management"
   }
];
const getEmployee = (req, res) => {
    res.send({
        success:true,
        message:'All Employeed Displayed',
        data: employees
    });
};
const getSingleEmployee = (req, res) => {
    const employee = employees.find(employee=>employee.id==req.params.id)
    res.send({
        success:true,
        message: "Employee Found",
        data: employee
    });
};
const createEmployee = (req, res) => {
    const newEmployee = req.body
    employees.push(newEmployee)
    res.send({
        success:true,
        message: "Employee Created",
        data: newEmployee
    });

};
const deleteEmployee = (req, res) => {
    employee = employees.filter(employee=>employee.id!=req.params.id)
    res.send({
        success:true,
        message: "Employee Deleted",
        data: employees
    });

};
const updateEmployee = (req,res)=>{
    const employee = employees.find(employee => employee.id == req.params.id);
    if(employee){
        employee.name = req.body.name;
        employee.department = req.body.department;
        res.send({
            success: true,
            message: "Employee updated successfully",
            data: employee
        });
    }
    else{
        res.status(404).send({
            success: false,
            message: "Employee not found"
        });
    }
}
const getDashboard  = (req, res) => {

    res.send({
            success: true,
            message: "WElcome to Dashboard"
        });

};
module.exports = {
    getEmployee,getSingleEmployee,createEmployee,updateEmployee,deleteEmployee,getDashboard
};