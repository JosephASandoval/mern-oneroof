const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InvitationSchema = new Schema({
  houseId: {
    type: String,
    required: true,
  },
  houseCreatorId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  newHousemateId: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Invitation = mongoose.model("Invitation", InvitationSchema);