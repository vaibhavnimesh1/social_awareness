import "./AdminDashboard.css";
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import AdminHome from "./Components/AdminHome.jsx";
import CreateUser from "./Components/CreateUser.jsx";
import CreateBusiness from "./Components/Business.jsx";
import CreatePromotion from "./Components/CreatePromotion.jsx";
import Cause from "./Components/Cause.jsx";
import Category from "./Components/Category.jsx";
import Alignment from "./Components/Alignment.jsx";
import Donation from "./Components/Donation.jsx";
import Nav from "./Components/Nav.jsx";

const AdminDashboard = () => {
  const [toggle, settoggle] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("adminData"));

    const t = userData.token;
    // const role = userData.doc.role;

    // console.log(role);
    if (token == null && !token);
    setToken(t);
  }, []);

  return (
    <div className=" container-fluid  ">
      <div className=" row w-100 ">
        {toggle && (
          <div className=" col-3 m-0  p-0 ">
            {" "}
            <Sidebar  />
          </div>
        )}
        <div className="h-100 col m-0  p-0 mx-3  ">
          <Nav settoggle={settoggle} toggle={toggle} />
          <Routes>
            <Route path="/" element={<AdminHome token={token} />} />
            <Route path="category" element={<Category token={token} />} />
            <Route path="cause" element={<Cause token={token} />} />
            <Route path="create-user" element={<CreateUser token={token} />} />
            <Route
              path="create-business"
              element={<CreateBusiness token={token} />}
            />
            <Route
              path="create-alignment"
              element={<Alignment token={token} />}
            />
            <Route
              path="create-donation"
              element={<Donation token={token} />}
            />
            <Route
              path="create-promotion"
              element={<CreatePromotion token={token} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
