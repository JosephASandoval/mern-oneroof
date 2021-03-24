const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompleteSchema = new Schema({
  completerId: {
    type: String,
    required: true,
  },
  taskId: {
    type: String,
    required: true,
  },
});

module.exports = Complete = mongoose.model("Complete", CompleteSchema);
