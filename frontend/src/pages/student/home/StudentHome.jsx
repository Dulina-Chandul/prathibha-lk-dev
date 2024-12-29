import StudentCommonLayout from "@/components/student-view/CommonLayout";
import Header from "@/components/student-view/Header";
import { AuthContext } from "@/context/auth-context/AuthContext";
import React, { useContext } from "react";

const StudentHome = () => {
  return (
    <div>
      <Header />
      <StudentCommonLayout />
    </div>
  );
};

export default StudentHome;
