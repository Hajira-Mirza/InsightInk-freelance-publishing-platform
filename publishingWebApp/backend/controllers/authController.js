const joi = require("joi");
const authService = require("../services/authService");

const loginSchema = joi.object().keys({
  userName: joi.string().min(1).required(),
  password: joi.string().min(6).required(),
});
module.exports = {}