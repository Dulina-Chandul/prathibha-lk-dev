import axiosInstance from "@/api/axiosInstance";

// User Register, Login and Authentication
// Register Service
export const registerService = async (formData) => {
  const data = await axiosInstance.post("/auth/register", {
    ...formData,
    role: "user",
  });

  return data.data;
};

// Login Service
export const loginService = async (formData) => {
  const data = await axiosInstance.post("/auth/login", formData);

  return data.data;
};

// Check Authentication
export async function checkAuthService() {
  const data = await axiosInstance.get("/auth/check-auth");

  return data.data;
}

// Word Explorer Services
// Add a new word
export const addWordService = async (wordData) => {
  const response = await axiosInstance.post("/wordExplorer/words", wordData);
  return response.data;
};

// Get all words
export const getWordsService = async () => {
  const response = await axiosInstance.get("/wordExplorer/words");
  return response.data;
};

// Update a word
export const updateWordService = async (id, updatedWordData) => {
  const response = await axiosInstance.put(
    `/wordExplorer/words/${id}`,
    updatedWordData
  );
  return response.data;
};

// Delete a word
export const deleteWordService = async (id) => {
  const response = await axiosInstance.delete(`/wordExplorer/words/${id}`);
  return response.data;
};
