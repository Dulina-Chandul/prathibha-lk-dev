import React, { useEffect, useState } from "react";
import axiosInstance from "@/api/axiosInstance";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Navigate, useNavigate } from "react-router-dom";

const CoursesTab = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const fetchCourses = async () => {
    try {
      const response = await axiosInstance.get("/courses/all");
      setCourses(response.data.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleCourseClick = (courseId) => {
    console.log("Course ID:", courseId);
    navigate(`/courses/${courseId}`);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
      {courses.map((course) => (
        <Card
          key={course._id}
          className="cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => handleCourseClick(course._id)}
        >
          <CardHeader>
            <img
              src={course.courseLanding.image}
              alt={course.courseLanding.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardTitle className="mt-4">{course.courseLanding.title}</CardTitle>
            <CardDescription>
              {course.courseLanding.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Videos: {course.numberOfVideos}</p>
            <p>
              Status: {course.settings.visibility} | Access:{" "}
              {course.settings.access}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CoursesTab;
