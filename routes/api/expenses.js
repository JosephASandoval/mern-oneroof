const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Expense = require("../../models/Expense");
const validateExpenseInput = require("../../validation/expenses");

router.get("/test", (req, res) => {
  res.json({ msg: "This is the expenses route" });
});

router.get("/", (req, res) => {
  Expense.find()
    .sort({ date: -1 })
    .then((expenses) => res.json(expenses))
    .catch((err) => res.status(404).json({ noexpensesfound: "No expenses found" }));
});

router.get("/user/:user_id", (req, res) => {
  Expense.find({ user: req.params.user_id })
    .then((expenses) => res.json(expenses))
    .catch((err) =>
      res.status(404).json({ noexpensesfound: "No expenses found from that user" })
    );
});

router.get("/:id", (req, res) => {
  Expense.findById(req.params.id)
    .then((expense) => res.json(expense))
    .catch((err) =>
      res.status(404).json({ noexpensefound: "No expense found with that ID" })
    );
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateExpenseInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newExpense = new Expense({
      user: req.user.id,
      body: req.body.body,
      amount: req.body.amount,
    });

    newExpense.save().then((expense) => res.json(expense));
  }
);

router.route("/:id").delete((req, res) => {
  Expense.findByIdAndDelete(req.params.id)
    .then(() => res.json("Expense deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
