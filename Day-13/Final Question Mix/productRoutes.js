const express = require('express');
const router = express.Router();

const { getproducts } = require('./productController');

router.get('/', getproducts);

module.exports = router;