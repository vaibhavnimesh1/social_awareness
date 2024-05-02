import React from "react";
import "../style.css"
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="container my-5">
      <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Login Form</h2>

        <form>
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

          <Link to="/" className="d-block mb-3">
            Forgot password?
          </Link>

          <button type="button" className="btn btn-primary w-100 ">
            Login
          </button>

          <div className="d-flex  justify-content-evenly  mt-3">
            <p>Not a member?</p>
            <Link to="/signup">Signup now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
