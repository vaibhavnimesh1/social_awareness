import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer py-4 bg-body-secondary  ">
      <div className="container">
        <div className="row m-0  p-0 justify-content-center  ">
          <div className="col-md-3 col-6 ">
            <h5>About Us</h5>
            <ul className="list-unstyled  ">
              <li>
                <Link to="/aboutus">Our Story</Link>
              </li>
              <li>
                <Link to="/aboutus">Mission & Vision</Link>
              </li>
              <li>
                <Link to="/aboutus">Team</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-6 ">
            <h5>Contact</h5>
            <ul className="list-unstyled  ">
              <li>
                <Link to="/contact">Email Us</Link>
              </li>
              <li>
                <Link to="/contact">Call Us</Link>
              </li>
              <li>
                <Link to="/contact">Visit Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-6 ">
            <h5>Legal</h5>
            <ul className="list-unstyled  ">
              <li>
                <Link to="/">Terms of Service</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Cookie Policy</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-6 ">
            <h5>Follow Us</h5>
            <ul className="list-unstyled  ">
              <li>
                <Link to="/">Facebook</Link>
              </li>
              <li>
                <Link to="/">Twitter</Link>
              </li>
              <li>
                <Link to="/">Instagram</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
