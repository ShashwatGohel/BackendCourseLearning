const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;


// Use let because we reassign array
let students = [
    {
        id: 1,
        name: "Shashwat"
    },
    {
        id: 2,
        name: "Peter"
    }
];



// DELETE STUDENT
app.delete('/students/:id', (req, res) => {

    students = students.filter(
        student => student.id != req.params.id
    );

    res.send({
        message: "Student Deleted",
        students
    });

});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});