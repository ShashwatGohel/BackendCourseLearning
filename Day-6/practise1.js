const express = require('express');
const app = express();

app.use(express.json());
app.use((req,res,next)=>{
    console.log("URL : ", req.url)
    console.log("Method : ", req.method)
    next()
});
const tasks = [
   {
      id: 1,
      task: "Learn Node.js"
   }
];

app.get('/', (req, res) => {
  res.send('Server Running Successfully 🚀');
});
// Returning All the Tasks 
app.get('/tasks',(req,res)=>{
    res.send({
        message:"Returning all the Tasks",
        tasks: tasks
    })
});
// Creating a Task 
app.post('/tasks' , (req,res)=>{
    const newTask = req.body;
    tasks.push(newTask)
    res.send({
        message:"Task Created",
        tasks:tasks
    })
});
// Get a single Tasks 
app.get('/tasks/:id',(req,res)=>{
    const findTasks = tasks.find(tasks=>tasks.id == req.params.id)
    res.send(findTasks)
});
// Deleting a Task 
app.delete('/tasks/:id',(req,res)=>{
    const deletedTasks = tasks.filter(tasks=> tasks.id != req.params.id)
    res.send(deletedTasks)
});
// Updating a Task
app.put('/tasks/:id',(req,res)=>{
    // const updatedTasks = tasks.filter(tasks=> tasks.id != req.params.id)
    res.send("Tasks Updated")
});
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});