const { models } = require("./index");
module.exports = {
  createUserDetails: async (body) => {
    try {
      const details = await models.userDetails.create({ ...body });
      return {
        response: details,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  updateUserDetails: async (body, userDetailsId) => {
    try {
      const details = await models.userDetails.update(
        {
          ...body,
        },
        {
          where: {
            userDetailsId: userDetailsId,
          },
        }
      );
      return {
        response: details,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getAllUserDetails: async () => {
    try {
      const details = await models.userDetails.findAll();
      return {
        response: details,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};