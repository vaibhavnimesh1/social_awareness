import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-white p-2 h-100   ">
      <div>
        <i className="bi bi-bootstrap-fill my-2"></i>
        <span className="fs-4 brand-name">Admin</span>
      </div>

      <hr className="text-dark" />

      <div className="list-group list-group-flush">
      <Link
          to="create-donation"
          className="list-group-item list-group-item-action py-2"
        >
          <i className="bi bi-people fs-5 me-2"></i>
          <span> Donation</span>
        </Link>
       
        <Link
          to="category"
          className="list-group-item list-group-item-action py-2"
        >
          <i className="bi bi-house fs-5 me-2"></i>
          <span> Category</span>
        </Link>
        <Link
          to="cause"
          className="list-group-item list-group-item-action py-2"
        >
          <i className="bi bi-house fs-5 me-2"></i>
          <span> Cause</span>
        </Link>
        <Link
          to="create-promotion"
          className="list-group-item list-group-item-action py-2"
        >
          <i className="bi bi-house fs-5 me-2"></i>
          <span>Promotions</span>
        </Link>
        <Link
          to="create-business"
          className="list-group-item list-group-item-action py-2"
        >
          <i className="bi bi-people fs-5 me-2"></i>
          <span> Business</span>
        </Link>
        <Link
          to="create-alignment"
          className="list-group-item list-group-item-action py-2"
        >
          <i className="bi bi-people fs-5 me-2"></i>
          <span> Alignment</span>
        </Link>
     
       
      </div>
    </div>
  );
};

export default Sidebar;
