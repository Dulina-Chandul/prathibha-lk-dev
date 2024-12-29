import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CoursesTab from "./CourseTab";
import WordsTab from "./WordTab";
import DailyJournalTab from "./DailyJournalTab";
import { Outlet, useLocation } from "react-router-dom";

const StudentCommonLayout = () => {
  const location = useLocation();

  // Check if the current route is a nested route (e.g., /courses/:id)
  const isNestedRoute = location.pathname.includes("/courses/");

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">
        Welcome to the Learning Platform
      </h1>
      {isNestedRoute ? (
        // Render the nested route content (e.g., CourseDetailsPage)
        <Outlet />
      ) : (
        // Render the tabs for the main student view
        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="words">Words</TabsTrigger>
            <TabsTrigger value="journal">Daily Journal</TabsTrigger>
          </TabsList>

          <TabsContent value="courses">
            <CoursesTab />
          </TabsContent>

          <TabsContent value="words">
            <WordsTab />
          </TabsContent>

          <TabsContent value="journal">
            <DailyJournalTab />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default StudentCommonLayout;
