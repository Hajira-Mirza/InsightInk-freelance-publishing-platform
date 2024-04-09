const express = require("express");
const {
  createBook,
  getAllBooks,
} = require("../controllers/booksController");

const router = express.Router();
router.post("/createBook", createBook);

router.get("/getAllBooks", getAllBooks);
module.exports = router;
