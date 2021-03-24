const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MeetingSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  hostId: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  photoUrl: {
    type: String,
    required: true,
  },
  photoId: {
    type: String,
    required: true,
  },
  usersJoined: [
    { type: Schema.Types.ObjectId, ref: "meetings", required: false },
  ],
});

module.exports = Meeting = mongoose.model("Meeting", MeetingSchema);
