const express = require('express');
const router = express.Router();

const validateCourse = require('./validateCourseMiddleware');

const {
    getCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
} = require('./courseController');

// GET ALL
router.get('/', getCourses);

// GET SINGLE
router.get('/:id', getCourseById);

// CREATE
router.post(
    '/',
    validateCourse,
    createCourse
);

// UPDATE
router.put(
    '/:id',
    validateCourse,
    updateCourse
);

// DELETE
router.delete('/:id', deleteCourse);

module.exports = router;