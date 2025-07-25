

const express = require("express");
const router = express.Router();
const typingScoreController = require("../controllers/typingScoreController");

// Existing routes
router.get("/", typingScoreController.getScores);
router.post("/", typingScoreController.addScore);

// New route for fetching scores by user ID
router.get("/user/:userId", typingScoreController.getScoresByUser);

module.exports = router;

