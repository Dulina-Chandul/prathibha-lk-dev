import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  addWordService,
  getWordsService,
  updateWordService,
  deleteWordService,
} from "@/services/services";

const WordExplorer = () => {
  const [words, setWords] = useState([]);
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [examples, setExamples] = useState("");

  // Fetch words from the server
  useEffect(() => {
    fetchWords();
  }, []);

  const fetchWords = async () => {
    try {
      const data = await getWordsService();
      if (Array.isArray(data)) {
        setWords(data);
      } else {
        console.error("Expected an array but got:", data);
        setWords([]); // Fallback to an empty array
      }
    } catch (error) {
      console.error("Error fetching words:", error);
      setWords([]); // Fallback to an empty array
    }
  };

  // Add a new word
  const handleAddWord = async (e) => {
    e.preventDefault();
    const newWord = { word, translation, examples: examples.split(",") };

    try {
      const data = await addWordService(newWord);
      setWords([...words, data]);
      setWord("");
      setTranslation("");
      setExamples("");
    } catch (error) {
      console.error("Error adding word:", error);
    }
  };

  // Update a word
  const handleUpdateWord = async (id, updatedWord) => {
    try {
      const data = await updateWordService(id, updatedWord);
      setWords(words.map((word) => (word._id === id ? data : word)));
    } catch (error) {
      console.error("Error updating word:", error);
    }
  };

  // Delete a word
  const handleDeleteWord = async (id) => {
    try {
      await deleteWordService(id);
      setWords(words.filter((word) => word._id !== id));
    } catch (error) {
      console.error("Error deleting word:", error);
    }
  };

  return (
    <div className="space-y-8 p-6">
      {/* Add a New Word Form */}
      <Card>
        <CardHeader>
          <CardTitle>Add a New Word</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddWord} className="space-y-4">
            <Input
              type="text"
              placeholder="Word"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Translation"
              value={translation}
              onChange={(e) => setTranslation(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Examples (comma-separated)"
              value={examples}
              onChange={(e) => setExamples(e.target.value)}
            />
            <Button type="submit">Add Word</Button>
          </form>
        </CardContent>
      </Card>

      {/* Display the Full List of Words */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Word</TableHead>
            <TableHead>Translation</TableHead>
            <TableHead>Examples</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {words.map((word) => (
            <TableRow key={word._id}>
              <TableCell>{word.word}</TableCell>
              <TableCell>{word.translation}</TableCell>
              <TableCell>{word.examples.join(", ")}</TableCell>
              <TableCell className="space-x-2">
                {/* Update Word Dialog */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Update</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Update Word</DialogTitle>
                    </DialogHeader>
                    <UpdateWordForm
                      word={word}
                      onUpdate={(updatedWord) =>
                        handleUpdateWord(word._id, updatedWord)
                      }
                    />
                  </DialogContent>
                </Dialog>
                <Button
                  variant="destructive"
                  onClick={() => handleDeleteWord(word._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

// Update Word Form (used inside the Dialog)
const UpdateWordForm = ({ word, onUpdate }) => {
  const [updatedWord, setUpdatedWord] = useState(word.word);
  const [updatedTranslation, setUpdatedTranslation] = useState(
    word.translation
  );
  const [updatedExamples, setUpdatedExamples] = useState(
    word.examples.join(",")
  );

  const handleSubmit = () => {
    onUpdate({
      word: updatedWord,
      translation: updatedTranslation,
      examples: updatedExamples.split(","),
    });
  };

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Word"
        value={updatedWord}
        onChange={(e) => setUpdatedWord(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Translation"
        value={updatedTranslation}
        onChange={(e) => setUpdatedTranslation(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Examples (comma-separated)"
        value={updatedExamples}
        onChange={(e) => setUpdatedExamples(e.target.value)}
      />
      <Button onClick={handleSubmit}>Save Changes</Button>
    </div>
  );
};

export default WordExplorer;
