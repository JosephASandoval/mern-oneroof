const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    photoId: {
      type: String,
      required: false,
    },
    photoUrl: {
      type: String,
      required: false,
    },
    completedTasks: [
      { type: Schema.Types.ObjectId, ref: "tasks", required: false },
    ],
    eventsParticipating: [
      { type: Schema.Types.ObjectId, ref: "users", required: false },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongoose.model("User", UserSchema);
