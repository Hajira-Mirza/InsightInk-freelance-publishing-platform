const userService = require("../services/userService");
const joi = require("joi");

const createUserSchema = joi.object().keys({
  userName: joi.string().required(),
  emailAddress: joi.string().required(),
  password: joi.string().required(),
});
const updateUserSchema = joi.object().keys({
  userId: joi.string().required(),
  emailAddress: joi.string().required(),
});

const deleteUserSchema = joi.object().keys({
  userId: joi.array().min(1).required(),
});

module.exports = {
  createUser: async (req, res) => {
    try {
      const validate = await createUserSchema.validateAsync(req.body);
      const user = await userService.createUser(validate);
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
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await userService.getAllUsers();
      if (users.error) {
        return res.send({
          error: users.error,
        });
      }
      return res.send({
        response: users.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },

  getUserByUserId: async (userId) => {
    try {
      const user = await models.users.findOne({
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
  },
};
