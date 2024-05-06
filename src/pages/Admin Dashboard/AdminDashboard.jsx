import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import AdminHome from "./Components/AdminHome.jsx";
import "./AdminDashboard.css";
import CreateUser from "./Components/CreateUser.jsx";
import { Route, Routes } from "react-router-dom";

const AdminDashboard = () => {
  const [toggle, settoggle] = useState(true);
  return (
    <div className=" container-fluid  dashboard">
      <div className=" row w-100  h-100 min-vh-100  ">
        {toggle && (
          <div className=" col-2 h-100  vh-100    ">
            {" "}
            <Sidebar />
          </div>
        )}
        <div className="h-100 col">
        
          <Routes>
            <Route path="/" element={<AdminHome />} />
            <Route path="/create-user" element={<CreateUser />} />

            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
