import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const BASE_URL = "http://192.168.29.39:4016";
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: " ",
    email: " ",
    password: " ",
    username: " ",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await axios.post(`${BASE_URL}/register`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);

      if (response.status === 200) {
        // navigate("/profile");
        alert("Registered successfully!");
        // if (response.data.role === "user") {
        // }
      } else {
        alert("Failed to register");
      }
    } catch (error) {
      console.error("Error ", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="name"
              name="name"
              className="form-control"
              placeholder="Name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email Address"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Username"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Sign Up"}
          </button>
        </form>
        <div className="d-flex justify-content-evenly mt-3">
          <p>Already a member?</p>
          <Link to="/login">Login here</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
