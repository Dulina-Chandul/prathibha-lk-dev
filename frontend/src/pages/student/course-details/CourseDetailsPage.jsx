import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "@/api/axiosInstance";

const CourseDetailsPage = () => {
  // Get course ID
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const fetchCourseDetails = async () => {
    try {
      const response = await axiosInstance.get(`/courses/${id}`);
      setCourse(response.data.data);
      setSelectedLesson(response.data.data.curriculum[0]);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };

  useEffect(() => {
    fetchCourseDetails();
  }, [id]);

  if (!course) {
    return <p>Loading course details...</p>;
  }

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-50 p-4 border-r">
        <h2 className="text-xl font-bold mb-4">Lessons</h2>
        <ul>
          {course.curriculum.map((lesson, index) => (
            <li
              key={index}
              className={`p-2 cursor-pointer hover:bg-gray-100 ${
                selectedLesson === lesson ? "bg-gray-200" : ""
              }`}
              onClick={() => setSelectedLesson(lesson)}
            >
              {lesson.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-3/4 p-8">
        <h1 className="text-3xl font-bold mb-6">
          {course.courseLanding.title}
        </h1>
        {selectedLesson && (
          <div>
            <h2 className="text-2xl font-bold mb-4">{selectedLesson.title}</h2>
            <div className="w-full h-[600px]">
              {" "}
              <iframe
                src={selectedLesson.videoLink.replace("watch?v=", "embed/")}
                title={selectedLesson.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
            <p className="mt-4 text-gray-700">{selectedLesson.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetailsPage;
