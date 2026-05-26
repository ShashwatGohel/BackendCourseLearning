let users = [
   {
      id: 1,
      name: "Peter"
   }
];
const getUser = (req, res) => {

    res.send({
        success: true,
        message:"User Displayed Properly",
        data: users
    });

};
const createUser = (req, res) => {
    const newUser = req.body
    user.push(newUser)
    res.send({
        success: true,
        message:"User Created Successfully",
        data: users
    });

};
const getDashboard = (req, res) => {
    res.send({
        success: true,
        message:"Welcome to Dashoard"
    });

};
module.exports = {
    getUser,createUser,getDashboard
};