const express = require('express');
const router = express.Router();

const { getNotes,postNotes } = require('./noteControllers');

router.get('/', getNotes);
router.post('/', postNotes);

module.exports = router;