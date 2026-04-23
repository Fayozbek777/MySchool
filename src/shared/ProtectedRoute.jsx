import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated =
    localStorage.getItem("isAdminAuthenticated") === "true";
  const adminPath = import.meta.env.VITE_ADMIN_PATH;

  if (!isAuthenticated) {
    return <Navigate to={`${adminPath}/login`} replace />;
  }

  return children;
};

export default ProtectedRoute;
