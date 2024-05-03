import React from "react";
import "../style.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container py-5 ">
      <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Signup </h2>

        <form>
          <div className="mb-3">
            <input type="name" className="form-control" placeholder="Name" />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
            />
          </div>

          <button type="button" className="btn btn-primary w-100 ">
            Sign Up
          </button>
        </form>

        <div className="d-flex  justify-content-evenly  mt-3">
          <p>Already a member?</p>
          <Link to="/">Login here</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
