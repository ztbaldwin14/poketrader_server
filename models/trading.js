const { DataTypes } = require("sequelize");
const db = require("../db");

const Trading = db.define("trades", {
  ownerID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cardSetID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
module.exports = Trading;
