let users = [
   {
      id: 1,
      name: "Peter"
   },
   {
      id: 2,
      name: "Tony"
   }
];
const getUser = (req, res) => {
    res.send({
        success: true,
        message: "Getting all th Users",
        data: users
    });

};
const getSingleUser = (req,res)=>{
    const user = users.find(user=>user.id == req.params.id)
    if(user){
        res.send({
            success: true,
            message: "User Found",
            data: user
        })
    }
    else{

        res.status(404).send({
            success: false,
            message: "User not found"
        });

    }
};

const createUser = (req,res)=>{
    const newUser = req.body
    users.push(newUser)
    res.send({
        success: true,
        message: "User Created",
        data:newUser
    })
};

const updateUser = (req,res)=>{
    const user = users.find(user=>user.id == req.params.id)
    if(user){
        user.name = req.body.name
        res.send({
            success: true,
            message: "User Updated Successfully",
            data: user
        })
    }
    else{

        res.status(404).send({
            success: false,
            message: "User not found"
        });

    }
};
const deleteUser =(req,res)=>{
    users = users.filter(user=>user.id != req.params.id)
        res.send({
            success: true,
            message:"User Deleted Successfully",
            data: users
        })
};
module.exports = {
    getUser,
    getSingleUser,
    updateUser,
    createUser,
    deleteUser
};