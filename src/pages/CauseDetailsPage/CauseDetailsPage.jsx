import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./CauseDetailsPage.css";
import { BASE_URL } from "../../constant/constant";

const CauseDetailsPage = ({ token }) => {
  const { id } = useParams();
  const [userId, setUserId] = useState("");
  const [causes, setCauses] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData) return;

    const userDataId = userData?.doc?._id || "";
    setUserId(userDataId);
  }, []);

  const fetchCauses = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getCause`);
      if (response?.data?.success) {
        setCauses(response?.data?.doc);
      }
    } catch (error) {
      console.error("Error fetching causes:", error);
    }
  };

  useEffect(() => {
    fetchCauses();
  }, []);

  const filterData = causes.filter((item) => item._id === id);
  // console.log(filterData[0].image);
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

        setShowModal(false);
        data.amount = "";
      }
    } catch (error) {
      console.error("Error creating cause:", error);
    }
  };

  const alertMessage = () => {
    alert("Please login first!!!");
  };

  const isAuthenticated = () => {
    return localStorage.getItem("userData") ? true : false;
  };

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <div className="container m-0  p-0  mb-5  row">
      <div className=" col-12 col-lg-6 d-flex flex-column gap-2">
        <section className="d-flex  m-0  flex-column ">
          <h2>{filterData[0]?.title}</h2>
          <p>{filterData[0]?.description}</p>
          <p>Target Goal: $1000</p>
        </section>

        <section className="mb-md-4 w-100 d-flex justify-content-evenly">
          {!isAuthenticated() ? (
            <button onClick={alertMessage} className="btn  border-black p-2">
              Donate for this Cause
            </button>
          ) : (
            <button
              type="button"
              className="btn  border-black p-2"
              onClick={() => setShowModal(true)}
            >
              Donate for this Cause
            </button>
          )}

          <button className="btn border-black p-2">Share</button>
          <button className="btn border-black p-2">
            Participate in discussion
          </button>
        </section>
      </div>
      <div className="col-lg-6 mx-auto mt-5 details-img-box">
        <img src={`${BASE_URL}/${filterData[0]?.image}`} alt="Image..." />
      </div>

      {/* Modal */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="input mb-3 mt-3 border-1 border-black p-2">
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

                <div>
                  <button type="submit" className="btn   btn-success w-50">
                    Submit
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="btn  btn-danger w-50"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
    </div>
  );
};

export default CauseDetailsPage;
