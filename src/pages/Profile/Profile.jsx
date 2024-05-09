import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = ({ token }) => {
  const navigate = useNavigate();
  const BASE_URL = "http://137.184.199.153:4016";
  const [data, setData] = useState({
    title: "",
    description: "",
    image: null,
    categoryId: "",
  });

  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  // console.log(categories);

  const handleChange = (e) => {
    if (e.target.name === "image" && e.target.files.length > 0) {
      setData({ ...data, image: e.target.files[0] });
    } else if (e.target.name === "category") {
      setSelectedCategoryId(e.target.value);
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  console.log(token);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getCategory`, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);

      if (response && response?.data?.success === true) {
        setCategories(response?.data?.doc);
        // console.log("Get :", response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [token]);

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

      if (response?.data?.success) {
        alert("Cause created");
      }
    } catch (error) {
      console.error("Error creating cause:", error);
    }
  };

  const handleLogout = () => {
    if (localStorage.getItem("userData")) {
      localStorage.removeItem("userData");
    }

    window.location.reload();
  };
  return (
    <div className=" container-fluid  row">
      <div className=" p-5  col-12 d-flex flex-column  ">
        <section className="mb-4 d-flex flex-column  gap-5  ">
          <div className=" d-flex   justify-content-between ">
            <h2>User Profile</h2>
            <div>
              {" "}
              <button
                type="button"
                className="btn btn-primary mx-3    "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Create Cause
              </button>
              <button className="btn btn-success   " onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>

          <div className=" d-flex ">
            <div className=" d-flex  justify-content-center   align-items-center gap-3 ">
              <span>
                <i className="fa-solid fa-address-book fs-3 "></i>
              </span>{" "}
              <input type="file" name="" id="" />
            </div>
            <div>
              <span></span>{" "}
              <input type="text  " placeholder=" Name" name="name" id="" />
            </div>
          </div>

          <div className=" d-flex flex-wrap gap-5 justify-content-evenly ">
            <div
              className=" col-5 border-black d-flex flex-column  gap-2 p-2"
              style={{ border: "1px solid black" }}
            >
              <p className=" w-75 ">Contribution summary</p>
              <p>Followed causes</p>
            </div>
            <div
              className=" col-5 border-black d-flex flex-column  gap-2 p-2"
              style={{ border: "1px solid black" }}
            >
              <div className=" d-flex gap-3 ">
                <p className="  text-info text-decoration-underline ">
                  Activity Feed
                </p>
              </div>

              <Link>Timestamp Donation made</Link>
              <Link>Timestamp Discussion</Link>
              <Link>Timestamp causes supported</Link>
              <Link>Timestamp Activity Description</Link>

              <p className="  text-info text-decoration-underline  text-end ">
                Redeem Offer
              </p>
            </div>
          </div>
        </section>

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

                  <div className="dropdown   border-1 border-black   w-100 ">
                    <select
                      className="form-select"
                      name="category"
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Category</option>
                      {categories &&
                        categories?.map((category) => (
                          <option key={category._id} value={category._id}>
                            {category.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="mb-3 mt-3 ">
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
    </div>
  );
};

export default Profile;
