const { models } = require("./index");
module.exports = {
  createAuthor: async (body) => {
    try {
      const author = await models.author.create({ ...body });
      return {
        response: author,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getAllAuthors: async () => {
    try {
      const authors = await models.author.findAll();
      return {
        response: authors,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
