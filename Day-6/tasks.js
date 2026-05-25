const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server Running Successfully 🚀');
});
const users = [];
app.post('/users',(req,res)=>{
    const newUser = req.body;
    users.push(newUser);
    res.send({
        message: "User created Successfully",
        users:users
    })
});
app.get('/users',(req,res)=>{
    res.send({
        message:"Fetching All the Users",
        users:users
    })
});
app.get('/users/:id',(req,res)=>{
    const findUser = findUser.find(user=>users.id == req.params.id)
    res.send(findUser)
});
app.delete('/users/:id',(req,res)=>{
    const updatedUsers = updatedUsers.filter(users=>users.id != req.params.id)
    res.send(updatedUsers)
});
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});