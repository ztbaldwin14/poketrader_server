const express = require("express");
const Trade = require("../db").import("../models/trading");
const validateSession = require("../middleware/validate-session");
const router = express.Router();

//Create Trade
router.post("/create", validateSession, (req, res) => {
  console.log(req.user.id);
  const tradeEntry = {
    userId: req.body.trades.userId,
  };
  Trade.create(tradeEntry)
    .then((trades) => res.status(200).json(trades))
    .catch((err) => res.status(502).json({ error: err }));
});

//Get Trades
router.get("/get", validateSession, (req, res) => {
  let userid = req.user.id;
  Trade.findAll({
    where: { ownerid: userid },
  })
    .then((trades) => res.status(200).json(trades))
    .catch((err) => res.status(500).json({ error: err }));
});

//Delete Trade
router.delete("/:id", validateSession, function (req, res) {
  const query = { where: { id: req.params.id, ownerid: req.user.id } };

  Trade.destroy(query)
    .then(() => res.status(200).json({ message: "Trade deleted" }))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
