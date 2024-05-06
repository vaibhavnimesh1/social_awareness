import React, { useState } from "react";
import "../style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const BASE_URL = "http://127.0.0.1:4016";
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/login`,
        `username=${username}&password=${password}`
      );
  
      console.log(response);
  
      if (response.status === 200) {
        navigate("/profile");
      } else {
        alert("Wrong credentials");
      }
    } catch (error) {
      console.error("Error ", error);
      alert("Failed to login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row ">
        <div className=" col-12 col-lg-6 d-flex justify-content-center  align-items-center  flex-column  ">
          <h3 className=" text-start  w-100 "> Login</h3>

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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
