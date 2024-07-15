import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, roles }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (token?.length < 10) {
    // If no token, redirect to login page
    return <Navigate to="/login" />;
  }

  if (roles && !roles.includes(role)) {
    if (role === "admin") {
      return <Navigate to="/admin/products" />;
    } else {
      return <Navigate to="/login" />;
    }
    // If the user role is not authorized, redirect to the appropriate page
  }

  // If everything is fine, render the children components
  return children;
};

export default ProtectedRoute;
