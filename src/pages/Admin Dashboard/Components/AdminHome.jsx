import React from "react";
import "./Nav.jsx";
import Nav from "./Nav.jsx";

const AdminHome = ({ settoggle, toggle }) => {
  return (
    <div>
      <Nav settoggle={settoggle} toggle={toggle} />
    </div>
  );
};

export default AdminHome;
