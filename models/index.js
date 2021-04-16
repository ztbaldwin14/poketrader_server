const User = require("./user");
const CardSet = require("./cardset");
const Trading = require("./trading");

// Setup Associations
// User.hasMany(CardSet);
// CardSet.belongsTo(User);

// User.hasMany(Trading);
// Trading.belongsTo(User);
module.exports = {
  User,
  CardSet,
  Trading,
};
