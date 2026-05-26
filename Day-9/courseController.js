let courses = [
   {
      id: 1,
      course: "Node.js"
   }
];

const getCourses = (req,res)=>{
    res.send({
        success: true,
        message: "Courses Added",
        data: courses
    })
};
const createCourses = (req,res)=>{
    const newCourse = req.body
    courses = courses.push(newCourse)
    res.status(201).send({
        success: true,
        message: "Course created successfully",
        data: courses
    })
};
module.exports={
    getCourses,
    createCourses
}