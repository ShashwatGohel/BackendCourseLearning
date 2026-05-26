const express = require("express")
const router = express.Router();
const {getCourses , createCourses} = require("./courseController")
router.get('/courses',getCourses)
router.post('/courses',createCourses)
module.exports = router;