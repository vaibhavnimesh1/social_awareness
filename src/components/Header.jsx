import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const sucess = false;
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          LOGO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto  mb-2 mb-lg-0 ">
            <li className="nav-item ">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/aboutus"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link active" aria-current="page" to="/cause">
                Causes
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/promotion"
              >
                Bussiness promotion
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/contact"
              >
                ContactUs
              </Link>
            </li>

            <Link
              to="/login"
              className=" d-flex  justify-content-center   align-items-center "
            >
              <p className=" d-flex  justify-content-center   align-items-center mt-1  ">
                Existing User?
              </p>

              <button className="btn btn-outline-success m-2 " type="submit">
                Signin
              </button>
            </Link>

            {sucess == true && (
              <li className="nav-item ">
                <Link
                  className="nav-link active fs-3 "
                  aria-current="page"
                  to="/profile"
                >
                  <i className="fa-solid fa-user"></i>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
