const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");

class author extends Model {}

author.init(
  {
    authorId: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },

    authorName: {
      allowNull: false,
      type: DataTypes.STRING(34),
    },
    country: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    bio: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);
module.exports = author;