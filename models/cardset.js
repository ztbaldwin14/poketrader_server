const { DataTypes } = require("sequelize");
const db = require("../db");

const CardSet = db.define("cardset", {
  ownerID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  setNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  setName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cardTotals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cardNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cardName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  condition: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rarity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = CardSet;