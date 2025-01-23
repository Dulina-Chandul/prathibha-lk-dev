import React, { useContext } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CoursesTab from "./CourseTab";
import WordsTab from "./WordTab";
import DailyJournalTab from "./DailyJournalTab";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import { AuthContext } from "@/context/auth-context/AuthContext";

const StudentCommonLayout = () => {
  const location = useLocation();

  const { auth } = useContext(AuthContext);

  const isNestedRoute = location.pathname.includes("/courses/");

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#3168ba] to-[#73c3e8] animate-fade-in">
        Welcome to the Pathibha LK
        <span className="text-[#8f3b46]"> {auth?.user?.userName} </span>
      </h1>

      {isNestedRoute ? (
        <Outlet />
      ) : (
        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full h-14 grid-cols-3">
            <TabsTrigger
              value="courses"
              className="hover:bg-[#FF4A61] hover:text-white h-14 transition-colors data-[state=active]:bg-[#3168ba] data-[state=active]:text-white text-2xl font-bold border-2 border-[#FF4A61] data-[state=active]:border-[#3168ba]"
            >
              Courses
            </TabsTrigger>
            <TabsTrigger
              value="words"
              className="hover:bg-[#FF4A61] hover:text-white h-14 transition-colors data-[state=active]:bg-[#3168ba] data-[state=active]:text-white text-2xl font-bold border-2 border-[#FF4A61] data-[state=active]:border-[#3168ba]"
            >
              Today's Word
            </TabsTrigger>
            <TabsTrigger
              value="journal"
              className="hover:bg-[#FF4A61] hover:text-white h-14 transition-colors data-[state=active]:bg-[#3168ba] data-[state=active]:text-white text-2xl font-bold border-2 border-[#FF4A61] data-[state=active]:border-[#3168ba]"
            >
              Daily Journal
            </TabsTrigger>
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
