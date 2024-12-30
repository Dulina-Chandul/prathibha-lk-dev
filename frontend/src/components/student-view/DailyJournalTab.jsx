import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const DailyJournalTab = () => {
  const [journalEntry, setJournalEntry] = useState("");
  const [aiResponse, setAiResponse] = useState({
    response: "",
    grammerCorrection: "",
    writingSuggesition: "",
  });

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
          'You are an assistant that provides detailed feedback on journal entries. Analyze the given journal text and respond with the following categories:\n\n1. **Grammar Corrections**:\n   - List sentences with grammar, punctuation, or spelling errors.\n   - Provide the corrected version of each sentence.\n\n2. **Improved Writing Suggestions**:\n   - Suggest better ways to write specific sentences or phrases.\n   - Aim to enhance clarity, expressiveness, and professionalism in the writing.\n\nFormat your response exactly like this:\n\n**Grammar Corrections:**\n1. Original: "Your incorrect sentence."\n   Correction: "Your corrected sentence."\n\n**Improved Writing Suggestions:**\n- "Original phrase" could be improved to "Improved phrase."\nthis is the response got Grammar Corrections:',
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

      console.log(responseText);
      setAiResponse((previousData) => ({
        ...previousData,
        response: responseText,
      }));
    } catch (error) {
      console.error("Error analyzing entry:", error);
      alert("An error occurred while analyzing the entry. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#3168ba] to-[#73c3e8] text-white rounded-2xl">
      <h1 className="text-4xl font-bold mb-6 text-center">Daily AI Journal</h1>

      <div className="w-full max-w-2xl bg-white text-gray-800 rounded-lg shadow-lg p-6">
        <textarea
          className="w-full h-40 p-4 border-2 border-[#3168ba] rounded-md focus:ring focus:ring-[#73c3e8] outline-none resize-none"
          placeholder="Write your journal entry here..."
          value={journalEntry}
          onChange={(e) => setJournalEntry(e.target.value)}
        ></textarea>

        <Button
          onClick={handleAnalyzeEntry}
          className="mt-4 w-full bg-[#FF4A61] text-white hover:bg-[#ff6a7d] transition-colors"
        >
          Analyze Entry
        </Button>
      </div>

      {aiResponse && (
        <Tabs defaultValue="grammar" className="w-full max-w-4xl mt-8">
          <TabsList className="justify-center">
            <TabsTrigger value="grammar" className="text-[#3168ba]">
              Grammar Corrections
            </TabsTrigger>
            <TabsTrigger value="improvements" className="text-[#3168ba]">
              Improved Suggestions
            </TabsTrigger>
            <TabsTrigger value="suggestions" className="text-[#3168ba]">
              Suggestions
            </TabsTrigger>
          </TabsList>

          {/* <TabsContent value="grammar">
            {aiResponse.grammarCorrections.map((item, index) => (
              <p key={index}>
                <strong>Original:</strong> {item.original}
                <br />
                <strong>Correction:</strong> {item.correction}
              </p>
            ))}
          </TabsContent>

          <TabsContent value="improvements">
            {aiResponse.improvedSuggestions.map((item, index) => (
              <p key={index}>
                <strong>Original:</strong> {item.original}
                <br />
                <strong>Improved:</strong> {item.improved}
              </p>
            ))}
          </TabsContent>

          <TabsContent value="suggestions">
            <ul>
              {aiResponse.suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </TabsContent> */}
        </Tabs>
      )}
    </div>
  );
};

export default DailyJournalTab;
