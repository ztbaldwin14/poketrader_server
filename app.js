require("dotenv").config();
let express = require("express");
let app = express();
let sequelize = require("./db");

// let user = require("./controllers/usercontroller");
const controller = require("./controllers");

sequelize.sync();
app.use(express.json());

app.use("/user", controller.User);
// app.use("/test", function (req, res) {
//   res.send("This is a message from the test endpoint on the server!");
// });

app.listen(3000, function () {
  console.log("App is listening on port 3000");
});
