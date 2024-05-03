import React from "react";
import "../style.css"
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="container py-5">
    <div className="row ">

    <div className=" col-12 col-lg-6 d-flex justify-content-center  align-items-center  flex-column  ">
          <h3 className=" text-start  w-100 "> Page</h3>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

    <div className="col-6 ">

    <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Signin </h2>

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
     
    </div>
    </div>
  );
};

export default SignIn;
