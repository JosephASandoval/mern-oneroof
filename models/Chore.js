const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChoreSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  house: {
    type: Schema.Types.ObjectId,
    ref: "House",
  },
  is_done: {
      type: Boolean,
      default: false,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  priority: {
    type: String,
    default: null
  }
});

module.exports = Chore = mongoose.model("chore", ChoreSchema);
