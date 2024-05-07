import React, { useState } from "react";
import "../style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const BASE_URL = "http://192.168.29.39:4016";
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.password || !formData.username) {
      alert("All fields are required!!!");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/login`, formData);
      console.log("response :", response);
      if (response?.data?.success === false) {
        alert("Wrong credentials");
        return;
      }
      if (!response?.data?.success) {
        alert("Wrong credentials or user not found");
        return;
      } else {
        console.log("ROLE:", response?.data?.data?.doc?.role);
        if (response?.data?.data?.doc?.role === "user") {
          alert(response?.data?.message);
          navigate("/profile");
          localStorage.setItem(
            "userData",
            JSON.stringify(response?.data?.data)
          );
        }
        if (response?.data?.data?.doc?.role === "admin") {
          alert(response?.data?.message);
          navigate("/admin");
          localStorage.setItem(
            "adminData",
            JSON.stringify(response?.data?.data)
          );
        }
      }
      // if (response?.data?.data?.doc?.role === "admin") {
      //   navigate("/admin");
      // }
    } catch (error) {
      console.error("Error ", error);
      // alert("Failed to login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row ">
        <div className=" col-12 col-lg-6 d-flex justify-content-center  align-items-center  flex-column  ">
          <h3 className=" text-start  w-100 "> Signin</h3>

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

        <div className="col-12  col-lg-6 col-md-6 ">
          <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
            <h2 className="text-center mb-4">Signin </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>

              {/* <Link to="/" className="d-block mb-3">
                Forgot password?
              </Link> */}

              <button
                type="submit"
                className="btn btn-primary w-100 "
                disabled={loading}
              >
                {loading ? "loading..." : "Login"}
              </button>

              <div className="d-flex  justify-content-evenly  mt-3">
                <p>Not a member?</p>
                <Link to="/">Signup now</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
