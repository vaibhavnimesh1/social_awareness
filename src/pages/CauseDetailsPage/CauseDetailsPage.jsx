import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
const CauseDetailsPage = ({ token }) => {
  // console.log(token);
  const [userId, setuserId] = useState("");

  // console.log(userId);
  const { id } = useParams();

  const [causes, setCauses] = useState([]);
  const BASE_URL = "http://137.184.199.153:4016";

  // console.log(causes?.filter((item) => item._id === id));

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    // console.log(userData.doc._id);
    if (!userData) return;

    const userDataId = userData?.doc?._id || "";
    // console.log(userDataId);
    setuserId(userDataId);
  }, []);

  const fetchCauses = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getCause`);
      if (response?.data?.success) {
        setCauses(response?.data?.doc);
        // console.log("Get :", response);
      }
    } catch (error) {
      console.error("Error fetching causes:", error);
    }
  };

  useEffect(() => {
    fetchCauses();
  }, []);

  const filterData = causes.filter((item) => item._id === id);

  const [data, setData] = useState({
    amount: "",
    userId: "",
    causeId: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleCreateCause = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("amount", data.amount);
      formData.append("userId", userId);
      formData.append("causeId", id);

      const response = await axios.post(
        `${BASE_URL}/createDonation`,
        formData,
        {
          headers: {
            "Content-Type": " application/x-www-form-urlencoded",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response?.data?.success) {
        alert("Cause created");
        // window.location.reload()
      }
    } catch (error) {
      console.error("Error creating cause:", error);
    }
  };

  const alertMessage = () => {
    alert("Please login first!!!");
  };

  const isAuthenticated = () => {
    if (localStorage.getItem("userData")) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    isAuthenticated();

    console.log(isAuthenticated());
  }, []);

  return (
    <div className=" container row">
      <div className=" p-5  col-8 d-flex flex-column  gap-2 ">
        <section className=" d-flex flex-column  gap-5 ">
          <h2>{filterData[0]?.title}</h2>
          <p>{filterData[0]?.description}</p>
          <p>Target Goal: $1000</p>
        </section>

        <section className="mb-4 w-100  d-flex justify-content-evenly ">
          {!isAuthenticated() ? (
            <button
              onClick={alertMessage}
              className="btn btn-primary border-black p-2   "
            >
              {" "}
              Donate for this Cause
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary border-black p-2   "
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Donate for this Cause
            </button>
          )}

          <button className="btn border-black p-2   ">Share</button>
          <button className="btn border-black p-2  ">
            Participate in discussion
          </button>
        </section>
      </div>
      <div className=" col-4 mx-auto mt-5 ">
        <nav className="navbar w-100 mx-auto my-auto  ">
          <div className="container-fluid  p-0  ">
            <form
              className="d-flex align-items-center justify-content-evenly  w-100 border-black "
              role="search"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <i className="fa-solid fa-microphone"></i>
            </form>
          </div>

          <ul className="list-group py-3 w-100 ">
            <li className="list-group-item">Related Cause</li>
            <li className="list-group-item">Cause 1</li>
            <li className="list-group-item">Cause 2</li>
            <li className="list-group-item">Cause 3</li>
            <li className="list-group-item">-----------</li>
          </ul>
        </nav>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="input mb-3 mt-3 border-1  border-black  p-2 ">
              <form onSubmit={handleCreateCause}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Amount
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="amount"
                    value={data.amount}
                    onChange={handleChange}
                    required
                    placeholder="Amount"
                  />
                </div>

                <button type="submit" className="btn btn-success w-100   ">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal --> */}
    </div>
  );
};

export default CauseDetailsPage;
