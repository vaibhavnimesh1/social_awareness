import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../constant/constant";

const Category = ({ token }) => {
  const [toggle, setToggle] = useState(false);
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState("");

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
          alert("Catergory created");
          setToggle(false);
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
        <div>
          <div className=" d-flex  justify-content-end  mb-3 ">
            <button
              onClick={() => setToggle(!toggle)}
              className="btn btn-success w-auto"
            >
              Create Category
            </button>
          </div>
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
                className="btn btn-success "
                type="button"
                id="button-addon2"
                onClick={handleCreateCategory}
              >
                Submit
              </button>
            </div>
          )}

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
        </div>
      )}
    </div>
  );
};

export default Category;
