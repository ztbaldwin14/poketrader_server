const { DataTypes } = require("sequelize");
const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
  const Trading = sequelize.define("trades", {
    ownerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cardSetID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Trading;
};
