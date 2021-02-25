const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Post = require("../../models/Post");
const validatePostInput = require("../../validation/posts");

// test
router.get("/test", (req, res) => {
  res.json({ msg: "This is the posts route" });
});

// getPosts
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then((posts) => res.json(posts))
    .catch((err) => res.status(404).json({ nopostsfound: "No posts found" }));
});

// getUserPost
router.get("/user/:user_id", (req, res) => {
  Post.find({ user: req.params.user_id })
    .then((posts) => res.json(posts))
    .catch((err) =>
      res.status(404).json({ nopostsfound: "No posts found from that user" })
    );
});

// getPost
router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) =>
      res.status(404).json({ nopostfound: "No post found with that ID" })
    );
});

// createPost
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      user: req.user.id,
      text: req.body.text,
    });

    newPost
      .save()
      // .then((post) => res.json(post))
      .then(() => res.json("Post created!"))
      .catch((err) => res.status(400).json("Error: " + err));
  }
);

// updatePost
router.route("/:id").patch((req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      post.text = req.body.text;

      post
        .save()
        // .then((post) => res.json(post))
        .then(() => res.json("Post updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// deletePost
router.route("/:id").delete((req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json("Post deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
