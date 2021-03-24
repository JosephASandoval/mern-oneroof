const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const validateJoinInput = require("../../validation/joins");
const Join = require("../../models/Join");

router.get("/", (req, res) => {
  Join.find()
    .then((joins) => res.json(joins))
    .catch((err) => res.status(404).json({ joinsNotFound: "No Joins found" }));
});

router.post("/new", (req, res) => {
  const { errors, isValid } = validateJoinInput(req.body);

  if (!isValid) {
    return res.status(404).json(errors);
  }

  const newJoin = new Join({
    joinerId: req.body.joinerId,
    meetingId: req.body.meetingId,
  });

  newJoin.save().then((join) => res.json(join));
});

router.get("/:id", (req, res) => {
  Join.findById(req.params.id)
    .then((join) => res.json(join))
    .catch((err) =>
      res.status(404).json({ joinNotFound: "Join with that ID does not exist" })
    );
});

router.patch("/edit/:id", (req, res) => {
  mongoose.set("useFindAndModify", false);
  const { errors, isValid } = validateJoinInput(req.body);

  if (!isValid) {
    return res.status(404).json(errors);
  }

  Join.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((join) =>
    res.json(join)
  );
});

router.delete("/:id", (req, res) => {
  Join.findByIdAndDelete(req.params.id)
    .then((join) => res.json("Join successfully deleted"))
    .catch((err) => res.status(404).json("Join was not successfully deleted"));
});

router.get("/meetings/:meetingId", (req, res) => {
  Join.find({ meetingId: req.params.meetingId })
    .then((joins) => {
      res.json(joins);
    })
    .catch((err) =>
      res.status(404).json({
        meetingJoinsNotFound:
          "This meeting does not have any participants joining",
      })
    );
});

router.get("/joiner/:joinerId", (req, res) => {
  Join.find({ joinerId: req.params.joinerId })
    .then((joins) => res.json(joins))
    .catch((err) =>
      res
        .status(404)
        .json({ userJoinsNotFound: "This user had not joined any meetings" })
    );
});

module.exports = router;
