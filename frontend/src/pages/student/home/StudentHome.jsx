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
      <h1>Student Home</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default StudentHome;
