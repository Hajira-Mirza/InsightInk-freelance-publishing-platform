const { models } = require("./index")

module.exports = {
  signUp: async (body) => {
    try {
      const newUser = await models.signUp.create({ ...body });
      return {
        response: newUser,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
