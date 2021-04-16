require("dotenv").config();
let express = require("express");
let app = express();
let sequelize = require("./db");

const controllers = require("./controllers");

sequelize.sync();
app.use(express.json());

app.use("/user", controllers.User);
app.use("/cards", controllers.CardSet);
// app.use("/trading", controllers.Trade);

// app.use("/test", function (req, res) {
//   res.send("This is a message from the test endpoint on the server!");
// });

app.listen(3000, function () {
  console.log("App is listening on port 3000");
});
