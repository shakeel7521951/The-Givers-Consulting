import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const { profile } = useSelector((state) => state.user);

  if (!profile) {
    if (!toast.isActive("login-warning")) {
      toast.warn("Please log in to access this page.", {
        toastId: "login-warning", 
      });
    }
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
