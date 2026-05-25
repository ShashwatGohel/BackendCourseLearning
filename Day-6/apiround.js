const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
// Middleware 
app.use((req,res,next)=>{
    console.log("URL : ", req.url)
    console.log("Method : ", req.method)
    next()
});

// Fake Database 
const students = [
   {
      id: 1,
      name: "Peter"
   }
];

// Get Students via "GET"
app.get('/students',(req,res)=>{
    res.send({
        message:"Getting all the Students",
        students: students
    })
});
//Post Students
app.post('/students',(req,res)=>{
    const newStudent = req.body;
    students.push(newStudent);
    res.send({
        message:"New Student Added",
        students: students
    })
});
// Get students by id 
app.get('/students/:id', (req,res)=>{
    const findStudents = students.find(students=>students.id == req.params.id);
    res.send(findStudents)
});
//Delete Students
app.delete('/students/:id',(req,res)=>{
    const deletedStudents = students.filter(students=>students.id != req.params.id);
    res.send(deletedStudents)
});
//Put Students
app.put('/students/:id',(req,res)=>{
    res.send('Students Updated')
});
app.get('/', (req, res) => {
  res.send('Server Running Successfully 🚀');
});

app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});