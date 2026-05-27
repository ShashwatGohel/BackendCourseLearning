const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://127.0.0.1:27017/studetnDB").then(()=>{
    console.log("MongoDB Connected Successfully")
})

const studentSchema = new mongoose.Schema({
    name:String,
    age:Number,
    course:String
})

const Student = mongoose.model(
    "Student",
    studentSchema
)

app.get('/', (req, res) => {
  res.send('MongoDB Connected Successfully');
});

app.post('/create-student', async(req,res)=>{
    try{
        const newStudent = new Student(req.body)

        await newStudent.save()

        res.status(201).send({
            success: true,
            message:"Student created Successfully",
            data: newStudent
        });
    }
    catch(error){
        res.status(500).send({
            success:false,
            message:"Student not Created"
        });
    }
})

app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});