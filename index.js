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

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS setup with multiple allowed origins
const allowedOrigins = [
  "http://localhost:5173",                       // local dev
  "https://frontend1-k6to.onrender.com",         // old deployed frontend (optional)
  "https://typing-master-frontend.onrender.com"  // current deployed frontend
];

const corsOptions = {
  origin: function(origin, callback){
    if(!origin) return callback(null, true); // for Postman or curl
    if(allowedOrigins.indexOf(origin) !== -1){
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  credentials: true
};

// Apply CORS middleware
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // handle preflight requests

// Body parser
app.use(express.json());

// Connect to DB
connectDB();

// Import routes
const testRoutes = require("./routes/testContentRoutes");
const scoreRoutes = require("./routes/typingScoreRoutes");
const leaderboardRoutes = require("./routes/leaderboardRoutes");
const authRoutes = require("./routes/authRoutes");
// Optional Game route
// const gameRoutes = require("./routes/gameRoutes");

// Use routes
app.use("/api/test", testRoutes);
app.use("/api/score", scoreRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
app.use("/api/auth", authRoutes);
// Optional Game route
// app.use("/api/game", gameRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Typing Speed Tester backend working ✅");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
