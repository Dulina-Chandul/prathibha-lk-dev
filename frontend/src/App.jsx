import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import RouteGuard from "./components/route-guard/RouteGuard";
import { useContext } from "react";
import { AuthContext } from "./context/auth-context/AuthContext";
import Dashboard from "./pages/instructor/dashboard/Dashboard";
import StudentViewCommonLayout from "./components/student-view/CommonLayout";
import Home from "./pages/student/home/Home";

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
              element={<Dashboard />}
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
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
