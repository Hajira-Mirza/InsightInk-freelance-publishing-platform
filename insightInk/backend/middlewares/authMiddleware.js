const { verify } = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  middleware: async (req, res, next) => {
    try {
      if (req.cookies.token == undefined || null) {
        return res.send({
            error: "Unauthorized User"
        });
      };
      verify(
        req.cookies.token, process.env.SECRET, (error, user) => {
        if (error) {
            return res.send({
                error: "Unauthorized User",
            });
        }
        console.log(user);
        });
      next();
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  }
}; 