const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");

class book extends Model {}

book.init(
  {
    bookId: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },

    publisherName: {
      allowNull: false,
      type: DataTypes.STRING(34),
    },
    authorName: {
      allowNull: false,
      type: DataTypes.STRING(34),
    },
    bookInfo: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    bookName: {
      allowNull: false,
      type: DataTypes.STRING(34),
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);
module.exports = book;
