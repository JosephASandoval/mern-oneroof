const express = require("express");
const router = express.Router();
const Task = require("../../models/Task");
const validateTaskInput = require("../../validation/tasks");
const mongoose = require("mongoose");

//RETRIEVE ALL TASKS
router.get("/", (req, res) => {
  Task.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.status(404).json({ tasksNotFound: "No tasks found" }));
});

// CREATE NEW TASK
router.post("/new", (req, res) => {
  const { errors, isValid } = validateTaskInput(req.body);
  const newTask = new Task({
    authorId: req.body.authorId,
    name: req.body.name,
    tip: req.body.tip,
    instructions: req.body.instructions,
    comments: req.body.comments,
    workTime: req.body.workTime,
    difficulty: req.body.difficulty,
    category: req.body.category,
    numCompletes: req.body.numCompletes,
    photoId: req.body.photoId,
    photoUrl: req.body.photoUrl,
  });

  if (!isValid) {
    return res.status(400).json(errors);
  }

  newTask.save().then((task) => res.json(task));
});

//RETRIEVE ONE TASK BY ID
router.get("/:id", (req, res) => {
  Task.findById(req.params.id)
    .then((task) => res.json(task))
    .catch((err) =>
      res.status(404).json({ taskNotFound: "Task with that ID does not exist" })
    );
});

//RETRIEVE TASKS OF ONE USER
router.get("/author/:authorId", (req, res) => {
  Task.find({ authorId: req.params.authorId })
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) =>
      res
        .status(404)
        .json({ userTasksNotFound: "This user does not have any tasks" })
    );
});

// SEARCH TASKS BY EACH CATEGORY
router.get("/category/:categoryName", (req, res) => {
  Task.find({ category: req.params.categoryName })
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) =>
      res.status(404).json({
        categoryTasksNotFound: "There are no tasks in this category",
      })
    );
});

//DELETE TASK
router.delete("/:id", (req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then((task) => res.json("Task successfully deleted"))
    .catch((err) => res.status(400).json("Task was not successfully deleted"));
});

//EDIT A TASK
router.patch("/edit/:id", (req, res) => {
  mongoose.set("useFindAndModify", false);
  const { errors, isValid } = validateTaskInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).then((task) => res.json(task));
});

router.post("/search-tasks", (req, res) => {
  let taskPattern = new RegExp(req.body.query, "i");

  Task.find({ name: { $regex: taskPattern } })
    .then((task) => {
      res.json({ task });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
//MAKE SURE TO HAVE REGULAR ROUTES ABOVE ROUTES WITH WILDCARDS OTHER WISE YOU GET THIS BUG: UnhandledPromiseRejectionWarning: CastError: Cast to ObjectId failed for value
