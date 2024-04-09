const joi = require("joi");
const authService = require("../services/authService");

const signInSchema = joi.object().keys({
  emailAddress: joi.string().min(1).required(),
  password: joi.string().min(6).required(),
});
module.exports = {
  signIn: async (req, res) => {
    try {
      const validate = await signInSchema.validateAsync(req.body);
      const isUser = await authService.signIn(validate);
      if (isUser.error) {
        return res.send({
          error: isUser.error,
        });
      }
      res.cookie("token", isUser.response, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
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