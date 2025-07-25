// const TypingScore = require("../models/TypingScore");
// const User = require("../models/User");

// // ✅ GET all scores (Top 10 sorted by speed)
// exports.getScores = async (req, res) => {
//   try {
//     const scores = await TypingScore.find()
//       .sort({ speed: -1 })
//       // .limit(10)
//       .populate("user", "username");

//     res.status(200).json(scores);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // ✅ POST new score
// exports.addScore = async (req, res) => {
//   const { user, speed, accuracy, timeTaken, errorCount } = req.body;

// // accuracy
// // : 
// // 7
// // errorCount
// // : 
// // 70
// // speed
// // : 
// // 0
// // timeTaken
// // : 
// // 3.33
// // user
// // : 
// // "6856c5c7ff21537bde86000e"
//   if (!user || !speed || !accuracy || timeTaken == null || errorCount == null) {
//       console.log("data 38",user, speed, accuracy, timeTaken, errorCount);
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//     const newScore = new TypingScore({
//       user,
//       speed,
//       accuracy,
//       timeTaken,
//       errorCount,
//     });

//     await newScore.save();

//     const populatedScore = await newScore.populate("user", "username");

//     res.status(201).json({
//       message: "Score added successfully",
//       score: populatedScore,
//     });
//   } catch (err) {
//     console.error("❌ Error in addScore:", err);
//     res.status(500).json({ message: "Failed to add score", error: err });
//   }
// };


// -----------------------------------------------------------------------------------------------------------------

const TypingScore = require("../models/TypingScore");
const User = require("../models/User");

// GET all scores (Top 10 sorted by speed)
exports.getScores = async (req, res) => {
  try {
    const scores = await TypingScore.find()
      .sort({ speed: -1 })
      //.limit(10)
      .populate("user", "username");

    res.status(200).json(scores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET scores by specific user ID
exports.getScoresByUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const scores = await TypingScore.find({ user: userId }).populate("user", "username");
    if (!scores) {
      return res.status(404).json({ message: "No scores found for this user" });
    }
    res.status(200).json(scores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST new score
exports.addScore = async (req, res) => {
  const { user, speed, accuracy, timeTaken, errorCount } = req.body;

  if (!user || !speed || !accuracy || timeTaken == null || errorCount == null) {
    console.log("data 38", user, speed, accuracy, timeTaken, errorCount);
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newScore = new TypingScore({
      user,
      speed,
      accuracy,
      timeTaken,
      errorCount,
    });

    await newScore.save();

    const populatedScore = await newScore.populate("user", "username");

    res.status(201).json({
      message: "Score added successfully",
      score: populatedScore,
    });
  } catch (err) {
    console.error("❌ Error in addScore:", err);
    res.status(500).json({ message: "Failed to add score", error: err });
  }
};
