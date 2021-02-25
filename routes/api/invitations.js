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

    const newInvite = new Invitation({
      houseId: req.body.houseId,
      houseCreator: req.body.houseCreator.id,
      newHousemate: req.body.newHousemate.id,
      message: req.body.message
    });
    debugger
    //reference house as well
    //<house reference>.push(newInvite.newHousemate)
    // House.houseId.residents.push(newInvite.newHousemate);
    
    // houseId.id.residents.push(newInvite.newHousemate),
    let thisHouse = House.findById(newInvite.houseId);
    debugger
    thisHouse.residents.push(newInvite.newHousemate);
    debugger
    newInvite.save().then(
      () => res.json({ 
        success: "You have successfully invited a new housemate!"
      }))
    }
)

module.exports = router;