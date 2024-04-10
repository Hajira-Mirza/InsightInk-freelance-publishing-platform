const authorService = require("../services/authorService");
const joi = require("joi");

const createAuthorSchema = joi.object().keys({
  AuthorName: joi.string().required(),
  country: joi.string().required(),
  bio: joi.string().required(),
});

module.exports = {
  createAuthor: async (req, res) => {
    try {
      const validate = await createAuthorSchema.validateAsync(req.body);
      const author = await authorService.createAuthor(validate);
      if (author.error) {
        return res.send({
          error: author.error,
        });
      }
      return res.send({
        response: author.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  getAllAuthors: async (req, res) => {
    try {
      const authors = await authorService.getAllAuthors();
      if (publishers.error) {
        return res.send({
          error: authors.error,
        });
      }
      return res.send({
        response: authors.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },

  
};
