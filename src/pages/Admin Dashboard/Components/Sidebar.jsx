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
          to="/admin/category"
          className="list-group-item list-group-item-action py-2"
        >
          <i className="bi bi-house fs-5 me-2"></i>
          <span> Category</span>
        </Link>
        <Link
          to="/admin/cause"
          className="list-group-item list-group-item-action py-2"
        >
          <i className="bi bi-house fs-5 me-2"></i>
          <span> Cause</span>
        </Link>
        <Link
          to="/admin/create-promotion"
          className="list-group-item list-group-item-action py-2"
        >
          <i className="bi bi-house fs-5 me-2"></i>
          <span>Promotions</span>
        </Link>
        <Link
          to="/admin/create-business"
          className="list-group-item list-group-item-action py-2"
        >
          <i className="bi bi-people fs-5 me-2"></i>
          <span> Business</span>
        </Link>
        <Link
          to="/admin/create-alignment"
          className="list-group-item list-group-item-action py-2"
        >
          <i className="bi bi-people fs-5 me-2"></i>
          <span> Alignment</span>
        </Link>
        <Link
          to="/admin/create-donation"
          className="list-group-item list-group-item-action py-2"
        >
          <i className="bi bi-people fs-5 me-2"></i>
          <span> Donation</span>
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
