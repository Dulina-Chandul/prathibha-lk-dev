import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import RouteGuard from "./components/route-guard/RouteGuard";
import { useContext } from "react";
import { AuthContext } from "./context/auth-context/AuthContext";
import StudentViewCommonLayout from "./components/student-view/CommonLayout";
import InstructorDashboardPage from "./pages/instructor/dashboard/InstructorDashboardPage";
import StudentHome from "./pages/student/home/StudentHome";
import AddNewCoursePage from "./pages/instructor/add-course/AddNewCoursePage";
import CoursesTab from "./components/student-view/CourseTab";
import CourseDetailsPage from "./pages/student/course-details/CourseDetailsPage";

function App() {
  const { auth } = useContext(AuthContext);
  console.log(auth);

  return (
    <div>
      <Routes>
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
        {/* Add new course */}
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
        <Route
          path="/"
          element={
            <RouteGuard
              element={<StudentViewCommonLayout />}
              authenticated={auth.authenticated}
              user={auth.user}
            />
          }
        >
          <Route path="/" element={<CoursesTab />} />
          <Route path="/courses/:id" element={<CourseDetailsPage />} />
          <Route path="home" element={<StudentHome />} />
          {/* <Route path="/" element={<StudentHome />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
