const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/practiseDB')
.then(() => {
    console.log('MongoDB Connected Successfully');
})
.catch((error) => {
    console.log(error);
});
const courseSchema = new mongoose.Schema({
    name:String,
    duration:String
})
const studentSchema = new mongoose.Schema({
    name:String,
    course:{
        type:mongoose.Schema.Type.ObjectId,ref:"Courses"
    }
})
const Course = mongoose.model(
    "Courses",
    courseSchema
)
const Student = mongoose.model(
    "Students",
    studentSchema
)

app.get('/', (req, res) => {
    res.send('Server Running Successfully');
});

app.post('/courses',async(req,res)=>{
    try{
        const newCourse = await Course.create({
            name:req.body.name,
            duration:req.body.duration
        })
        res.send({
            success:true,
            message:"Course Created",
            data:newCourse
        })
    }
    catch(error){
        res.send({
            success:false,
            message:"Course Creation Failed"
        })
    }
})

app.post('/students',async(req,res)=>{
    try{
        const newStudent = await Student.create(req.body)
        res.send({
            success:true,
            message:"Students Created adn Saved",
            data:newStudent
        })
    }
    catch(error){
        res.send({
            success:false,
            message:"Failed to Create Student"
        })
    }
})
app.get('/student/:id', async(req,res)=>{
    try{
        const student = await Student.findById(req.params.id).populate('course')
        if(student){
            res.send({
                success:true,
                message:"Student Found",
                data:student
            })
        }
        else{
            res.send({
                success:false,
                message:"Student Not Found"
            })
        }
    }   
    catch(error){
        res.send({
            success:false,
            message:"Student Failed to be Found"
        })
    }
})
const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});