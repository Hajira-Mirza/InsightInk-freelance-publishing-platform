const sequelize = require("../config/dbConfig");
const user = require("./definitions/user");

const models = {
    user,
};

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };