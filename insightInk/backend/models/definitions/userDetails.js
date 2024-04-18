const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");

class userDetails extends Model {}

userDetails.init(
  {
    userDetailsId: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
    userName: {
      allowNull: false,
      type: DataTypes.STRING(34),
    },
    location: {
      allowNull: false,
      type: DataTypes.STRING(60),
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    about: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      experience: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      startDate: {
        allowNull: false,
      type: DataTypes.STRING(34),
      },
      endDate: {
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
module.exports = userDetails;