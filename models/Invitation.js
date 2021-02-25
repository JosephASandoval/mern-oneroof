const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const House = mongoose.model("House");

const InvitationSchema = new Schema({
  houseId: {
    type: Schema.Types.ObjectId,
    ref: "House",
  },
  houseCreator: {
    type: Schema.Types.ObjectId,
    refPath: House.user,
  },
  newHousemate: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  message: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Invitation = mongoose.model("Invitation", InvitationSchema);