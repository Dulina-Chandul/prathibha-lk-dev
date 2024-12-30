import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchCourses, deleteCourse } from "@/services/services";
import { InstructorContext } from "@/context/instructor-context/InstructorContext";

const InstructorCourses = () => {
  const { courses, setCourses } = useContext(InstructorContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log(courses);
  }, []);

  // Get courses
  useEffect(() => {
    const fetchCoursesData = async () => {
      try {
        const response = await fetchCourses();
        console.log("This is response", response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching all courses:", error);
        throw error;
      }
    };

    console.log("Fetching courses...");

    fetchCoursesData();
  }, [setCourses]);

  // console.log(courses);

  // Handle course deletion
  const handleDeleteCourse = async (id) => {
    try {
      await deleteCourse(id);
      setCourses((prevCourses) =>
        prevCourses.filter((course) => course._id !== id)
      );
    } catch (error) {
      console.error(
        "Failed to delete course:",
        error.response?.data || error.message
      );
    }
  };

  if (courses.length === 0) {
    return (
      <div className="w-full h-screen ">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Your Courses</h1>
          <Link to="/instructor/create-new">
            <Button className="bg-gradient-to-r from-[#3168ba] to-[#73c3e8] hover:from-[#FF4A61] hover:to-[#FF4A61]">
              Add New Course
            </Button>
          </Link>
        </div>
        <p className="text-2xl font-semibold pt-20 flex justify-center">
          No courses found.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Courses</h1>
        <Link to="/instructor/create-new">
          <Button className="bg-gradient-to-r from-[#3168ba] to-[#73c3e8] hover:from-[#FF4A61] hover:to-[#FF4A61]">
            Add New Course
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Course List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Videos</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.map((courseDetails) => {
                console.log("This is courseDetails", courseDetails);
                if (
                  courseDetails._id !== null &&
                  courseDetails._id !== undefined &&
                  courseDetails._id !== ""
                ) {
                  return (
                    <TableRow key={courseDetails._id}>
                      <TableCell>{courseDetails.courseLanding.title}</TableCell>
                      <TableCell>
                        {courseDetails.courseLanding.description}
                      </TableCell>
                      <TableCell>{courseDetails.numberOfVideos}</TableCell>
                      <TableCell>{courseDetails.settings.visibility}</TableCell>
                      <TableCell>
                        <Button variant="outline" className="mr-2">
                          Edit
                        </Button>
                        <Button
                          variant="destructive"
                          onClick={() => handleDeleteCourse(courseDetails._id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                }
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default InstructorCourses;
