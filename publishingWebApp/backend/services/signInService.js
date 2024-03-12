const signInModel = require("../models/signInModel");
const { hash } = require("bcryptjs");
const { v4: uuid } = require("uuid");
module.exports = {
  createUser: async (body) => {
    try {
      const isUser = await signInModel.getUserByUserId(body.userId);
      if (isUser.error || isUser.response) {
        return {
          error: "This user already exists!",
        };
      }
      const user = {
        userId: uuid(),
        emailAddress: body.emailAddress,
        password: await hash(body.password, 10),
      };
      const createdUser = await signInModel.createUser(user);
      if (createdUser.error) {
        return {
          error: createdUser.error,
        };
      }
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getAllUsers: async () => {
    try {
      const users = await signInModel.getAllUsers();
      if (users.error) {
        return {
          error: users.error,
        };
      }
      return {
        response: users.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  updateUser: async (body) => {
    try {
      const user = await signInModel.updateUser(body, body.userId);
      if (user.error) {
        return {
          error: user.error,
        };
      }
      return {
        response: user.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  deleteUser: async (query) => {
    try {
      const user = await signInModel.deleteUser(query.userId);
      if (deletedUser.error) {
        return {
          error: user.error,
        };
      }
      return {
        response: user.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
