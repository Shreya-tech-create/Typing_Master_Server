
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  googleId: { type: String },
  avatar: { type: String },
  isAdmin: {
    type: Boolean,
    default: false, // by default normal user
  },
});

module.exports = mongoose.model("User", userSchema);

