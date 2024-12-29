import StudentCommonLayout from "@/components/student-view/CommonLayout";
import { AuthContext } from "@/context/auth-context/AuthContext";
import React, { useContext } from "react";

const StudentHome = () => {
  const { resetCredentials } = useContext(AuthContext);
  const handleLogout = () => {
    resetCredentials();
    sessionStorage.clear();
  };
  return (
    <div>
      <StudentCommonLayout />
    </div>
  );
};

export default StudentHome;
