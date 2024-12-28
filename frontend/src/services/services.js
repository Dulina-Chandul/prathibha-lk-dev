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

// Instructor Services
// Fetch courses created by the instructor
export const fetchCourses = async () => {
  try {
    const response = await axiosInstance.get("/instructor/courses");
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

// Add a new course
export const addCourse = async (courseData) => {
  try {
    const response = await axiosInstance.post(
      "/instructor/courses",
      courseData
    );
    return response.data;
  } catch (error) {
    console.error("Error adding course:", error);
    throw error;
  }
};

// Update a course
export const updateCourse = async (id, updatedData) => {
  try {
    const response = await axiosInstance.put(
      `/instructor/courses/${id}`,
      updatedData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating course:", error);
    throw error;
  }
};

// Delete a course
export const deleteCourse = async (id) => {
  try {
    await axiosInstance.delete(`/instructor/courses/${id}`);
  } catch (error) {
    console.error("Error deleting course:", error);
    throw error;
  }
};
