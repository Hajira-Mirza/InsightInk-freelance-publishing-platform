const express = require("express");
const {
  createUserDetails,
  updateUserDetails,
  getAllUserDetails,
} = require("../controllers/userDetailsController");

const router = express.Router();
router.post("/createUserDetails", createUserDetails,);

router.put("/updateUserDetails", updateUserDetails,);

router.get("/getAllUserDetails", getAllUserDetails);
module.exports = router;
