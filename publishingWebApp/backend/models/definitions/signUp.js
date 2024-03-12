const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");

class signUp extends Model {}

signUp.init(
  {
    userId: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
    userName: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(45),
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
module.exports = signUp;
