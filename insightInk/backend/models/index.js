const sequelize = require("../config/dbConfig");
const user = require("./definitions/user");
const book = require("./definitions/book");
const author = require("./definitions/author");
const publisher = require("./definitions/publisher");

// user.hasMany(book, { foreignKey: "userId" });
// book.belongsTo(user, { foreignKey: "userId" });

// author.hasOne(user, { foreignKey: "authorId" });
// user.belongsTo(author, { foreignKey: "authorId" });

// publisher.hasOne(user, { foreignKey: "publisherId" });
// user.belongsTo(publisher, { foreignKey: "publisherId" });


// Book model associations
book.belongsTo(user, { foreignKey: "userId" });

// User model associations
user.hasMany(book, { foreignKey: "userId" });
user.hasOne(author, { foreignKey: "authorId" });
user.hasOne(publisher, { foreignKey: "publisherId" });

// Author model associations
author.hasOne(user, { foreignKey: "authorId" });

// Publisher model associations
publisher.hasOne(user, { foreignKey: "publisherId" });

const models = {
  user,
  book,
  author,
  publisher,
};

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
