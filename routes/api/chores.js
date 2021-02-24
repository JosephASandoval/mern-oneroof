const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Chore = require("../../models/Chore");
const validateChoreInput = require("../../validation/chores");

router.get("/test", (req, res) => {
  res.json({ msg: "This is the chores route" });
});

router.get("/", (req, res) => {
  Chore.find()
    .sort({ date: -1 })
    .then((chores) => res.json(chores))
    .catch((err) => res.status(404).json({ nopostsfound: "No chores found" }));
});

router.get("/user/:user_id", (req, res) => {
  Chore.find({ user: req.params.user_id })
    .then((chores) => res.json(chores))
    .catch((err) =>
      res.status(404).json({ nopostsfound: "No chores found from that user" })
    );
});

router.get("/:id", (req, res) => {
  Chore.findById(req.params.id)
    .then((chore) => res.json(chore))
    .catch((err) =>
      res.status(404).json({ nopostfound: "No chore found with that ID" })
    );
});

router.chore(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateChoreInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newChore = new Chore({
      user: req.user.id,
      text: req.body.text,
    });

    newChore.save().then((chore) => res.json(chore));
  }
);

module.exports = router;
