import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const token = userData ? userData.token : null;
    return !!token;
  };
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
