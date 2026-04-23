import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Admin/Login/Login";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import AdminCourses from "../pages/Admin/Courses/AdminCourses";
import AdminTeachers from "../pages/Admin/Teachers/AdminTeachers";
import AdminReviews from "../pages/Admin/Reviews/AdminReviews";
import Settings from "../pages/Admin/Settings/Settings";
import ProtectedRoute from "../shared/ProtectedRoute";

const adminPath = import.meta.env.VITE_ADMIN_PATH;

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={`${adminPath}/login`} element={<Login />} />
      <Route
        path={adminPath}
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path={`${adminPath}/courses`}
        element={
          <ProtectedRoute>
            <AdminCourses />
          </ProtectedRoute>
        }
      />
      <Route
        path={`${adminPath}/teachers`}
        element={
          <ProtectedRoute>
            <AdminTeachers />
          </ProtectedRoute>
        }
      />
      <Route
        path={`${adminPath}/reviews`}
        element={
          <ProtectedRoute>
            <AdminReviews />
          </ProtectedRoute>
        }
      />
      <Route
        path={`${adminPath}/settings`}
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
      <Route path="/admin" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
