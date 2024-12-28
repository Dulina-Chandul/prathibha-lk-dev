import { createContext, useContext, useState, useEffect } from "react";
import {
  fetchCourses,
  addCourse,
  updateCourse,
  deleteCourse,
} from "@/services/services";
import { initialCourseData } from "@/config/config";

export const InstructorContext = createContext();

export const InstructorProvider = ({ children }) => {
  const [courses, setCourses] = useState(initialCourseData);
  const [loading, setLoading] = useState(true);

  // Fetch courses created by the instructor
  const loadCourses = async () => {
    try {
      const data = await fetchCourses();
      console.log("This log is from InstructorProvider loadCourses : ", data);
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  // Add a new course
  const handleAddCourse = async (courseData) => {
    try {
      const newCourse = await addCourse(courseData);
      setCourses([...courses, newCourse]);
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
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  // Fetch courses on component mount
  useEffect(() => {
    loadCourses();
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
      }}
    >
      {children}
    </InstructorContext.Provider>
  );
};

// Directly export the context for use in components
