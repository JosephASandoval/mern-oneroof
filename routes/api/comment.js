const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const validateCommentInput = require("../../validation/comments");
const Comment = require("../../models/Comment");

router.get("/", (req, res) => {
  Comment.find()
    .then((comments) => res.json(comments))
    .catch((err) =>
      res.status(404).json({ commentsNotFound: "No comments found" })
    );
});

router.delete("/:id", (req, res) => {
  Comment.findByIdAndDelete(req.params.id)
    .then((comment) => res.json(`Comment successfully deleted`))
    .catch((err) =>
      res.status(404).json("Comment was not successfully deleted")
    );
});

router.post("/new", (req, res) => {
  const { errors, isValid } = validateCommentInput(req.body);
  const newComment = new Comment({
    authorId: req.body.authorId,
    taskId: req.body.taskId,
    body: req.body.body,
  });

  if (!isValid) {
    return res.status(400).json(errors);
  }

  newComment.save().then((comment) => res.json(comment));
});

router.get("/:taskId", (req, res) => {
  Comment.find({ taskId: req.params.taskId })
    .then((comments) => {
      res.json(comments);
    })
    .catch((err) =>
      res
        .status(404)
        .json({ tasksCommentsNotFound: "This task has no comments" })
    );
});

router.get("/:id", (req, res) => {
  Comment.findById(req.params.id)
    .then((comment) => res.json(comment))
    .catch((err) =>
      res.status(404).json({ commentNotFound: "No comment found" })
    );
});

router.patch("/edit/:id", (req, res) => {
  mongoose.set("useFindAndModify", false);
  const { errors, isValid } = validateCommentInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Comment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).then((comment) => res.json(comment));
});

module.exports = router;
