import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
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

  const [activeTab, setActiveTab] = useState("curriculum"); // Track the active tab

  // Handle Curriculum
  const handleAddVideo = () => {
    const newLessonNumber = curriculum.length + 1; // Calculate the new lesson number
    setActiveTab(`lesson-${newLessonNumber}`); // Switch to the new tab
    setCurriculum([
      ...curriculum,
      { videoLink: "", title: "", description: "" }, // Add a new lesson
    ]);
  };

  const handleRemoveLesson = () => {
    if (curriculum.length === 0) return; // If no lessons, do nothing

    // Get the index of the active lesson
    const activeLessonIndex = parseInt(activeTab.split("-")[1]) - 1;

    // Remove the active lesson from the curriculum
    const updatedCurriculum = curriculum.filter(
      (_, index) => index !== activeLessonIndex
    );

    // Reindex the remaining lessons
    const reindexedCurriculum = updatedCurriculum.map((lesson, index) => ({
      ...lesson,
      // Optionally, you can update the title or other fields if needed
    }));

    // Update the curriculum state
    setCurriculum(reindexedCurriculum);

    // Update the active tab to the previous lesson or the first lesson if the first lesson was deleted
    const newActiveTab =
      activeLessonIndex > 0
        ? `lesson-${activeLessonIndex}`
        : reindexedCurriculum.length > 0
        ? "lesson-1"
        : "curriculum"; // Fallback to the curriculum tab if no lessons are left

    setActiveTab(newActiveTab);
  };

  const handleVideoChange = (index, field, value) => {
    const updatedCurriculum = [...curriculum];
    updatedCurriculum[index][field] = value;
    setCurriculum(updatedCurriculum);
  };

  // Handle Settings
  const handleSettingsChange = (field, value) => {
    setSettings({ ...settings, [field]: value });
  };

  // Handle Form Submission
  // AddNewCoursePage.js

  const handleSubmit = async () => {
    const courseData = {
      curriculum,
      courseLanding,
      settings,
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
                <Input
                  type="text"
                  placeholder="Public/Private"
                  value={settings.visibility}
                  onChange={(e) =>
                    handleSettingsChange("visibility", e.target.value)
                  }
                />
                <Label>Access</Label>
                <Input
                  type="text"
                  placeholder="Free/Paid"
                  value={settings.access}
                  onChange={(e) =>
                    handleSettingsChange("access", e.target.value)
                  }
                />
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
                  <Button onClick={handleAddVideo} className="ml-2">
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

                      <Button onClick={handleRemoveLesson}>
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
        <Button onClick={handleSubmit}>Save Course</Button>
      </div>
    </div>
  );
};

export default AddNewCoursePage;
