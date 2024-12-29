import React, { useEffect, useState } from "react";
import axiosInstance from "@/api/axiosInstance";

const RandomWordPage = () => {
  const [words, setWords] = useState([]);
  const [randomWord, setRandomWord] = useState(null);

  // Fetch words
  const fetchWords = async () => {
    try {
      const response = await axiosInstance.get("/wordExplorer/words");
      setWords(response.data);
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  };

  // Generate a random word
  const getRandomWord = () => {
    if (words.length > 0) {
      const randomIndex = Math.floor(Math.random() * words.length);
      setRandomWord(words[randomIndex]);
    }
  };

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#3168ba] to-[#73c3e8] text-white rounded-2xl">
      <h1 className="text-4xl font-bold mb-8 animate-fade-in">
        Random Word Explorer
      </h1>

      {randomWord ? (
        <div className="min-h-[10rem]   bg-white text-primary-foreground p-14 rounded-xl shadow-lg w-4/5 sm:w-1/2 text-center">
          <h2 className="text-3xl font-semibold mb-2 ">
            <span className="font-bold text-5xl text-[#FF4A61]">Word</span> :{" "}
            <span className="text-5xl font-bold text-[#FF4A61]">
              {randomWord.word}
            </span>
          </h2>
          <p className="text-3xl font-bold mb-6 text-[black] my-6">
            Translation:{" "}
            <span className="font-bold">{randomWord.translation}</span>
          </p>

          <ul className="list-disc pl-5 text-left">
            {randomWord.examples?.map((example, index) => (
              <li
                key={index}
                className="text-semibold  text-2xl text-black mb-2"
              >
                {example}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-md text-gray-100 italic mb-4">
          Click "Next Word" to explore!
        </p>
      )}

      {/* Interactive Button */}
      <button
        onClick={getRandomWord}
        className="mt-6 bg-[#FF4A61] font-bold px-8 py-3 rounded-lg shadow-md hover:border-2 border-[white]  transition-colors box-border"
      >
        Next Word
      </button>
    </div>
  );
};

export default RandomWordPage;
