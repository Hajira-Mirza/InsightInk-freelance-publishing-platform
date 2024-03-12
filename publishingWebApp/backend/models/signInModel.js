const { models } = require("./index");
//const { Op } = require("sequelize");
module.exports = {
  createUser: async (body) => {
    try {
      const user = await models.signIn.create({ ...body });
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
      const users = await models.signIn.getAllUsers();
      return {
        response: users,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getUserByUserId: async (userId) => {
    try {
      const user = await models.signIn.findOne({
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
  updateUser: async (body, userId) => {
    try {
      const user = await models.signIn.update(
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
      const user = await models.signIn.destroy({
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