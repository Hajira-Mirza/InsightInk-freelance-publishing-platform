const express = require("express");
const {
  createOrder,
  getAllOrders,
} = require("../controllers/ordersController");

const router = express.Router();
router.post("/createOrder", createOrder);

router.get("/getAllOrders", getAllOrders);
module.exports = router;
