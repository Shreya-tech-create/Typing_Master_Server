
const TestContent = require("../models/TestContent");

// Add paragraph (only for logged-in users)
const addTestContent = async (req, res) => {
  try {
    const { content } = req.body;

    if (!content || content.trim() === "") {
      return res.status(400).json({ message: "Content cannot be empty" });
    }

    const newContent = new TestContent({ content: content.trim() });
    await newContent.save();

    res.status(201).json({ message: "Test content added successfully", data: newContent });
  } catch (error) {
    res.status(500).json({ message: "Failed to add test content", error });
  }
};

// Get one random paragraph (public)
const getTestContent = async (req, res) => {
  try {
    const count = await TestContent.countDocuments();
    if (count === 0) {
      return res.status(404).json({ message: "No test content found" });
    }

    const randomIndex = Math.floor(Math.random() * count);
    const randomParagraph = await TestContent.findOne().skip(randomIndex);

    res.status(200).json(randomParagraph);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch test content", error });
  }
};

module.exports = { addTestContent, getTestContent };
