const sequelize = require("../config/dbConfig");
const user = require("./definitions/user");
const book = require("./definitions/book");
const plan = require("./definitions/plan");
const userDetails = require("./definitions/userDetails");

user.hasMany(book, { foreignKey: "userId" });
book.belongsTo(user, { foreignKey: "userId" });

userDetails.hasOne(user, { foreignKey: "userDetailsId" });
user.belongsTo(userDetails, { foreignKey: "userDetailsId" });

plan.hasOne(user, { foreignKey: "planId" });
user.belongsTo(plan, { foreignKey: "planId" });

// // Book model associations
// book.belongsTo(user, { foreignKey: "userId" });

// // User model associations
// user.hasMany(book, { foreignKey: "userId" });
// user.hasOne(author, { foreignKey: "authorId" });
// user.hasOne(publisher, { foreignKey: "publisherId" });
// user.belongsTo(plan, { foreignKey: "planId" }); // Corrected this line

// // Author model associations
// author.hasOne(user, { foreignKey: "authorId" });

// // Publisher model associations
// publisher.hasOne(user, { foreignKey: "publisherId" });

const models = {
  user,
  book,
  plan,
  userDetails,
};

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
