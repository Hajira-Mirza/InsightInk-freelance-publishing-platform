const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");

class plan extends Model {}

plan.init(
  {
    planId: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
    planName: {
      allowNull: false,
      type: DataTypes.STRING(34),
    },
    planPrice: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    planInterval: {
      type: DataTypes.ENUM("month", "year"),
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
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
module.exports = plan;
