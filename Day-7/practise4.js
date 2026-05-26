const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
let users = [
   {
      id: 1,
      name: "Shashwat",
      role: "Student"
   },
   {
      id: 2,
      name: "Peter",
      role: "Developer"
   }
];
app.get('/', (req, res) => {
  res.send('Server Running Successfully 🚀');
});
app.put('/users/:id',(req,res)=>{
  const user = users.find(user=>user.id == req.params.id)
  if(user){
    user.role = req.body.role
    res.send({
      message:"User role updated",
      users
    })
  }
})
app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});