const sequelize = require("../config/dbConfig");
const user = require("./definitions/user");
const order = require("./definitions/orders");

const models = {
  user,
  order,
};

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
