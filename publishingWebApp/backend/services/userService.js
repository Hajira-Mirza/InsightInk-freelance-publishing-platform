const userModel = require("../models/userModel");
const { hash } = require("bcryptjs");
const { v4: uuid } = require("uuid");
module.exports = {
  createUser: async (body) => {
    try {
      const isUser = await userModel.getUserByUserByEmail(body.emailAddress);
      if (isUser.error || isUser.response) {
        return {
          error: "This user already exists!",
        };
      }
      const user = {
        userId: uuid(),
        userName: body.userName,
        emailAddress: body.emailAddress,
        password: await hash(body.password, 10),
      };
      const newUser = await userModel.createUser(user);
      if (newUser.error) {
        return {
          error: newUser.error,
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
      const users = await userModel.getAllUsers();
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
      const user = await userModel.updateUser(body, body.userId);
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
      const user = await userModel.deleteUser(query.userId);
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
