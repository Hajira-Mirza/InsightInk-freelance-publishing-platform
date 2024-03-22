const userModel = require("../models/userModel");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
require("dotenv").config();
module.exports = {
  signIn: async (body) => {
    console.log("bodyyy", body);
    try {
      const user = await userModel.getUserByUserEmail(body.emailAddress);
      if (user.error || user.response == null) {
        return {
          error: "Invalid Credentials ud",
        };
      }
      const isValid = await compare(
        body.password,
        user.response.dataValues.password
      );
      if (!isValid) {
        return {
          error: "Invalid Credentials com",
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
