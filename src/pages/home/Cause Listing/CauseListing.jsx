import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CauseListing.css";
import axios from "axios";

const CauseListing = ({ token }) => {
  const [causes, setCauses] = useState([]);
  const BASE_URL = "http://137.184.199.153:4016";
  // console.log(causes);

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
  }, [token]);

  return (
    <div className=" container-fluid m-0 p-0   row">
      <div className=" p-md-5 p-2  col-12 d-flex flex-column  ">
        <section className="mb-4 d-flex flex-column  gap-5  ">
          <h2>Cause List</h2>

          <div className=" d-flex flex-wrap gap-5 justify-content-evenly ">
            {causes &&
              causes.map((item) => (
                <div className="card cause-card" key={item._id}>
                  <div className="img-card">
                    <img
                      className="card-img-top"
                      src={`${BASE_URL}${
                        item.image.startsWith("/") ? "" : "/"
                      }${item.image}`}
                      alt="Images"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <Link
                      to={`/causeDetails/${item._id}`}
                      className="btn btn-primary"
                    >
                      Go somewhere
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CauseListing;
