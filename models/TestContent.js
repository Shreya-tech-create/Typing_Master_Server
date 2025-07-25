const mongoose = require("mongoose");

const testContentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("TestContent", testContentSchema);