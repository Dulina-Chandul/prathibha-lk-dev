import React, { Fragment } from "react";
import { Navigate, useLocation } from "react-router-dom";

const RouteGuard = ({ authenticated, user, element }) => {
  const location = useLocation();

  // Redirect to the Auth page is the user is not authenticated
  if (!authenticated && !location.pathname.includes("/auth")) {
    return <Navigate to="/auth" />;
  }

  // Redirect to the home if the role is not the instructor
  if (
    authenticated &&
    user?.role !== "instructor" &&
    (location.pathname.includes("/instructor") ||
      location.pathname.includes("/auth"))
  ) {
    return <Navigate to="/home" />;
  }

  // Redirect instructor to the instructor route if he tries to navigate to the students route
  if (
    authenticated &&
    user?.role === "instructor" &&
    !location.pathname.includes("/instructor")
  ) {
    return <Navigate to="/instructor" />;
  }

  return <Fragment>{element}</Fragment>;
};

export default RouteGuard;
