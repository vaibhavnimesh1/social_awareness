import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CauseListing.css";
import axios from "axios";
import { BASE_URL } from "../../../constant/constant";

const CauseListing = ({ token }) => {
  const [causes, setCauses] = useState([]);

  // console.log(causes);

  const [data, setData] = useState({
    title: "",
    description: "",
    image: null,
    categoryId: "",
  });

  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "image" && e.target.files.length > 0) {
      setData({ ...data, image: e.target.files[0] });
    } else if (e.target.name === "category") {
      setSelectedCategoryId(e.target.value);
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };
  const handleCreateCause = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("categoryId", selectedCategoryId);
      formData.append("image", data.image);

      const response = await axios.post(`${BASE_URL}/createCause`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        alert("Cause created");
        setShowModal(false);
        fetchCauses();
      }
    } catch (error) {
      console.error("Error creating cause:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getCategory`, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response && response.data.success === true) {
        setCategories(response.data.doc);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  // fetching cause
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
          <div className="d-flex justify-content-between">
            <h2>Cause List</h2>
            <div>
              <button
                type="button"
                className="btn btn-primary mx-3"
                onClick={() => setShowModal(true)}
              >
                Create Cause
              </button>
            </div>
          </div>

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
                      Know More ...
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </section>
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

                <div className="dropdown border-1 border-black w-100">
                  <select
                    className="form-select"
                    name="category"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Category</option>
                    {categories &&
                      categories.map((category) => (
                        <option key={category._id} value={category._id}>
                          {category.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="image" className="form-label">
                    Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    name="image"
                    onChange={handleChange}
                    required
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

export default CauseListing;
