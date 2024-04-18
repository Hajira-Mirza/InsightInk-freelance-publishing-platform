const express = require("express");
const {  
    createPlan, 
    updatePlan,
    getAllPlans,
    deletePlan,
} = require("../controllers/planController");

const router = express.Router();

router.post("/createplan", createPlan);

router.put("/updatePlan", updatePlan);

router.get("/getAllPlans", getAllPlans);

router.delete("/deletePlan", deletePlan);

module.exports = router;