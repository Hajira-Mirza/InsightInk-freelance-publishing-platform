const authorModel = require("../models/authorModel");
const { v4: uuid } = require("uuid");
require("dotenv").config();

module.exports = {
  createAuthor: async (body) => {
    try {
      const author = {
        authorId: uuid(),
        authorName: body.authorName,
        country: body.country,
        bio: body.bio,
      };
      const newAuthor = await authorModel.createAuthor(author);
      if (newAuthor.error) {
        return {
          error: newAuthor.error,
        };
      }
      return {
        response: newAuthor.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getAllAuthors: async () => {
    try {
      const authors = await authorModel.getAllAuthors();
      if (authors.error) {
        return {
          error: authors.error,
        };
      }
      return {
        response: authors.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
