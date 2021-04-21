const { Router } = require("express");
const CardSet = require("../db").import("../models/cardset");
const validateSession = require("../middleware/validate-session");
const router = Router();

//Creating cards
router.post("/create", validateSession, function (req, res) {
  console.log(req.user.id);
  const cardEntry = {
    setNumber: req.body.cards.setNumber,
    setName: req.body.cards.setName,
    cardTotals: req.body.cards.cardTotals,
    cardNumber: req.body.cards.cardNumber,
    cardName: req.body.cards.cardName,
    condition: req.body.cards.condition,
    rarity: req.body.cards.rarity,
    userId: req.user.id,
  };
  CardSet.create(cardEntry)
    .then((cards) => res.status(200).json(cards))
    .catch((err) => res.status(500).json({ error: err }));
});

//Get My Cards
router.get("/get", validateSession, (req, res) => {
  CardSet.findAll()
    .then((cards) => res.status(200).json(cards))
    .catch((err) => res.status(500).json({ error: err }));
});

//Updating Card Information
router.put("/update/:id", validateSession, function (req, res) {
  const updateCardEntry = {
    setNumber: req.body.cards.setNumber,
    setName: req.body.cards.setName,
    cardTotals: req.body.cards.cardTotals,
    cardNumber: req.body.cards.cardNumber,
    cardName: req.body.cards.cardName,
    condition: req.body.cards.condition,
    rarity: req.body.cards.rarity,
    userId: req.user.id,
  };

  const query = { where: { id: req.params.id, userId: req.user.id } };

  CardSet.update(updateCardEntry, query)
    .then((cards) => res.status(200).json(cards))
    .catch((err) => res.status(500).json({ error: err }));
});

//Delete Cards
router.delete("/:id", validateSession, function (req, res) {
  const query = { where: { id: req.params.id, userId: req.user.id } };

  CardSet.destroy(query)
    .then(() => res.status(200).json({ message: "Card deleted" }))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
