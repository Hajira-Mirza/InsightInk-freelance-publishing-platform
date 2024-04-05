const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");

class user extends Model {}

user.init(
  {
    userId: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    userName: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(34),
    },

    emailAddress: {
      unique: true,
      type: DataTypes.STRING(),
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING(),
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);
module.exports = user;
