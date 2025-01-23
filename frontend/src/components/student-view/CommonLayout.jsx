import React, { useContext } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CoursesTab from "./CourseTab";
import WordsTab from "./WordTab";
import DailyJournalTab from "./DailyJournalTab";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import { AuthContext } from "@/context/auth-context/AuthContext";
import { Toaster } from "react-hot-toast";

const StudentCommonLayout = () => {
  const location = useLocation();

  const { auth } = useContext(AuthContext);

  const isNestedRoute = location.pathname.includes("/courses/");

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#a21caf] to-[#d946ef] animate-fade-in">
        Welcome to the Pathibha LK
        <span className="text-[#14b8a6]"> {auth?.user?.userName} </span>
      </h1>

      {isNestedRoute ? (
        <Outlet />
      ) : (
        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full h-14 grid-cols-3">
            <TabsTrigger
              value="courses"
              className="hover:bg-[#FF4A61] hover:text-white h-14 transition-colors data-[state=active]:bg-[#3168ba] data-[state=active]:text-white text-2xl font-bold "
            >
              Courses
            </TabsTrigger>
            <TabsTrigger
              value="words"
              className="hover:bg-[#FF4A61] hover:text-white h-14 transition-colors data-[state=active]:bg-[#3168ba] data-[state=active]:text-white text-2xl font-bold "
            >
              Today's Word
            </TabsTrigger>
            <TabsTrigger
              value="journal"
              className="hover:bg-[#FF4A61] hover:text-white h-14 transition-colors data-[state=active]:bg-[#3168ba] data-[state=active]:text-white text-2xl font-bold "
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
      <Toaster toastOptions={{ duration: 8000 }} />
    </div>
  );
};

export default StudentCommonLayout;
