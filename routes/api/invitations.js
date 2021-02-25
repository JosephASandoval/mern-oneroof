const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const House = require("../../models/House");
const Invitation = require("../../models/Invitation");
const validateInvitationInput = require("../../validation/invitations");

router.get("/test", (req, res) => {
    res.json({ msg: "This is the invitations route" });
  }
);

router.get("/", (req, res) => {
  res.json({ msg: "Welcome to the invitations page" })
})

router.post("/new/:houseId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateInvitationInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const houseId = req.params.houseId;
    const houseCreator = req.body.houseCreator;
    const newHousemate = req.body.newHousemate;
    const message = req.body.message;
    const newInvite = new Invitation({
      houseId,
      houseCreator, // <= id
      newHousemate, // <= id
      message,
    });
    
    newInvite.save()
    
    House.findById(houseId)
      .then((house) => {
        house.residents.push(newHousemate)
        house.save()
        res.json(house)
      });
      
  }
)

module.exports = router;