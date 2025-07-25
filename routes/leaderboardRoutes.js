const express = require("express");
const router = express.Router();

const {
  getLeaders,
  addLeader,
  getLeaderById,
} = require("../controllers/leaderboardController.js");

// GET request to fetch top 10 leaders sorted by speed
router.get("/", getLeaders);

// POST request to add a new leader score to the leaderboard
router.post("/", addLeader);

// GET request to fetch a single leader by their ID
router.get("/:id", getLeaderById);

module.exports = router;
