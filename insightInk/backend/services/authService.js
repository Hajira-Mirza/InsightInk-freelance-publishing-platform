const userModel = require("../models/userModel");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  signIn: async (body) => {
    try {
      const user = await userModel.getUserByUserEmail(body.emailAddress);
      if (!user || !user.response) {
        return {
          error: "Invalid Credentials",
        };
      }
      
      const isValid = await compare(body.password, user.response.dataValues.password);
      if (!isValid) {
        return {
          error: "Invalid Credentials",
        };
      }

      delete user.response.dataValues.password;

      const accessToken = sign(user.response.dataValues, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "2592000s" });
      const refreshToken = sign(user.response.dataValues, process.env.REFRESH_TOKEN_SECRET);

      return {
        response: {
          accessToken,
          refreshToken,
        },
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  logout: async (res) => {
    try {
      clearRefreshToken(res);
      return {
        response: "Logged out successfully",
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};