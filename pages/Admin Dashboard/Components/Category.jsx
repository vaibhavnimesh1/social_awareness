import React, { useEffect, useState } from "react";
import axios from "axios";

const Category = ({ token }) => {
  const [toggle, setToggle] = useState(false);
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState("");
  const BASE_URL = "http://137.184.199.153:4016";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/getCategory`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log(response);

        if (response?.data?.success) {
          setCategories(response?.data?.doc);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCreateCategory = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/createCategory`,
        { name: newCategoryName },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response);

      if (response?.data?.success) {
        const updatedRes = await axios.get(`${BASE_URL}/getCategory`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (updatedRes?.data?.success) {
          setCategories(updatedRes?.data?.doc);
        }
      }
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  return (
    <div>
      {categories && categories?.length === 0 ? (
        <p>No Data Found</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">No.</th>

              <th scope="col">Category Name</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category._id}>
                <th scope="row">{index + 1}</th>

                <td>{category.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button
        onClick={() => setToggle(!toggle)}
        className="btn btn-success w-100"
      >
        Create Category
      </button>

      {toggle && (
        <div className="input-group mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Category Name"
            aria-label="Category Name"
            aria-describedby="button-addon2"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={handleCreateCategory}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Category;
