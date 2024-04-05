const ordersService = require("../services/ordersService");
const joi = require("joi");

const createOrderSchema = joi.object().keys({
  publisherName: joi.string().required(),
  authorName: joi.string().required(),
  bookInfo: joi.string().required(),
  bookName: joi.string().required(),
});

module.exports = {
  createOrder: async (req, res) => {
    try {
      const validate = await createOrderSchema.validateAsync(req.body);
      console.log("validate", validate);
      const Order = await ordersService.createOrder(validate);
      if (Order.error) {
        console.log("Order.error", Order.error);
        return res.send({
          error: Order.error,
        });
      }
      return res.send({
        response: Order.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  getAllOrders: async (req, res) => {
    try {
      const Orders = await ordersService.getAllOrders();
      if (Orders.error) {
        return res.send({
          error: Orders.error,
        });
      }
      return res.send({
        response: Orders.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  /* 
  updateUser: async (req, res) => {
    try {
      const validate = await updateUserSchema.validateAsync(req.body);
      const user = await userService.updateUser(validate);
      if (updatedUser.error) {
        return res.send({
          error: user.error,
        });
      }
      return res.send({
        response: user.response,
      });
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },

  deleteUser: async (req, res) => {
    try {
      const validate = await deleteUserSchema.validateAsync(req.query);
      const user = await userService.deleteUser(validate);
      if (user.error) {
        return res.send({
          error: user.error,
        });
      }
      return res.send({
        response: user.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  }, */
};
