const userDetailsService = require("../services/userDetailsService");
const joi = require("joi");

const createUserDetailsSchema = joi.object().keys({
  userName: joi.string().required(),
  location: joi.string().required(),
  description: joi.string().required(),
  about: joi.string().required(),
  experience: joi.string().required(),
  startDate: joi.string().required(),
  endDate: joi.string().required(),
});
const updateUserDetailsSchema = joi.object().keys({
  userDetailsId: joi.string().required(),
});
module.exports = {
  createUserDetails: async (req, res) => {
    try {
      const validate = await createUserDetailsSchema.validateAsync(req.body);
      const details = await userDetailsService.createUserDetails(validate);
      if (details.error) {
        return res.send({
          error: details.error,
        });
      }
      return res.send({
        response: details.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  updateUserDetails: async (req, res) => {
    try {
      const validate = await updateUserDetailsSchema.validateAsync(req.body);
      const details = await userDetailsService.updateUserDetails(validate);
      if (details.error) {
        return res.send({
          error: details.error,
        });
      }
      return res.send({
        response: details.response,
      });
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getAllUserDetails: async (req, res) => {
    try {
      const details = await userDetailsService.getAllUserDetails();
      if (details.error) {
        return res.send({
          error: details.error,
        });
      }
      return res.send({
        response: details.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },

  
};
