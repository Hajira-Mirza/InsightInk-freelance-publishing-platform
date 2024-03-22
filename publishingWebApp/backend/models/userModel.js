const { models } = require("./index");
//const { Op } = require("sequelize");
module.exports = {
  createUser: async (body) => {
    try {
      const user = await models.user.create({ ...body });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getAllUsers: async () => {
    try {
      const users = await models.user.findAll();
      return {
        response: users,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getUserByUserEmail: async (emailAddress) => {
    console.log("id", emailAddress)
    try {
      const user = await models.user.findOne({
        where: {
          emailAddress: emailAddress,
        },
      });
      console.log("userget", user);
      return {
        response: user,
      };
    } catch (error) {
      console.log("userer", error.message);

      return {
        error: error.message,
      };
    }
  },
  updateUser: async (body, userId) => {
    try {
      const user = await models.user.update(
        {
          ...body,
        },
        {
          where: {
            userId: userId,
          },
        }
      );
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  deleteUser: async (userId) => {
    try {
      const user = await models.user.destroy({
        where: {
          userId: userId,
        },
      });
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
