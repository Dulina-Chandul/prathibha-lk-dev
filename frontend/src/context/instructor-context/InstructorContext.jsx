import { createContext, useContext, useState, useEffect } from "react";
import {
  fetchCourses,
  addCourse,
  updateCourse,
  deleteCourse,
  countUsers,
  getWordsService,
} from "@/services/services";
import { initialCourseData } from "@/config/config";

export const InstructorContext = createContext();

export const InstructorProvider = ({ children }) => {
  const [courses, setCourses] = useState(initialCourseData);
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    dailyActiveUsers: 125,
    totalCourses: 0,
    totalStudents: 0,
    totalWords: 0,
  });

  // Fetch courses
  const loadCourses = async () => {
    try {
      // Get all courses fromDatabase
      const data = await fetchCourses();
      console.log("This log is from InstructorProvider loadCourses : ", data);
      setCourses(data.data);

      // Set course count
      setDashboardData((prevData) => ({
        ...prevData,
        totalCourses: data.data.length,
      }));
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // Add a new course
  const handleAddCourse = async (courseData) => {
    try {
      const newCourse = await addCourse(courseData);
      setCourses([...courses, newCourse]);

      // Update totalCourses after adding a new course
      setDashboardData((prevData) => ({
        ...prevData,
        totalCourses: prevData.totalCourses + 1,
      }));
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  // Update a course
  const handleUpdateCourse = async (id, updatedData) => {
    try {
      const updatedCourse = await updateCourse(id, updatedData);
      setCourses(
        courses.map((course) => (course.id === id ? updatedCourse : course))
      );
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  // Delete a course
  const handleDeleteCourse = async (id) => {
    try {
      await deleteCourse(id);
      setCourses(courses.filter((course) => course.id !== id));

      // Update totalCourses after deleting a course
      setDashboardData((prevData) => ({
        ...prevData,
        totalCourses: prevData.totalCourses - 1,
      }));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  // Get number of Students
  const getUserCount = async () => {
    try {
      const userCount = await countUsers();
      setDashboardData((prevData) => ({
        ...prevData,
        totalStudents: userCount,
      }));
    } catch (error) {
      console.error("Error fetching user count:", error);
    }
  };

  // Get word Count
  const getWordCount = async () => {
    try {
      // Get all the words in datbase
      const data = await getWordsService();
      if (Array.isArray(data)) {
        // console.log("Word count:", data.length);
        setDashboardData((prevData) => ({
          ...prevData,
          totalWords: data.length,
        }));
      }
    } catch (error) {
      console.error("Error getting word count:", error);
    }
  };

  // Fetch courses and user count on component mount
  useEffect(() => {
    loadCourses();
    getUserCount();
    getWordCount();
  }, []);

  return (
    <InstructorContext.Provider
      value={{
        courses,
        setCourses,
        loading,
        setLoading,
        handleAddCourse,
        handleUpdateCourse,
        handleDeleteCourse,
        dashboardData,
        setDashboardData,
      }}
    >
      {children}
    </InstructorContext.Provider>
  );
};
