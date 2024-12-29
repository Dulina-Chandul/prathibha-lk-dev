import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { addCourse } from "@/services/services";

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

  const [numberOfVideos, setNumberOfVideos] = useState(0);

  const [activeTab, setActiveTab] = useState("curriculum");

  // Handle Curriculum
  const handleAddVideo = () => {
    const newLessonNumber = curriculum.length + 1;
    setNumberOfVideos((prev) => prev + 1);
    setActiveTab(`lesson-${newLessonNumber}`);
    setCurriculum([
      ...curriculum,
      { videoLink: "", title: "", description: "" },
    ]);
  };

  console.log(numberOfVideos);

  const handleRemoveLesson = () => {
    if (curriculum.length === 0) return;

    const activeLessonIndex = parseInt(activeTab.split("-")[1]) - 1;

    const updatedCurriculum = curriculum.filter(
      (_, index) => index !== activeLessonIndex
    );

    const reindexedCurriculum = updatedCurriculum.map((lesson, index) => ({
      ...lesson,
    }));

    setNumberOfVideos((prev) => prev + 1);

    setCurriculum(reindexedCurriculum);

    const newActiveTab =
      activeLessonIndex > 0
        ? `lesson-${activeLessonIndex}`
        : reindexedCurriculum.length > 0
        ? "lesson-1"
        : "curriculum";

    setActiveTab(newActiveTab);
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
      const response = await addCourse(courseData);
      console.log("Course created successfully:", response.data);
    } catch (error) {
      console.error(
        "Failed to create course:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Course</h1>
      <Tabs defaultValue={activeTab} className="w-full">
        <TabsList>
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="landing">Course Landing Page</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Course Landing Page Tab */}
        <TabsContent value="landing">
          <Card>
            <CardHeader>
              <CardTitle>Course Landing Page</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Label>Course Image</Label>
                <Input
                  placeholder="Enter Image URL"
                  type="text"
                  onChange={(e) =>
                    setCourseLanding({
                      ...courseLanding,
                      image: e.target.value,
                    })
                  }
                />
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
                  onChange={(e) =>
                    handleSettingsChange("visibility", e.target.value)
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

        {/* Curriculum Tab */}
        <TabsContent value="curriculum">
          <Card>
            <CardHeader>
              <CardTitle>Curriculum</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList>
                  {curriculum.map((_, index) => (
                    <TabsTrigger key={index} value={`lesson-${index + 1}`}>
                      Lesson {index + 1}
                    </TabsTrigger>
                  ))}
                  <Button
                    onClick={handleAddVideo}
                    className="ml-2 bg-[#FF4A61] text-white hover:bg-[#e24355] transition-all duration-300"
                  >
                    Add Lesson
                  </Button>
                </TabsList>

                {curriculum.map((course, index) => (
                  <TabsContent key={index} value={`lesson-${index + 1}`}>
                    <div className="space-y-4 mt-4">
                      <Input
                        type="text"
                        placeholder="YouTube Video Link"
                        value={course.videoLink}
                        onChange={(e) =>
                          handleVideoChange(index, "videoLink", e.target.value)
                        }
                      />
                      <Input
                        type="text"
                        placeholder="Title"
                        value={course.title}
                        onChange={(e) =>
                          handleVideoChange(index, "title", e.target.value)
                        }
                      />
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
    </div>
  );
};

export default AddNewCoursePage;
