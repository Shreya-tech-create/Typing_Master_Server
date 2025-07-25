
const mongoose = require("mongoose");


const typingScoreSchema = new mongoose.Schema({
  user:        { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  speed:       Number,
  accuracy:    Number,
  timeTaken:   Number,
  errorCount:  Number,
  createdAt:   { type: Date, default: Date.now },
});

module.exports = mongoose.model("TypingScore", typingScoreSchema);
