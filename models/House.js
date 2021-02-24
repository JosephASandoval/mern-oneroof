const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HouseSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = House = mongoose.model("House", HouseSchema);
