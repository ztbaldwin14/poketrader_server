const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let router = require("express").Router();
const User = require("../db").import("../models/user");

//Create User
router.post("/signup", function (req, res) {
  User.create({
    email: req.body.email,
    passwordhash: bcrypt.hashSync(req.body.password, 13),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    zipCode: req.body.zipCode,
  })
    .then(function registerSuccess(user) {
      let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24,
      });
      res.json({
        user: user,
        message: "User Successfully Created",
        sessionToken: token,
      });
    })
    .catch((err) => res.status(502).json({ error: err }));
});

//User Login
router.post("/login", function (req, res) {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then(function loginSuccess(user) {
      if (user) {
        bcrypt.compare(req.body.password, user.passwordhash, function (
          err,
          matches
        ) {
          if (matches) {
            let token = jwt.sign(
              { id: user.id, email: user.email },
              process.env.JWT_SECRET,
              {
                expiresIn: 60 * 60 * 24,
              }
            );
            res.status(200).json({
              user: user,
              message: "User Successfully Logged in!",
              sessionToken: token,
            });
          } else {
            res.status(502).send({ error: "Login Failed" });
          }
        });
      } else {
        res.status(500).json({ error: "User does not exist" });
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
