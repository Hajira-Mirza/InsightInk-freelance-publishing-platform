const sequelize = require("../config/dbConfig");
const user = require("./definitions/user");
const book = require("./definitions/book");

const models = {
  user,
  book,
};

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
