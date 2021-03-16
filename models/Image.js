const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  // choreId: {
  //   type: Schema.Types.ObjectId,
  //   ref: "chore"
  // },
  date: {
    type: Date,
    default: Date.now
  },
  src: {
    type: String,
    // required: true
  },
  fileName: {
    type: String,
    // required: true
  }
});

const Image = mongoose.model("images", ImageSchema);
module.exports = Image;
