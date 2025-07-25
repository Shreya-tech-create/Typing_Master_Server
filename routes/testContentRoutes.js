

const express = require("express");
const router = express.Router();
const { auth, adminOnly } = require("../middlewares/auth"); // 👈 import both
const {
  addTestContent,
  getTestContent,
} = require("../controllers/testContentController");

// ✅ Add paragraph — only for admin
router.post("/add", auth, adminOnly, addTestContent);

// ✅ Get one random paragraph — public
router.get("/", getTestContent);

module.exports = router;
