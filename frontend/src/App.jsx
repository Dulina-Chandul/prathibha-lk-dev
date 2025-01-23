import { Route, Router, Routes } from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import RouteGuard from "./components/route-guard/RouteGuard";
import { useContext } from "react";
import { AuthContext } from "./context/auth-context/AuthContext";
import InstructorDashboardPage from "./pages/instructor/dashboard/InstructorDashboardPage";
import StudentHome from "./pages/student/home/StudentHome";
import AddNewCoursePage from "./pages/instructor/add-course/AddNewCoursePage";
import CourseDetailsPage from "./pages/student/course-details/CourseDetailsPage";
import UpdateCoursePage from "./pages/instructor/update-coure-page/UpdateCoursePage";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";

function App() {
  const { auth, setNumberOFLoginsInASession, numberOFLoginsInASession } =
    useContext(AuthContext);

  console.log("User : ", auth.user);

  // console.log("Number of logins in a session: ", numberOFLoginsInASession);

  return (
    <div>
      <Routes>
        {/* <Route path="/homepage" element={<Home />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/auth"
          element={
            <RouteGuard
              element={<AuthPage />}
              authenticated={auth.authenticated}
              user={auth.user}
            />
          }
        />

        {/* Instructor routes */}
        {/*  Dashboard */}
        <Route
          path="/instructor"
          element={
            <RouteGuard
              element={<InstructorDashboardPage />}
              authenticated={auth.authenticated}
              user={auth.user}
            />
          }
        />
        {/* Create new course */}
        <Route
          path="/instructor/create-new"
          element={
            <RouteGuard
              element={<AddNewCoursePage />}
              authenticated={auth.authenticated}
              user={auth.user}
            />
          }
        />
        {/* Update course */}
        <Route
          path="/instructor/update/:id"
          element={
            <RouteGuard
              element={<UpdateCoursePage />}
              authenticated={auth.authenticated}
              user={auth.user}
            />
          }
        />

        <Route
          path="/home"
          element={
            <RouteGuard
              element={<StudentHome />}
              authenticated={auth.authenticated}
              user={auth.user}
            />
          }
        />
        <Route
          path="/courses/:id"
          element={
            <RouteGuard
              element={<CourseDetailsPage />}
              authenticated={auth.authenticated}
              user={auth.user}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
