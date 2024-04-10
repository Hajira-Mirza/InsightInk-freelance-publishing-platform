const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");

class publisher extends Model {}

publisher.init(
  {
    publisherId: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },

    publisherName: {
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
module.exports = publisher;