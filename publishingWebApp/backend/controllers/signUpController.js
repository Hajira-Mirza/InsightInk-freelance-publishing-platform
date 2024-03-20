const signUpService = require("../services/signUpService");
const joi = require("joi");

const createSignUpSchema = joi.object().keys({
  userName: joi.string().required(),
  emailId: joi.string().required(),
  password: joi.string().required(),
});

module.exports = {
  signUp: async (req, res) => {
    try {
      const validate = await createSignUpSchema.validateAsync(req.body);

      const newUser = await signUpService.signUp(validate);
      if (newUser.error) {
        return res.send({
          error: newUser.error,
        });
      }
      return res.send({
        response: newUser.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
