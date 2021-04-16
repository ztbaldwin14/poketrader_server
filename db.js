const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("poketrader", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const User = sequelize.import("./models/user.js");
const CardSet = sequelize.import("./models/cardset.js");
const Trading = sequelize.import("./models/trading.js");
User.hasMany(CardSet);
CardSet.belongsTo(User);

User.hasMany(Trading);
Trading.belongsTo(User);
module.exports = sequelize;
