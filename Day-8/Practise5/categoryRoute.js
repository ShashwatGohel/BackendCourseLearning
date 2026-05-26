const express = require('express');
const router = express.Router();

const { getCategory } = require('./categoryController');

router.get('/', getCategory);

module.exports = router;