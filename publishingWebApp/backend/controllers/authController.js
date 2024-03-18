const joi = require("joi");
const authService = require("../services/authService");

const signUpSchema = joi.object().keys({
  emailAddress: joi.string().min(1).required(),
  password: joi.string().min(6).required(),
});
module.exports = {
  signUp: async (req, res) => {
    try {
      const validate = await signUpSchema.validateAsync(req.body);
      const isUser = await authService.signUp(validate);
      if (isUser.error) {
        return res.send({
          error: isUser.error,
        });
      }
      /*res.cookie("token", isUser.response, {
        maxAge: 600000,
        httpOnly: true,
      });*/
      return res.send({
        response: true,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};