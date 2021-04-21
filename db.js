const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("poketrader", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    const User = sequelize.import("./models/user.js");
    const CardSet = sequelize.import("./models/cardset.js");
    const Trading = sequelize.import("./models/trading.js");

    User.hasOne(CardSet);
    CardSet.belongsTo(User);

    CardSet.hasOne(Trading);
    Trading.belongsTo(CardSet);
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
