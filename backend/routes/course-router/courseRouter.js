import express from "express";
import {
  createCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
  getCourseById,
} from "../../controllers/course-controller/course-controller.js";
import authenticate from "../../middleware/authMiddleware.js";

const router = express.Router();

// Create a new course
router.post("/create-new", authenticate, createCourse);

// Get all courses
router.get("/all", authenticate, getAllCourses);

// Update a course
router.put("/:id", authenticate, updateCourse);

// Delete a course
router.delete("/:id", authenticate, deleteCourse);

router.get("/:id", authenticate, getCourseById);

export default router;
