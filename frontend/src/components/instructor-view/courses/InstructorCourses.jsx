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
import { Pencil, Plus, Trash } from "lucide-react";
import toast from "react-hot-toast";

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
      toast.success("Course deleted successfully!", {
        position: "top-right",
      });
    } catch (error) {
      console.error(
        "Failed to delete course:",
        error.response?.data || error.message
      );
      toast.error("Failed to delete course!", {
        position: "top-right",
      });
    }
  };

  if (courses.length === 0) {
    return (
      <div className="w-full h-screen ">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Your Courses</h1>
          <Link to="/instructor/create-new">
            <Button className="bg-[#a21caf] text-white font-bold py-4 px-4 rounded-lg hover:bg-[#86198f] transition duration-300 ease-in-out">
              <Plus className="ml-1" size={20} />
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
          <Button className="bg-[#a21caf] text-white font-bold py-6 px-6 rounded-lg hover:bg-[#86198f] transition duration-300 ease-in-out">
            <Plus className="ml-1" size={20} />
            Add New Course
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Course List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-2/5 font-bold">Title</TableHead>
                <TableHead className="w-2/5 font-bold">Description</TableHead>
                <TableHead className="w-1/8 font-bold">Videos</TableHead>
                <TableHead className="w-1/8 font-bold">Status</TableHead>
                <TableHead className="w-1/6 font-bold">Actions</TableHead>
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
                      <TableCell>
                        <p className="font-semibold">
                          {courseDetails.courseLanding.title}
                        </p>
                      </TableCell>
                      <TableCell>
                        <p className="font-semibold">
                          {courseDetails.courseLanding.description}
                        </p>
                      </TableCell>
                      <TableCell>
                        <p className="font-semibold">
                          {courseDetails.numberOfVideos}
                        </p>
                      </TableCell>
                      <TableCell>
                        <p className="font-semibold">
                          {courseDetails.settings.visibility}
                        </p>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-row space-x-1">
                          <Link to={`/instructor/update/${courseDetails._id}`}>
                            <Button
                              variant="outline"
                              className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
                            >
                              <Pencil className="mr-1" size={18} />
                              Edit
                            </Button>
                          </Link>
                          <Button
                            variant="destructive"
                            onClick={() =>
                              handleDeleteCourse(courseDetails._id)
                            }
                            className="bg-red-500 text-white hover:bg-red-600 hover:text-white"
                          >
                            <Trash className="mr-1" size={18} />
                            Delete
                          </Button>
                        </div>
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
