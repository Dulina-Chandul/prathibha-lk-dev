import Course from "../../models/Course.js";
import mongoose from "mongoose";

// Create a new course
const createCourse = async (req, res) => {
  const { curriculum, courseLanding, settings, numberOfVideos } = req.body;
  const instructor = req.user._id; // Get the instructor ID from the authenticated user

  // Validate input
  if (!curriculum || !courseLanding || !settings) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const newCourse = new Course({
      curriculum,
      courseLanding,
      settings,
      instructor,
      numberOfVideos,
    });

    await newCourse.save();

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: newCourse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create course",
      error: error.message,
    });
  }
};

// Get all courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({
      success: true,
      message: "All courses fetched successfully",
      data: courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch all courses",
      error: error.message,
    });
  }
};

// Update a course
const updateCourse = async (req, res) => {
  const { id } = req.params;
  const { curriculum, courseLanding, settings } = req.body;

  // Validate course ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid course ID",
    });
  }

  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      { curriculum, courseLanding, settings },
      { new: true }
    );

    if (!updatedCourse) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      data: updatedCourse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update course",
      error: error.message,
    });
  }
};

// Delete a course
const deleteCourse = async (req, res) => {
  const { id } = req.params;

  // Validate course ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid course ID",
    });
  }

  try {
    const deletedCourse = await Course.findByIdAndDelete(id);

    if (!deletedCourse) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
      data: deletedCourse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete course",
      error: error.message,
    });
  }
};

export { createCourse, getAllCourses, updateCourse, deleteCourse };
