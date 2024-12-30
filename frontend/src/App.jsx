import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import RouteGuard from "./components/route-guard/RouteGuard";
import { useContext } from "react";
import { AuthContext } from "./context/auth-context/AuthContext";
import InstructorDashboardPage from "./pages/instructor/dashboard/InstructorDashboardPage";
import StudentHome from "./pages/student/home/StudentHome";
import AddNewCoursePage from "./pages/instructor/add-course/AddNewCoursePage";
import CourseDetailsPage from "./pages/student/course-details/CourseDetailsPage";

function App() {
  const { auth } = useContext(AuthContext);

  console.log("User : ", auth.user);

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
              element={<StudentHome />}
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
