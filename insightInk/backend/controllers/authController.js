const joi = require("joi");
const authService = require("../services/authService");

const signInSchema = joi.object().keys({
  emailAddress: joi.string().required().pattern(new RegExp("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$")),
  password: joi.string().required().pattern(new RegExp("^[a-zA-Z0-9 ]*$")),
});

module.exports = {
  signIn: async (req, res) => {
    try {
      const validate = await signInSchema.validateAsync(req.body);
      const authResponse = await authService.signIn(validate);
      
      if (authResponse.error) {
        return res.send({
          error: authResponse.error,
        });
      }
      
      const { accessToken, refreshToken } = authResponse.response;

      res.cookie("token", accessToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        httpOnly: true,
      });

      res.cookie("refreshToken", refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
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
  logout: async (req, res) => {
    try {
      res.clearCookie("token");
      res.clearCookie("refreshToken");
      return res.send({
        response: "Logged out successfully",
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
