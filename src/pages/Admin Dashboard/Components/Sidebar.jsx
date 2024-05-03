import React from "react";
import "./style.css"
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" bg-white  p-2  ">
      <div>
        <i className="bi bi-bootstrap-fill my-2 "></i>
        <span className=" fs-4 brand-name"> Admin</span>
      </div>

      <hr className="text-dark" />

      <div className="list-group list-group-flush">
        <Link className="list-group-item list-group-item-action  py-2 ">
          <i className=" bi bi-speedometer2 fs-5  me-2  "></i>
          <span>Dashboard</span>
        </Link>
        <Link className="list-group-item list-group-item-action  py-2 ">
          <i className=" bi bi-house fs-5  me-2  "></i><span>Home</span>
        </Link>
        <Link className="list-group-item list-group-item-action  py-2 ">
          <i className=" bi bi-house fs-5  me-2  "></i><span>Create </span>
        </Link>
        <Link className="list-group-item list-group-item-action  py-2 ">
          <i className=" bi bi-people fs-5  me-2  "></i><span>Customer </span>
        </Link>
        <Link className="list-group-item list-group-item-action  py-2 ">
          <i className=" bi bi-house fs-5  me-2  "></i><span>Logout </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
