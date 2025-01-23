import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "@/api/axiosInstance";
import { ArrowLeft } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const CourseDetailsPage = () => {
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
    return (
      <div className="p-8">
        <Skeleton className="h-8 w-48 mb-4" />
        <div className="flex space-x-4">
          <div className="w-1/4">
            <Skeleton className="h-96" />
          </div>
          <div className="w-3/4">
            <Skeleton className="h-96" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full border-b border-gray-200 bg-white/50 backdrop-blur-lg py-4 shadow-sm">
        <div className="px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link to="/home" className="flex items-center">
                <h1 className="text-4xl font-bold text-teal-500">P</h1>
                <h1 className="text-2xl font-bold text-teal-500">
                  rathibha <span className="text-purple-500">learn</span>
                </h1>
              </Link>
            </div>
            <Link to="/home">
              <button className="bg-[#a21caf] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#86198f] transition duration-300 ease-in-out flex items-center">
                <ArrowLeft className="mr-2" size={20} />
                Back to Dashboard
              </button>
            </Link>
          </div>
        </div>
      </header>

      <div className="pt-24 flex h-screen">
        {/* Sidebar */}
        <div className="w-1/4 bg-white border-r border-gray-200 p-6 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Lessons</h2>
          <ul className="space-y-2">
            {course.curriculum.map((lesson, index) => (
              <li
                key={index}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedLesson === lesson
                    ? "bg-teal-50 text-teal-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setSelectedLesson(lesson)}
              >
                {lesson.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-8 overflow-y-auto">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-900">
                {course.courseLanding.title}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {course.courseLanding.description}
              </CardDescription>
            </CardHeader>
          </Card>

          {selectedLesson && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {selectedLesson.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src={selectedLesson.videoLink.replace("watch?v=", "embed/")}
                    title={selectedLesson.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <p className="mt-6 text-gray-700 leading-relaxed">
                  {selectedLesson.description}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
