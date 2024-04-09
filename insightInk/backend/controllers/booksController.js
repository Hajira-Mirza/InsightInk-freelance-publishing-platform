const booksService = require("../services/booksService");
const joi = require("joi");

const createBookSchema = joi.object().keys({
  publisherName: joi.string().required(),
  authorName: joi.string().required(),
  bookInfo: joi.string().required(),
  bookName: joi.string().required(),
});

module.exports = {
  createBook: async (req, res) => {
    try {
      const validate = await createBookSchema.validateAsync(req.body);
      const book = await booksService.createBook(validate);
      if (book.error) {
        return res.send({
          error: book.error,
        });
      }
      return res.send({
        response: book.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  getAllBooks: async (req, res) => {
    try {
      const books = await booksService.getAllBooks();
      if (books.error) {
        return res.send({
          error: books.error,
        });
      }
      return res.send({
        response: books.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
