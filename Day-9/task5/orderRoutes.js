const express= require("express")
const router = express.Router()
const {getOrders,createOrders} = require("./orderController")
router.get("/", getOrders)
router.post("/", createOrders)
module.exports = router