import React, { useEffect, useState } from "react";
import axiosInstance from "@/api/axiosInstance";
import { Button } from "@/components/ui/button";

const WordsTab = () => {
  const [words, setWords] = useState([]);
  const [randomWord, setRandomWord] = useState(null);

  const fetchWords = async () => {
    try {
      const response = await axiosInstance.get("/wordExplorer/words");
      setWords(response.data);
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  };

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setRandomWord(words[randomIndex]);
  };

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <div>
      <Button onClick={getRandomWord} className="mb-4">
        Get Random Word
      </Button>

      {randomWord && (
        <div className="border p-4 rounded-lg">
          <h3 className="text-xl font-bold">{randomWord.word}</h3>
          <p className="text-gray-600">{randomWord.translation}</p>
          <ul className="list-disc pl-5">
            {randomWord.examples.map((example, index) => (
              <li key={index}>{example}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WordsTab;
