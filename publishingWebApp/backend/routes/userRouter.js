const express = require("express");
//import here
const { 
    createUser, 
    getAllUsers,
    updateUser,
    deleteUser,

} = require("../controllers/userController");

const { middleware } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/createUser", createUser);

router.get("/getAllUsers", middleware, getAllUsers);

router.put("/updateUser", updateUser);

router.delete("/deleteUser", deleteUser);

module.exports = router;
