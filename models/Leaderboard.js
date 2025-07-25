
const mongoose = require("mongoose");

const leaderboardSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  speed: {
    type: Number,
    required: true
  },
  accuracy: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Leaderboard", leaderboardSchema);
