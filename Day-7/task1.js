const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const students = [
    {
        id: 1,
        name: "Shashwat"
    },
    {
        id: 2,
        name: "Peter"
    }
];

app.get('/', (req, res) => {
  res.send('Server Running Successfully 🚀');
});
//Updating the Student
app.put('/students/:id',(req,res)=>{
    const student = req.params.id
    const student = students.find(students=>students.id == req.params.id)
    if(student){
        student.name = req.body.name;
    }
    else{
        return res.status(404).json({
            message: "Student not found"
        });
    }
    res.send({
        message:"Student Name Updated",
        student: student
    })
});

app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});