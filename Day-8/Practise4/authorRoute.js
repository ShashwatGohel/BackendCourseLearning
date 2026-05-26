const express = require('express');
const router = express.Router();

const { getAuthor } = require('./authorController');

router.get('/', getAuthor);

module.exports = router;