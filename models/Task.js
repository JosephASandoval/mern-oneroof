const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema(
  {
    authorId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    instructions: {
      type: Array,
      required: true,
    },
    comments: {
      type: Array,
      required: false,
    },
    workTime: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    numCompletes: {
      type: Number,
      required: false,
    },
    photoId: {
      type: String,
      required: true,
    },
    photoUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Task = mongoose.model("Task", TaskSchema);
