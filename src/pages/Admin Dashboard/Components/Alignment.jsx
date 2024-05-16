import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../constant/constant";

const Alignment = ({ token }) => {
  const [toggle, setToggle] = useState(false);
  const [alignment, setAlignment] = useState([]);
  const [business, setbusiness] = useState([]);

  const [selectedbusinessId, setSelectedbusinessId] = useState("");
  const [selectedCauseId, setSelectedCauseId] = useState("");
  const [causes, setCauses] = useState([]);
  //   console.log(causes);

  const handleChange = (e) => {
    if (e.target.name === "business") {
      setSelectedbusinessId(e.target.value);
    } else if (e.target.name === "cause") {
      setSelectedCauseId(e.target.value);
    }
  };

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
    // console.log("fff", token);

    fetchCauses();
  }, [token]);

  // Get Alignment

  const fetchAlignment = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getAlignwith`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response?.data?.success) {
        setAlignment(response?.data?.doc);
        // console.log("GET :", response);
      }
    } catch (error) {
      console.error("Error fetching alignment:", error);
    }
  };

  const handleCreatePromotion = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("businessId", selectedbusinessId);
      formData.append("causeId", selectedCauseId);

      const response = await axios.post(
        `${BASE_URL}/createAlignwith`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      //   console.log(response);

      if (response?.data?.success) {
        alert("Promotion created");
        fetchAlignment();
        setToggle(false);
      }
    } catch (error) {
      console.error("Error creating cause:", error);
    }
  };

  useEffect(() => {
    fetchAlignment();
  }, [token]);

  const fetchBusinessData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getBusiness`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response && response?.data?.success === true) {
        setbusiness(response?.data?.doc);
        // console.log(response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchBusinessData();
  }, [token]);

  return (
    <div>
      {!alignment.length ? (
        <p>No Cause Found</p>
      ) : (
        <div>
          <div className=" d-flex  justify-content-end  mb-3 ">
            <button
              onClick={() => setToggle(!toggle)}
              className="btn btn-success w-auto "
            >
              Create Alignwith
            </button>
          </div>

          {toggle && (
            <div className="input mb-3 mt-3 border-1  border-black  p-2 ">
              <form onSubmit={handleCreatePromotion}>
                <div className="dropdown   border-1 border-black  mb-3   w-100 ">
                  <select
                    className="form-select"
                    name="business"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Business</option>
                    {business &&
                      business?.map((business) => (
                        <option key={business._id} value={business._id}>
                          {business.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="dropdown   border-1 border-black  mb-3   w-100 ">
                  <select
                    className="form-select"
                    name="cause"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Cause</option>
                    {causes &&
                      causes?.map((cause) => (
                        <option key={cause._id} value={cause._id}>
                          {cause.title}
                        </option>
                      ))}
                  </select>
                </div>

                <button type="submit" className="btn btn-success w-100   ">
                  Submit
                </button>
              </form>
            </div>
          )}
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Business</th>
                <th scope="col">Cause</th>
              </tr>
            </thead>
            <tbody>
              {alignment.map((cause, index) => (
                <tr key={cause._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{cause.businessId.name}</td>
                  <td>{cause.causeId.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Alignment;
