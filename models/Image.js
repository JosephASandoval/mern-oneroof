const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  postId: {
    type: Schema.Types.ObjectId,
    ref: "post",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  src: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
});

const Photo = mongoose.model("photos", PhotoSchema);
module.exports = Photo;
