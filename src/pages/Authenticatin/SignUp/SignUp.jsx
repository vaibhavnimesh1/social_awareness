import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const BASE_URL = "http://192.168.29.39:4016";
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.username
    ) {
      alert("All fields are required!!!");
      return;
    }
    setSubmitting(true);
    try {
      const response = await axios.post(`${BASE_URL}/register`, formData);
      console.log(response?.data);

      const { data } = response;
      if (data?.success === false) {
        alert(data?.message);
        return;
      }else{

        alert(data?.message)
        navigate("/profile")
      }
    } catch (error) {
      console.error("Error ", error);
      console.log(error);
      alert(" Please try again later.");
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
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={formData.password}
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
