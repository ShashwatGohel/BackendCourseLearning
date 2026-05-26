const courses = [
    {
        id: 1,
        title: "Backend Development",
        instructor: "Tony Stark"
    },
    {
        id: 2,
        title: "React Mastery",
        instructor: "Peter Parker"
    }
];

module.exports = courses;

// GET ALL COURSES
const getCourses = (req, res) => {

    res.status(200).json({
        success: true,
        data: courses
    });
};

// GET SINGLE COURSE
const getCourseById = (req, res) => {

    const course = courses.find(
        course => course.id == req.params.id
    );

    if(!course){
        return res.status(404).json({
            success: false,
            message: "Course not found"
        });
    }

    res.status(200).json({
        success: true,
        data: course
    });
};

// CREATE COURSE
const createCourse = (req, res) => {

    const newCourse = {
        id: courses.length + 1,
        title: req.body.title,
        instructor: req.body.instructor
    };

    courses.push(newCourse);

    res.status(201).json({
        success: true,
        message: "Course created successfully",
        data: newCourse
    });
};

// UPDATE COURSE
const updateCourse = (req, res) => {

    const course = courses.find(
        course => course.id == req.params.id
    );

    if(!course){
        return res.status(404).json({
            success: false,
            message: "Course not found"
        });
    }

    course.title = req.body.title;
    course.instructor = req.body.instructor;

    res.status(200).json({
        success: true,
        message: "Course updated successfully",
        data: course
    });
};

// DELETE COURSE
const deleteCourse = (req, res) => {

    const course = courses.find(
        course => course.id == req.params.id
    );

    if(!course){
        return res.status(404).json({
            success: false,
            message: "Course not found"
        });
    }

    courses = courses.filter(
        course => course.id != req.params.id
    );

    res.status(200).json({
        success: true,
        message: "Course deleted successfully"
    });
};

module.exports = {
    getCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
};