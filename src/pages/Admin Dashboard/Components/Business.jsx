import React, { useEffect, useState } from "react";
import axios from "axios";

const Business = ({ token }) => {
  console.log("Token :", token);

  const BASE_URL = "http://137.184.199.153:4016";
  const [toggle, setToggle] = useState(false);
  const [business, setBusiness] = useState([]);
  const [data, setData] = useState({
    name: "",
    description: "",
  });

  const handleCreateBusiness = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/createBusiness`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Craetw :", response);

      if (response?.data?.success) {
        alert("Business created");
        setToggle(false);
        fetchData();
      }
    } catch (error) {
      console.error("Error creating cause:", error);
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getBusiness`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log("Get :", response);

      if (response && response?.data?.success === true) {
        setBusiness(response?.data?.doc);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  return (
    <div>
      {!business.length ? (
        <p>No Business Found</p>
      ) : (
        <div>
          <div className=" d-flex  justify-content-end  mb-3  ">
            {" "}
            <button
              onClick={() => setToggle(!toggle)}
              className="btn btn-success w-auto"
            >
              Create Business
            </button>
          </div>

          {toggle && (
            <div className="input mb-3 mt-3 border-1  border-black  p-2 ">
              <form onSubmit={handleCreateBusiness}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={data.name}
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
                <th scope="col">Title</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {business.map((cause, index) => (
                <tr key={cause._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{cause.name}</td>
                  <td>{cause.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Business;
