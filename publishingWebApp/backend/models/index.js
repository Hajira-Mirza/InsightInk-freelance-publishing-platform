const sequelize = require("../config/dbConfig");
const signUp = require("./definitions/signUp");
const signIn = require("./definitions/signIn");

signUp.hasOne(signIn, { foreignKey: "userId"});
signIn.belongsTo(signUp, { foreignKey: "userId"});

const models = {
    signUp,
    signIn,
};

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };