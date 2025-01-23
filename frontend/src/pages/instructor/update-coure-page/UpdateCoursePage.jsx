import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { addCourse, updateCourse } from "@/services/services";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import axiosInstance from "@/api/axiosInstance";

const AddNewCoursePage = () => {
  const [curriculum, setCurriculum] = useState([]);
  const [courseLanding, setCourseLanding] = useState({
    image: "",
    title: "",
    description: "",
  });
  const [settings, setSettings] = useState({
    visibility: "public",
    access: "free",
  });

  const navigate = useNavigate();

  const [numberOfVideos, setNumberOfVideos] = useState(0);

  const [activeMainTab, setActiveMainTab] = useState("curriculum");
  const [activeLessonTab, setActiveLessonTab] = useState("lesson-1");

  const { id } = useParams();

  useEffect(() => {
    fetchCourseDetails();
  }, []);

  const fetchCourseDetails = async () => {
    try {
      const response = await axiosInstance.put(`/courses/${id}`);
      console.log(response);

      setCurriculum(response.data.data.curriculum);
      setCourseLanding(response.data.data.courseLanding);
      setSettings(response.data.data.settings);
      setNumberOfVideos(response.data.data.numberOfVideos);
      console.log(numberOfVideos);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };

  // Handle Add videos to the course
  const handleAddVideo = () => {
    const newLessonNumber = curriculum.length + 1;
    setNumberOfVideos((prev) => prev + 1);
    setActiveLessonTab(`lesson-${newLessonNumber}`);
    setCurriculum([
      ...curriculum,
      { videoLink: "", title: "", description: "" },
    ]);
  };

  // console.log(numberOfVideos);

  const handleRemoveLesson = () => {
    if (curriculum.length === 0) return;

    const activeLessonIndex = parseInt(activeLessonTab.split("-")[1]) - 1;

    const updatedCurriculum = curriculum.filter(
      (_, index) => index !== activeLessonIndex
    );

    const reindexedCurriculum = updatedCurriculum.map((lesson, index) => ({
      ...lesson,
    }));

    setNumberOfVideos((prev) => prev - 1);

    setCurriculum(reindexedCurriculum);

    // Check the order, if the lesson is not the first one showing result and if the reindexed curriculum is not empty showing first lesson if itis empty showing curriculum
    const newActiveLessonTab =
      activeLessonIndex > 0
        ? `lesson-${activeLessonIndex}`
        : reindexedCurriculum.length > 0
        ? "lesson-1"
        : null;

    setActiveLessonTab(newActiveLessonTab);
  };

  const handleVideoChange = (index, field, value) => {
    const updatedCurriculum = [...curriculum];
    updatedCurriculum[index][field] = value;
    setCurriculum(updatedCurriculum);
  };

  const handleSettingsChange = (field, value) => {
    setSettings({ ...settings, [field]: value });
  };

  const handleSubmit = async () => {
    const courseData = {
      curriculum,
      courseLanding,
      settings,
      numberOfVideos,
    };

    try {
      const response = await updateCourse(id, courseData);
      console.log("Course Updated successfully:", response.data);
      toast.success("Course Updated successfully!", {
        position: "top-right",
      });
      navigate("/instructor");
    } catch (error) {
      console.error(
        "Failed to create course:",
        error.response?.data || error.message
      );
      toast.error("Failed to create course!", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="p-6">
      <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full border border-gray-100 bg-white py-3 shadow backdrop-blur-lg">
        <div className="px-12">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <Link
                aria-current="page"
                className="flex items-center"
                to="/home"
              >
                <h1 className="h-9 text-[#14b8a6] text-[2rem] font-bold">P</h1>
                <h1 className="h-9 w-auto text-[2rem] text-[#14b8a6] font-bold">
                  rathibha <span className="text-[#d946ef]">learn</span>
                </h1>
              </Link>
            </div>

            <div className="flex items-center justify-end gap-3">
              <Link to="/instructor">
                <button className="bg-[#a21caf] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#86198f] transition duration-300 ease-in-out flex items-center">
                  <ArrowLeft className="mr-2" size={20} />
                  Back to Dashboards
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <h1 className="text-2xl font-bold mb-6 mt-16">Add New Course</h1>
      <Tabs
        defaultValue={activeMainTab}
        onValueChange={setActiveMainTab}
        className="w-full"
      >
        <TabsList>
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="landing">Course Landing Page</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        {/* Curriculum */}
        <TabsContent value="curriculum">
          <Card>
            <CardHeader>
              <CardTitle> Curriculum</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs
                value={activeLessonTab}
                onValueChange={setActiveLessonTab}
                className="w-full"
              >
                <TabsList className="flex justify-start items-left flex-wrap bg-white overflow-y-auto min-h-20 ">
                  {/* Setting up course lessons with logical rendering */}
                  {curriculum.length > 0
                    ? curriculum.map((_, index) => (
                        <TabsTrigger key={index} value={`lesson-${index + 1}`}>
                          Lesson {index + 1}
                        </TabsTrigger>
                      ))
                    : null}
                  <Button
                    onClick={handleAddVideo}
                    className="ml-2 bg-[#FF4A61] text-white hover:bg-[#e24355] transition-all duration-300"
                  >
                    {/* Add video to course */}
                    Add Lesson
                  </Button>
                </TabsList>

                {curriculum.map((course, index) => (
                  <TabsContent key={index} value={`lesson-${index + 1}`}>
                    <div className="space-y-4 mt-4">
                      {/* Youtube Video Link */}
                      <Input
                        type="text"
                        placeholder="YouTube Video Link"
                        value={course.videoLink}
                        onChange={(e) =>
                          handleVideoChange(index, "videoLink", e.target.value)
                        }
                      />
                      {/* Video Title */}
                      <Input
                        type="text"
                        placeholder="Title"
                        value={course.title}
                        onChange={(e) =>
                          handleVideoChange(index, "title", e.target.value)
                        }
                      />
                      {/* Video Description */}
                      <Textarea
                        placeholder="Description"
                        value={course.description}
                        onChange={(e) =>
                          handleVideoChange(
                            index,
                            "description",
                            e.target.value
                          )
                        }
                      />

                      <Button
                        onClick={handleRemoveLesson}
                        className="bg-[#FF4A61] text-white hover:bg-[#e24355] transition-all duration-300"
                      >
                        Remove this Lesson
                      </Button>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Course Landing Page Tab */}
        <TabsContent value="landing">
          <Card>
            <CardHeader>
              <CardTitle>Course Landing Page</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Label>Course Image</Label>
                {/* Set image address */}
                <Input
                  placeholder="Enter Image URL"
                  type="text"
                  value={courseLanding.image}
                  onChange={(e) =>
                    setCourseLanding({
                      ...courseLanding,
                      image: e.target.value,
                    })
                  }
                />
                {/* Set title course*/}
                <Input
                  type="text"
                  placeholder="Course Title"
                  value={courseLanding.title}
                  onChange={(e) =>
                    setCourseLanding({
                      ...courseLanding,
                      title: e.target.value,
                    })
                  }
                />
                {/* Set descriptio on the course */}
                <Textarea
                  placeholder="Course Description"
                  value={courseLanding.description}
                  onChange={(e) =>
                    setCourseLanding({
                      ...courseLanding,
                      description: e.target.value,
                    })
                  }
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Label>Visibility</Label>
                <select
                  value={settings.visibility}
                  onChange={
                    (e) => handleSettingsChange("visibility", e.target.value)
                    // Get the values in options
                  }
                  className="border border-gray-300 rounded-md p-2 w-full"
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>

                <Label>Access</Label>
                <select
                  value={settings.access}
                  onChange={(e) =>
                    handleSettingsChange("access", e.target.value)
                  }
                  className="border border-gray-300 rounded-md p-2 w-full"
                >
                  <option value="free">Free</option>
                  <option value="paid">Paid</option>
                </select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Submit Button */}
      <div className="mt-6">
        <Button
          onClick={handleSubmit}
          className="bg-[#FF4A61] text-white hover:bg-[#e24355] transition-all duration-300"
        >
          Save Course
        </Button>
      </div>
      {/* Toast Effects */}
      <Toaster
        toastOptions={{
          duration: 8000,
        }}
      />
    </div>
  );
};

export default AddNewCoursePage;
