const sequelize = require("../config/dbConfig");
const user = require("./definitions/user");
const signUp = require("./definitions/signUp");

const models = {
    user,
    signUp
};

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };