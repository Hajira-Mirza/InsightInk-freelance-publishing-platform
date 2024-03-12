const { models } = require("./index")

module.exports = {
  createNewUser: async (body) => {
    try {
      const user = await models.signUp.create({ ...body });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};