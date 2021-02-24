const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const House = require("../../models/House");
const validateHouseInput = require("../../validation/house");

router.get("/test", (req, res) => {
  res.json({ msg: "This is the house route" });
});


router.get("/user/:user_id", (req, res) => {
  House.find({ user: req.params.user_id })
    .then((houses) => res.json(houses))
    .catch((err) =>
      res.status(404).json({ nohousesfound: "No houses found from that user" })
    );
});

router.get("/:id", (req, res) => {
  House.findById(req.params.id)
    .then((house) => res.json(house))
    .catch((err) =>
      res.status(404).json({ nohousefound: "No house found with that ID" })
    );
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateHouseInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newHouse = new House({
      user: req.user.id,
      name: req.body.name,
    });

    newHouse.save().then((house) => res.json(house));
  }
);

module.exports = router;
