import React, { useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Users, Activity, Book as BookIcon } from "lucide-react";
import { InstructorContext } from "@/context/instructor-context/InstructorContext";

const InstructorDashboard = () => {
  const { dashboardData } = useContext(InstructorContext);
  const statsData = [
    {
      title: "Total Students",
      value: dashboardData.totalStudents,
      icon: Users,
      description: "Active learners",
    },
    {
      title: "Total Courses",
      value: dashboardData.totalCourses,
      icon: Book,
      description: "Published courses",
    },
    {
      title: "Daily Active Users",
      value: dashboardData.dailyActiveUsers,
      icon: Activity,
      description: "Last 24 hours",
    },
    {
      title: "Word Mastery",
      value: dashboardData.totalWords,
      icon: BookIcon,
      description: "Words per day",
    },
  ];

  // console.log("Dashboard Data : " , statsData);
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold from-[#3168ba] to-[#73c3e8] bg-gradient-to-r bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add some charts in Admin Dashboard */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Course Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center text-muted-foreground">
              Course activity chart will be displayed here
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Word Mastery Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center text-muted-foreground">
              Word mastery progress will be displayed here
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InstructorDashboard;
