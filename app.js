require("dotenv").config();
let express = require("express");
let app = express();
let sequelize = require("./db");

const controllers = require("./controllers");

sequelize.sync({ force: true });
app.use(require("./middleware/headers"));
app.use(express.json());

app.use("/user", controllers.User);
app.use("/trading", controllers.Trading);
app.use("/cards", controllers.CardSet);

// app.use("/test", function (req, res) {
//   res.send("This is a message from the test endpoint on the server!");
// });

app.listen(3000, function () {
  console.log("App is listening on port 3000");
});
