const express = require("express")
const router = express.Router()
const {getProducts, createProducts} = require("./productController") 

router.get("/", getProducts)
router.post("/", createProducts)
module.exports= router;