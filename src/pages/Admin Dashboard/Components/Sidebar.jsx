import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-white p-2 h-100">
      <div>
        <i className="bi bi-bootstrap-fill my-2"></i>
        <span className="fs-4 brand-name">Admin</span>
      </div>

      <hr className="text-dark" />

      <div className="list-group list-group-flush">
        <Link
          to="/admin"
          className="list-group-item list-group-item-action py-2"
        >
          <i className=" fa fa-light-home"></i>
          <span>Home</span>
        </Link>
        <Link
          to="/admin/create-promotion"
          className="list-group-item list-group-item-action py-2"
        >
          <i className="bi bi-house fs-5 me-2"></i>
          <span>Create Promotions</span>
        </Link>
        <Link
          to="/admin/create-business"
          className="list-group-item list-group-item-action py-2"
        >
          <i className="bi bi-people fs-5 me-2"></i>
          <span>Create Business</span>
        </Link>
        <Link
          to="/logout"
          className="list-group-item list-group-item-action py-2"
        >
          <i className="bi bi-house fs-5 me-2"></i>
          <span></span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
