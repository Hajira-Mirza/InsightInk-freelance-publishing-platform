const express = require("express");
const router = express.Router();

const { signIn, logout} = require("../controllers/authController");

router.post("/signIn", signIn);

router.delete("/logout", logout)

module.exports = router;