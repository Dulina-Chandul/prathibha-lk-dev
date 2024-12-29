import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    // Curriculum: Array of lessons/videos
    curriculum: [
      {
        videoLink: { type: String, required: true }, // URL of the video (e.g., YouTube link)
        title: { type: String, required: true }, // Title of the lesson
        description: { type: String, required: true }, // Description of the lesson
      },
    ],

    // Course Landing Page: Details for the course landing page
    courseLanding: {
      image: { type: String, required: true }, // URL or file path of the course image
      title: { type: String, required: true }, // Title of the course
      description: { type: String, required: true }, // Description of the course
    },

    // Settings: Visibility and access settings for the course
    settings: {
      visibility: { type: String, required: true, enum: ["public", "private"] }, // Course visibility
      access: { type: String, required: true, enum: ["free", "paid"] }, // Course access type
    },

    // Instructor: Reference to the user who created the course
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    numberOfVideos: { type: Number, default: 0 },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Create and export the Course model
export default mongoose.model("Course", courseSchema);
