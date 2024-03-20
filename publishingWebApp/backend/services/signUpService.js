const signUpModel = require("../models/signUpModel");
const { v4: uuid } = require("uuid");
module.exports = {
  signUp: async (body) => {
    try {
      body.userId = uuid();
      const newUser = await signUpModel.signUp(body);
      if (newUser.error) {
        return {
          error: newUser.error,
        };
      }
      return {
        response: newUser.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
