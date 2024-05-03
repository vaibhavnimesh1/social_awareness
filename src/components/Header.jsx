import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary " >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" >
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
              <Link className="nav-link active" aria-current="page" to="/aboutus">
                About Us
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link active" aria-current="page" to="/cause">
                Causes
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link active" aria-current="page" to="/promotion">
                Bussiness promotion
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link active" aria-current="page" to="/contact">
                ContactUs
              </Link>
            </li>
            {/* <li className="nav-item ">
              <Link className="nav-link active" aria-current="page" to="/createcauseform">
                Causes Form
              </Link>
            </li> */}
            <Link to="/login" className=" d-flex  justify-content-center   align-items-center ">
            <p className=" d-flex  justify-content-center   align-items-center mt-1  ">Existing User?</p>
  
<button className="btn btn-outline-success m-2 " type="submit">
          Signin
            </button>
</Link>
         {/* <Link to="/signup">  <button className="btn btn-outline-success" type="submit">
          Signup
            </button></Link>
             */}
          </ul>
          {/* <form className="d-flex me-2" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}

        </div>
      </div>
    </nav>
  );
};

export default Header;
