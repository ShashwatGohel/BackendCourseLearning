const express = require('express');
const router = express.Router();

const { getUser } = require('./Controller');

router.get('/', getUser);

module.exports = router;