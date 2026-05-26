const express = require('express');
const router = express.Router();
const validatebook = require("./validateMiddleware")
const { getBook, getBookbyId,createBook, updateBook, deleteBook } = require('./bookController');

router.get('/', getBook);
router.get('/:id', getBookbyId);
router.post('/', validatebook,createBook);
router.put('/:id',validatebook, updateBook);
router.delete('/:id', deleteBook);

module.exports = router;