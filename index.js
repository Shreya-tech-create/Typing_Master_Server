// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");

// // Load env vars
// dotenv.config();

// // Import routes
// const testRoutes = require("./routes/testContentRoutes");
// const scoreRoutes = require("./routes/typingScoreRoutes");
// const leaderboardRoutes = require("./routes/leaderboardRoutes");
// const authRoutes = require("./routes/authRoutes");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middlewares
// app.use(cors());
// app.use(express.json());

// // Connect to DB
// connectDB();

// // Use routes
// app.use("/api/test", testRoutes);
// app.use("/api/score", scoreRoutes);
// app.use("/api/leaderboard", leaderboardRoutes); // ✅ Route confirmed
// app.use("/api/auth", authRoutes);

// // Default route
// app.get("/", (req, res) => {
//   res.send("Typing Speed Tester backend working");
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// -------------------------------------------------------------------------------------------------
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load env vars
dotenv.config();

// Import routes
const testRoutes = require("./routes/testContentRoutes");
const scoreRoutes = require("./routes/typingScoreRoutes");
const leaderboardRoutes = require("./routes/leaderboardRoutes");
const authRoutes = require("./routes/authRoutes");
// ✅ (Optional) Game route — future use
// const gameRoutes = require("./routes/gameRoutes");  // uncomment when game backend is ready

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// Use routes
app.use("/api/test", testRoutes);
app.use("/api/score", scoreRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
app.use("/api/auth", authRoutes);
// ✅ (Optional) Game route setup
// app.use("/api/game", gameRoutes);  // uncomment when backend logic is done

// Default route
app.get("/", (req, res) => {
  res.send("Typing Speed Tester backend working");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
