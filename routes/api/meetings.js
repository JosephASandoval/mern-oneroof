const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const validateMeetingInput = require("../../validation/meetings");
const Meeting = require("../../models/Meeting");
const User = require("../../models/User");

router.get("/", (req, res) => {
  Meeting.find()
    .then((meetings) => res.json(meetings))
    .catch((err) =>
      res.status(404).json({ meetingsNotFound: "No Meetings found" })
    );
});

router.post("/new", (req, res) => {
  const { errors, isValid } = validateMeetingInput(req.body);
  const newMeeting = new Meeting({
    name: req.body.name,
    hostId: req.body.hostId,
    location: req.body.location,
    description: req.body.description,
    date: req.body.date,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    photoUrl: req.body.photoUrl,
    photoId: req.body.photoId,
  });

  if (!isValid) {
    return res.status(400).json(errors);
  }

  newMeeting.save().then((meeting) => res.json(meeting));
});

router.get("/:id", (req, res) => {
  Meeting.findById(req.params.id)
    .then((meeting) => res.json(meeting))
    .catch((err) =>
      res
        .status(404)
        .json({ meetingNotFound: "Meeting with that ID does not exist" })
    );
});

router.get("/host/:hostId", (req, res) => {
  Meeting.find({ hostId: req.params.hostId })
    .then((meetings) => res.json(meetings))
    .catch((err) =>
      res
        .status(404)
        .json({ userMeetingsNotFound: "This user does not have any meetings" })
    );
});

router.patch("/edit/:id", (req, res) => {
  mongoose.set("useFindAndModify", false);
  const { errors, isValid } = validateMeetingInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Meeting.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).then((meeting) => res.json(meeting));
});

router.delete("/:id", (req, res) => {
  Meeting.findByIdAndDelete(req.params.id)
    .then((meeting) => res.json("Meeting successfully deleted"))
    .catch((err) =>
      res.status(404).json("Meeting was not successfully deleted")
    );
});

module.exports = router;
