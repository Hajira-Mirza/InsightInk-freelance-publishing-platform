const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");

class signIn extends Model {}

signIn.init(
  {
    userId: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
    emailAddress: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(),
    },
    password: {
      type: DataTypes.STRING(20),
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
module.exports = signIn;