import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useState } from "react";

const DailyJournalTab = () => {
  const [journalEntry, setJournalEntry] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  const handleAnalyzeEntry = async () => {
    if (!journalEntry.trim()) {
      alert("Please enter a journal entry.");
      return;
    }

    try {
      const apiKey = "AIzaSyCBSUNND-dklEFVBvKZXVhGlOQGQxBP41k";
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash-exp",
        systemInstruction:
          'You are an assistant that provides detailed feedback on journal entries. Analyze the given journal text and respond with the following categories:\n\n1. **Grammar Corrections**:\n   - List sentences with grammar, punctuation, or spelling errors.\n   - Provide the corrected version of each sentence.\n\n2. **Improved Writing Suggestions**:\n   - Suggest better ways to write specific sentences or phrases.\n   - Aim to enhance clarity, expressiveness, and professionalism in the writing.\n\nFormat your response exactly like this:\n\n**Grammar Corrections:**\n1. Original: "Your incorrect sentence."\n   Correction: "Your corrected sentence."\n\n**Improved Writing Suggestions:**\n- "Original phrase" could be improved to "Improved phrase."',
      });

      const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
      };

      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });

      const result = await chatSession.sendMessage(journalEntry);
      const responseText = await result.response.text();

      setAiResponse(responseText);
    } catch (error) {
      console.error("Error analyzing entry:", error);
      alert("An error occurred while analyzing the entry. Please try again.");
    }
  };

  const parseAIResponse = () => {
    const corrections = aiResponse.match(
      /(?<=\*\*Grammar Corrections:\*\*).*(?=\*\*Improved Writing Suggestions:\*\*)/s
    );
    const suggestions = aiResponse.match(
      /(?<=\*\*Improved Writing Suggestions:\*\*).*/s
    );
    return {
      corrections: corrections ? corrections[0].trim() : null,
      suggestions: suggestions ? suggestions[0].trim() : null,
    };
  };

  const { corrections, suggestions } = parseAIResponse();

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Daily Journal Analysis
      </h1>
      <textarea
        value={journalEntry}
        onChange={(e) => setJournalEntry(e.target.value)}
        placeholder="Enter your journal entry here..."
        className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
      />
      <button
        onClick={handleAnalyzeEntry}
        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Analyze
      </button>

      {aiResponse && (
        <div className="mt-8">
          {corrections && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">
                Grammar Corrections
              </h2>
              <ul className="space-y-3 bg-gray-100 p-4 rounded-lg shadow-md">
                {corrections.split("\n").map((item, index) => (
                  <li key={index} className="text-gray-800">
                    {item.trim()}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {suggestions && (
            <div>
              <h2 className="text-xl font-semibold mb-3 text-blue-600">
                Improved Writing Suggestions
              </h2>
              <ul className="space-y-3 bg-gray-100 p-4 rounded-lg shadow-md">
                {suggestions.split("\n").map((item, index) => (
                  <li key={index} className="text-gray-800">
                    {item.trim()}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DailyJournalTab;
