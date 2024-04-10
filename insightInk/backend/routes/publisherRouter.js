const express = require("express");
const {
  createPublisher,
  getAllPublishers,
} = require("../controllers/publisherController");

const router = express.Router();
router.post("/createPublisher", createPublisher);

router.get("/getAllPublishers", getAllPublishers);
module.exports = router;
