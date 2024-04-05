const { models } = require("./index");
//const { Op } = require("sequelize");
module.exports = {
  createOrder: async (body) => {
    try {
      const Orders = await models.order.create({ ...body });
      return {
        response: Orders,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getAllOrders: async () => {
    try {
      const Orders = await models.order.findAll();
      return {
        response: Orders,
      };
    } catch (error) {
      console.log("model", error);
      return {
        error: error.message,
      };
    }
  },
  /*  getUserByUserByEmail: async (emailAddress) => {
    try {
      const user = await models.user.findOne({
        where: {
          emailAddress: emailAddress,
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
  }, */
  /*  updateUser: async (body, userId) => {
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
  }, */
  /*   deleteUser: async (userId) => {
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
  }, */
};
