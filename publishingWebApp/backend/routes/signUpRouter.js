const express = require("express");
//import here
const { signUp } = require("../controllers/signUpController")

const router = express.Router();

//New sign up page route
router.post("/newUser", signUp);

module.exports = router;