import React, { useEffect, useState } from "react";
import axios from "axios";

const Category = ({ token }) => {
  const BASE_URL = "http://192.168.29.39:4016";
  const [toggle, setToggle] = useState(false);
  const [causes, setCauses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState({
    title: "",
    description: "",
    image: null,
    categoryId: "",
  });
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const fetchCauses = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getCause`);
      if (response?.data?.success) {
        setCauses(response?.data?.doc);
        // console.log(response);
      }
    } catch (error) {
      console.error("Error fetching causes:", error);
    }
  };

  // console.log(BASE_URL + "/" + causes[0].image);


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
        fetchCauses();
        setToggle(false);
      }
    } catch (error) {
      console.error("Error creating cause:", error);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "image" && e.target.files.length > 0) {
      setData({ ...data, image: e.target.files[0] });
    } else if (e.target.name === "category") {
      setSelectedCategoryId(e.target.value);
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    fetchCauses();
  }, [token]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getCategory`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response && response?.data?.success === true) {
        setCategories(response?.data?.doc);
        // console.log(response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // console.log("fff", token);

    fetchData();
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
              <th scope="col">Image</th>
            </tr>
          </thead>
          <tbody>
            {causes.map((cause, index) => (
              <tr key={cause._id}>
                <th scope="row">{index + 1}</th>
                <td>{cause.title}</td>
                <td>{cause.description}</td>
                <td>
                  <img
                    style={{ width: "50px" }}
                    src={`${BASE_URL}${cause.image.startsWith("/") ? "" : "/"}${cause.image}`}
                    alt="Images"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button
        onClick={() => setToggle(!toggle)}
        className="btn btn-success w-100"
      >
        Create Cause
      </button>

      {toggle && (
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
      )}
    </div>
  );
};

export default Category;
