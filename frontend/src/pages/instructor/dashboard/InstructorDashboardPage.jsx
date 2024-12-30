import InstructorCourses from "@/components/instructor-view/courses/InstructorCourses";
import InstructorDashboard from "@/components/instructor-view/dashboards/InstructorDashboard";
import WordExplorer from "@/components/instructor-view/word-explorer/WordExplorer ";
import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";
import { AuthContext } from "@/context/auth-context/AuthContext";
import { TabsContent } from "@radix-ui/react-tabs";
import { BarChart, Book, LogOut } from "lucide-react";
import React, { useContext, useState } from "react";

const InstructorDashboardPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { resetCredentials } = useContext(AuthContext);
  const menuItems = [
    {
      icon: BarChart,
      label: "Dashboard",
      value: "dashboard",
      component: <InstructorDashboard />,
    },
    {
      icon: Book,
      label: "Courses",
      value: "courses",
      component: <InstructorCourses />,
    },
    {
      // Word explorer
      icon: Book,
      label: "Word Explorer",
      value: "word-explorer",
      component: <WordExplorer />,
    },
    {
      icon: LogOut,
      label: "Logout",
      value: "logout",
      component: null,
    },
  ];

  // Log Out
  const handleLogout = () => {
    resetCredentials();
    sessionStorage.clear();
  };

  return (
    <div className="flex h-full min-h-screen bg-gradient-to-br from-[#3168ba]/10 to-[#73c3e8]/10">
      <aside className="w-64 bg-white shadow-lg hidden md:block border-r">
        <div className="p-6 h-full bg-gradient-to-b from-[#3168ba]/5 to-[#73c3e8]/5">
          <div className="mb-8">
            <h2 className="text-xl font-extrabold text-[#3168ba]">
              Prathibha Learn
            </h2>
            <p className="text-sm text-gray-500">Instructor Portal</p>
          </div>
          <nav className="space-y-3">
            {menuItems.map((item) => (
              <Button
                key={item.value}
                variant={activeTab === item.value ? "secondary" : "ghost"}
                className={`w-full justify-start transition-all duration-200 ${
                  activeTab === item.value
                    ? "bg-gradient-to-r from-[#3168ba] to-[#73c3e8] text-white hover:from-[#3168ba]/90 hover:to-[#73c3e8]/90"
                    : null
                }`}
                onClick={
                  item.value === "logout"
                    ? handleLogout
                    : () => setActiveTab(item.value)
                }
              >
                {/* Icon and Label */}
                <item.icon className="mr-3 h-4 w-4" /> {item.label}
              </Button>
            ))}
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h1 className="text-3xl font-bold text-[#3168ba]">
              {/* Set the header */}
              {menuItems.find((item) => item.value === activeTab)?.label}
            </h1>
          </div>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {menuItems.map((item) => (
              <TabsContent
                key={item.value}
                value={item.value}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                {/* Show Individual Components */}
                {item.component !== null ? item.component : null}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default InstructorDashboardPage;
