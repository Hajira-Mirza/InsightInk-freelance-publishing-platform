const userModel = require("../models/userModel");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
require("dotenv").config();
module.exports = {
  signUp: async (body) => {
    try {
      const user = await userModel.getUserByUserId(body.userId);
      if (user.error || user.response == null) {
        return {
          error: "Invalid Credentials",
        };
      }
      const isValid = await compare(
        body.password,
        user.response.dataValues.password
      );
      if (!isValid) {
        return {
          error: "Invalid Credentials",
        };
      }

      delete user.response.dataValues.password;
      const jwt = sign(user, process.env.SECRET, { expiresIn: "60000" });
      return {
        response: jwt,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};