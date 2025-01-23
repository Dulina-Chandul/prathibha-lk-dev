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
import { Pencil, Plus, Trash } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const WordExplorer = () => {
  const [words, setWords] = useState([]);
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [examples, setExamples] = useState("");

  // Get all the words from DB
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
        setWords([]);
      }
    } catch (error) {
      console.error("Error fetching words:", error);
      setWords([]);
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
      console.log("Words updated successfully :", data);
      toast.success("Word updated successfully", {
        position: "top-right",
      });
    } catch (error) {
      console.error("Error updating word:", error);
    } finally {
    }
  };

  // Delete a word
  const handleDeleteWord = async (id) => {
    try {
      await deleteWordService(id);
      setWords(words.filter((word) => word._id !== id));
      toast.success("Word deleted successfully", {
        position: "top-right",
      });
    } catch (error) {
      console.error("Error deleting word:", error);
      toast.error("Failed to delete word", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="space-y-8 p-6">
      {/* Add a New Word Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Add a New Word</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddWord} className="space-y-4">
            <Input
              type="text"
              placeholder="Enter an english word"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              className="p-6 placeholder:text-lg"
              required
            />
            <Input
              type="text"
              placeholder="Enter the sinhala translation"
              value={translation}
              onChange={(e) => setTranslation(e.target.value)}
              className="p-6 placeholder:text-lg"
              required
            />
            <Input
              type="text"
              placeholder="Examples (comma-separated)"
              value={examples}
              onChange={(e) => setExamples(e.target.value)}
              className="p-6 placeholder:text-lg"
            />
            <Button
              type="submit"
              className="bg-[#a21caf] text-white font-bold  rounded-lg hover:bg-[#86198f] transition duration-300 ease-in-out py-6 px-6"
            >
              <Plus className="ml-1" size={20} />
              Add Word
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Display the Full List of Words */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold text-sm">Word</TableHead>
            <TableHead className="font-bold text-sm">Translation</TableHead>
            <TableHead className="font-bold text-sm">Examples</TableHead>
            <TableHead className="font-bold text-sm">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {words.map((word) => (
            <TableRow key={word._id}>
              <TableCell>{word.word}</TableCell>
              <TableCell>{word.translation}</TableCell>
              <TableCell>{word.examples.join(", ")}</TableCell>
              <TableCell className="space-x-2 flex flex-row">
                {/* Update Word Dialog */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white "
                    >
                      <Pencil className="mr-1" size={18} />
                      Edit
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-2xl">
                        Update Word
                      </DialogTitle>
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
                  className="bg-red-500 text-white hover:bg-red-600 hover:text-white"
                >
                  <Trash className="mr-1" size={18} />
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Toaster toastOptions={{ duration: 8000 }} /> */}
    </div>
  );
};

// Update Word Form
const UpdateWordForm = ({ word, onUpdate }) => {
  const [updatedWord, setUpdatedWord] = useState(word.word);
  const [updatedTranslation, setUpdatedTranslation] = useState(
    word.translation
  );
  const [updatedExamples, setUpdatedExamples] = useState(
    word.examples.join(",")
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({
      word: updatedWord,
      translation: updatedTranslation,
      examples: updatedExamples.split(","),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Word"
        value={updatedWord}
        className=" focus:border-purple-600  "
        onChange={(e) => setUpdatedWord(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Translation"
        value={updatedTranslation}
        className=" focus:border-purple-600"
        onChange={(e) => setUpdatedTranslation(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Examples (comma-separated)"
        value={updatedExamples}
        className=" focus:border-purple-600"
        onChange={(e) => setUpdatedExamples(e.target.value)}
      />
      <Button
        type="submit"
        className="bg-[#a21caf] text-white font-bold  rounded-lg hover:bg-[#86198f] transition duration-300 ease-in-out"
      >
        Save Changes
      </Button>
    </form>
  );
};

export default WordExplorer;
