const express = require("express");
const {
  createAuthor,
  getAllAuthors,
} = require("../controllers/authorController");

const router = express.Router();
router.post("/createAuthor", createAuthor);

router.get("/getAllAuthors", getAllAuthors);
module.exports = router;
