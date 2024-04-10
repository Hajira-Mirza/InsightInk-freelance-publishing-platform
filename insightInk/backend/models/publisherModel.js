const { models } = require("./index");
//const { Op } = require("sequelize");
module.exports = {
  createPublisher: async (body) => {
    try {
      const publisher = await models.publisher.create({ ...body });
      return {
        response: publisher,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getAllPublishers: async () => {
    try {
      const publishers = await models.book.findAll();
      return {
        response: publishers,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
