import React, { useEffect, useState } from "react";
import axios from "axios";

const CreatePromotion = ({ token }) => {
  const BASE_URL = "http://137.184.199.153:4016";
  const [toggle, setToggle] = useState(false);
  const [causes, setCauses] = useState([]);
  const [business, setbusiness] = useState([]);
  const [data, setData] = useState({
    title: "",
    description: "",
    businessId: "",
  });
  const [selectedbusinessId, setSelectedbusinessId] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "business") {
      setSelectedbusinessId(e.target.value);
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const fetchPromotion = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getPromotion`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response?.data?.success) {
        setCauses(response?.data?.doc);
        // console.log("GET :" ,  response);
      }
    } catch (error) {
      console.error("Error fetching causes:", error);
    }
  };

  const handleCreatePromotion = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("businessId", selectedbusinessId);

      const response = await axios.post(
        `${BASE_URL}/createPromotion`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response?.data?.success) {
        alert("Promotion created");
        fetchPromotion();
        setToggle(false);
      }
    } catch (error) {
      console.error("Error creating cause:", error);
    }
  };

  useEffect(() => {
    fetchPromotion();
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
      {!causes.length ? (
        <p>No Cause Found</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Business</th>
            </tr>
          </thead>
          <tbody>
            {causes.map((cause, index) => (
              <tr key={cause._id}>
                <th scope="row">{index + 1}</th>
                <td>{cause.title}</td>
                <td>{cause.description}</td>
                <td>{cause.businessId.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button
        onClick={() => setToggle(!toggle)}
        className="btn btn-success w-100"
      >
        Create Promotion
      </button>

      {toggle && (
        <div className="input mb-3 mt-3 border-1  border-black  p-2 ">
          <form onSubmit={handleCreatePromotion}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={data.title}
                onChange={handleChange}
                required
                placeholder="Write title"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                name="description"
                value={data.description}
                onChange={handleChange}
                required
                placeholder="Write description"
              />
            </div>

            <div className="dropdown   border-1 border-black  mb-3   w-100 ">
              <select
                className="form-select"
                name="business"
                onChange={handleChange}
                required
              >
                <option value="">Select Business</option>
                {business &&
                  business?.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
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
    </div>
  );
};

export default CreatePromotion;
