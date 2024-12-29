import express from "express";
import {
  addWord,
  getWords,
  updateWord,
  deleteWord,
} from "../../controllers/word-controller/wordController.js";

const router = express.Router();

// CRUD Routes
router.post("/words/new", addWord); // Add a new word
router.get("/words", getWords); // Get all words
router.put("/words/:id", updateWord); // Update a word
router.delete("/words/:id", deleteWord); // Delete a word

export default router;
