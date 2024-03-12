const signUpModel = require("../models/signUpModel");
const { v4: uuid } = require("uuid");
module.exports = {
  createNewUser: async (body) => {
    try {
      body.userId = uuid();
      const user = await signUpModel.createNewUser(body);
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
};