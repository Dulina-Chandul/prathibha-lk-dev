import InstructorCourses from "@/components/instructor-view/courses/InstructorCourses";
import InstructorDashboard from "@/components/instructor-view/dashboards/InstructorDashboard";
import WordExplorer from "@/components/instructor-view/word-explorer/WordExplorer ";
import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";
import { AuthContext } from "@/context/auth-context/AuthContext";
import { InstructorContext } from "@/context/instructor-context/InstructorContext";
import { TabsContent } from "@radix-ui/react-tabs";
import { BarChart, Book, LogOut } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";

const InstructorDashboardPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const {
    resetCredentials,
    numberOFLoginsInASession,
    setNumberOFLoginsInASession,
  } = useContext(AuthContext);

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

  // Showing Toast effect for loggin
  useEffect(() => {
    if (numberOFLoginsInASession === 1) {
      console.log("Loggin Successfully!");
      toast.success("Loggin Successfully!", {
        position: "top-right",
      });
      setNumberOFLoginsInASession(0);
    }
  }, []);

  const { loading } = useContext(InstructorContext);

  useEffect(() => {
    console.log("Loading state updated:", loading);
  }, [loading]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="text-center">
          <PulseLoader color="#a21caf" size={15} />
          <p className="mt-4 text-white">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-screen bg-gradient-to-br from-[#3168ba]/10 to-[#73c3e8]/10">
      <aside className="w-64 bg-white shadow-lg hidden md:block border-r">
        <div className="p-6 h-full bg-gradient-to-b from-[#3168ba]/5 to-[#73c3e8]/5">
          <div className="mb-8">
            <Link className="flex items-center" to="/home">
              <h1 className="h-15 text-[#14b8a6] text-2xl font-bold">P</h1>
              <h1 className="h-9 w-auto text-2xl text-[#14b8a6] font-bold">
                rathibha <span className="text-[#d946ef]">learn</span>
              </h1>
              <p className="sr-only">Prathibha learn</p>
            </Link>
            <p className="text-sm font-semibold text-gray-500">
              Admin Dashboard
            </p>
          </div>
          <nav className="space-y-3">
            {menuItems.map((item) => (
              <Button
                key={item.value}
                variant={activeTab === item.value ? "secondary" : "ghost"}
                className={`w-full justify-start transition-all duration-200 ${
                  activeTab === item.value
                    ? "bg-gradient-to-r from-[#a21caf] to-[#d946ef] text-white hover:from-[#a21caf]/90 hover:to-[#d946ef]/90"
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
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#a21caf] to-[#d946ef] bg-clip-text text-transparent">
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
          <Toaster toastOptions={{ duration: 8000 }} />
        </div>
      </main>
    </div>
  );
};

export default InstructorDashboardPage;
