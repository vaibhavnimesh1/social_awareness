import "./AdminDashboard.css";
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import AdminHome from "./Components/AdminHome.jsx";
import CreateUser from "./Components/CreateUser.jsx";
import CreateBusiness from "./Components/CreateBusiness.jsx";
import CreatePromotion from "./Components/CreatePromotion.jsx";
import Nav from "./Components/Nav.jsx";

const AdminDashboard = () => {
  const [token, setToken] = useState(null);

  const [toggle, settoggle] = useState(true);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("adminData"));
    const t = userData ? userData.token : null;
    setToken(t);
  }, []);
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
          <Nav settoggle={settoggle} toggle={toggle} />
          <Routes>
            <Route
              path="/"
              element={<AdminHome settoggle={settoggle} toggle={toggle} />}
            />
            <Route path="/createuser" element={<CreateUser token={token} />} />
            <Route
              path="/create-business"
              element={<CreateBusiness token={token} />}
            />
            <Route
              path="/create-promotion"
              element={<CreatePromotion token={token} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
