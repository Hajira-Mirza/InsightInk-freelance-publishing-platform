const signUpService = require("../services/signUpService");
const joi = require("joi");

const createSignUpSchema = joi.object().keys({
  userName: joi.string().required(),
  emailAddress: joi.string().required(),
  password: joi.string().required(),
});

module.exports = {
  createNewUser: async (req, res) => {
    try {
      const validate = await createSignUpSchema.validateAsync(req.body);

      const user = await signUpService.createNewUser(validate);
      if (user.error) {
        return res.send({
          error: user.error,
        });
      }
      return res.send({
        response: user.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
