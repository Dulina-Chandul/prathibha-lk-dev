import mongoose from "mongoose";

const wordExplorerSchema = new mongoose.Schema({
  word: { type: String, required: true },
  translation: { type: String, required: true },
  examples: { type: [String], default: [] },
});

export default mongoose.model("WordExplorer", wordExplorerSchema);
