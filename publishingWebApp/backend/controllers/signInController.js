const signInService = require("../services/signInService");
const joi = require("joi");

const createUserSchema = joi.object().keys({
  emailAddress: joi.string().required(),
  password: joi.string().pattern(new RegExp("^[A-Za-z0-9]{3,16}$")),
});

const updateUserSchema = joi.object().keys({
  userId: joi.string().required(),
  userName: joi.string().required(),
});

const deleteUserSchema = joi.object().keys({
  userId: joi.array().min(1).required(),
});

module.exports = {
  createUser: async (req, res) => {
    try {
      const validate = await createUserSchema.validateAsync(req.body);
      const user = await signInService.createUser(validate);
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
  getAllUsers: async () => {
    try {
      const users = await models.signInService.getAllUsers();
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
