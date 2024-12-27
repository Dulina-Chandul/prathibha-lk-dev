import WordExplorer from "../../models/WordExplorer.js";

// Add a new word
export const addWord = async (req, res) => {
  try {
    const { word, translation, examples } = req.body;
    const newWord = new WordExplorer({ word, translation, examples });
    await newWord.save();
    res.status(201).json(newWord);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding word", error: error.message });
  }
};

// Get all words
export const getWords = async (req, res) => {
  try {
    const words = await WordExplorer.find();
    res.status(200).json(words);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching words", error: error.message });
  }
};

// Update a word
export const updateWord = async (req, res) => {
  try {
    const { id } = req.params;
    const { word, translation, examples } = req.body;
    const updatedWord = await WordExplorer.findByIdAndUpdate(
      id,
      { word, translation, examples },
      { new: true }
    );
    res.status(200).json(updatedWord);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating word", error: error.message });
  }
};

// Delete a word
export const deleteWord = async (req, res) => {
  try {
    const { id } = req.params;
    await WordExplorer.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting word", error: error.message });
  }
};
