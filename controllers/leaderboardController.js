const Leaderboard = require("../models/Leaderboard.js");

// Get top 10 leaders sorted by speed with user details populated
exports.getLeaders = async (req, res) => {
  try {
    const leaders = await Leaderboard.find()
      // .populate("user", "username") 
      .sort({ speed: -1 })
      // .limit(60);
      console.log("finish",leaders);
    res.json(leaders);
  } catch (error) {
    console.error("Error fetching leaders:", error);
    res.status(500).json({ message: "Server error while fetching leaders" });
  }
};

// Add new score to leaderboard
exports.addLeader = async (req, res) => {
  try {
    const newLeader = new Leaderboard(req.body);
    await newLeader.save();
    res.status(201).json(newLeader);
  } catch (error) {
    console.error("Error saving leader score:", error);
    res.status(500).json({ message: "Error saving score" });
  }
};

// Get single leader by ID with user details populated
exports.getLeaderById = async (req, res) => {
  try {
    const leader = await Leaderboard.findById(req.params.id)
      .populate("user", "username");
    if (!leader) {
      return res.status(404).json({ message: "Leader not found" });
    }
    res.json(leader);
  } catch (error) {
    console.error("Error fetching leader by ID:", error);
    res.status(500).json({ message: "Server error" });
  }
};
