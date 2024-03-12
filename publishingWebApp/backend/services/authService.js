const signInrModel = require("../models/signInModel");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
require("dotenv").config();
module.exports = {
  signIn: async (body) => {
    try {
      const user = await signInModel.getUserByUserId(body.userId);
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