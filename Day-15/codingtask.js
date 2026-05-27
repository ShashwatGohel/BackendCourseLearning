const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());


// MongoDB Connection
mongoose.connect(
    "mongodb://127.0.0.1:27017/schoolDB"
)
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((error) => {
    console.log(error);
});


// Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});


// Model
const Student = mongoose.model(
    "Student",
    studentSchema
);


// Test Route
app.get('/', (req, res) => {

    res.send("MongoDB Connected Successfully");

});


// Create Sample Student
app.get('/create-student', async (req, res) => {

    try {

        const newStudent = new Student({
            name: "Shashwat",
            age: 20,
            course: "Backend Development"
        });

        await newStudent.save();

        res.status(201).json({
            success: true,
            message: "Student Created Successfully",
            data: newStudent
        });

    }
    catch(error){

        res.status(500).json({
            success: false,
            message: "Error creating student",
            error: error.message
        });

    }

});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});