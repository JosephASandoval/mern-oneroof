const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const validateCompleteInput = require("../../validation/completes");
const Complete = require("../../models/Complete");

router.post("/new", (req, res) => {
  const { errors, isValid } = validateCompleteInput(req.body);

  if (!isValid) {
    return res.status(404).json(errors);
  }

  const newComplete = new Complete({
    completerId: req.body.completerId,
    taskId: req.body.taskId,
  });

  newComplete.save().then((complete) => res.json(complete));
});

router.patch("/edit/:id", (req, res) => {
  mongoose.set("useFindAndModify", false);
  const { errors, isValid } = validateCompleteInput(req.body);

  if (!isValid) {
    return res.status(404).json(errors);
  }

  Complete.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).then((complete) => res.json(complete));
});

router.get("/", (req, res) => {
  Complete.find()
    .then((completes) => res.json(completes))
    .catch((err) =>
      res.status(404).json({ completesNotFound: "No completes found" })
    );
});

router.get(`/task/:taskId`, (req, res) => {
  Complete.find({ taskId: req.params.taskId })
    .then((completes) => {
      res.json(completes);
    })
    .catch((err) =>
      res.status(404).json({
        taskCompletesNotFound: "This task does not have any completes",
      })
    );
});

router.delete("/:id", (req, res) => {
  Complete.findByIdAndDelete(req.params.id)
    .then((complete) => res.json("Complete successfully deleted"))
    .catch((err) =>
      res.status(400).json("Complete was not successfully deleted")
    );
});

module.exports = router;
