import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import RouteGuard from "./components/route-guard/RouteGuard";
import { useContext } from "react";
import { AuthContext } from "./context/auth-context/AuthContext";
import StudentViewCommonLayout from "./components/student-view/CommonLayout";
import InstructorDashboardPage from "./pages/instructor/dashboard/InstructorDashboardPage";
import StudentHome from "./pages/student/home/StudentHome";

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
          <Route path="home" element={<StudentHome />} />
          <Route path="/" element={<StudentHome />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
