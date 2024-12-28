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
import { Link } from "react-router-dom";
import { useContext } from "react";
import { InstructorContext } from "@/context/instructor-context/InstructorContext";

const InstructorCourses = () => {
  const { courses, loading, deleteCourse } = useContext(InstructorContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(courses.map((course) => course.id));
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
              {courses.map((course) => {
                if (
                  course.id !== null &&
                  course.id !== undefined &&
                  course.id !== ""
                ) {
                  return (
                    <TableRow key={course.id}>
                      <TableCell>{course.title}</TableCell>
                      <TableCell>{course.description}</TableCell>
                      <TableCell>{course.videoCount}</TableCell>
                      <TableCell>{course.courseStatus}</TableCell>
                      <TableCell>
                        <Button variant="outline" className="mr-2">
                          Edit
                        </Button>
                        <Button
                          variant="destructive"
                          onClick={() => deleteCourse(course.id)}
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
