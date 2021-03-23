const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  authorId: {
    type: String,
    required: true,
  },
  taskId: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

module.exports = Comment = mongoose.model("Comment", CommentSchema);
