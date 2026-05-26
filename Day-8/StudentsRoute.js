const express = require('express');
const router = express.Router();
const { getStudents } = require("./studentsController");
router.get("/", getStudents);
module.exports = router;
