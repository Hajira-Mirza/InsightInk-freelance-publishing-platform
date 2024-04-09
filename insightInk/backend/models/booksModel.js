const { models } = require("./index");
//const { Op } = require("sequelize");
module.exports = {
  createBook: async (body) => {
    try {
      const book = await models.book.create({ ...body });
      return {
        response: book,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getAllBooks: async () => {
    try {
      const books = await models.book.findAll();
      return {
        response: books,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
