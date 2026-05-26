const express = require("express")
const router = express.Router();
const {getComment}  = require("./commentController")
router.get("/comment", getComment)
module.exports = router