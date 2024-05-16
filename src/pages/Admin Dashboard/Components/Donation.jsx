import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../constant/constant";

const Donation = ({ token }) => {
  // const [toggle, setToggle] = useState(false);
  const [donation, setDonation] = useState([]);
  // const [categories, setCategories] = useState([]);
  // const [data, setData] = useState({
  //   title: "",
  //   description: "",
  //   image: null,
  //   categoryId: "",
  // });
  // const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const fetchDonation = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getDonation`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response?.data?.success) {
        setDonation(response?.data?.doc);
        // console.log(response);
      }
    } catch (error) {
      console.error("Error fetching donation:", error);
    }
  };

  // console.log(BASE_URL + "/" + donation[0].image);

  // const handleCreateDonation = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const formData = new FormData();

  //     formData.append("userId", "6638755f106e8ca376d28f4a");
  //     formData.append("causeId", "66387b4602ff138b661f70b4");

  //     const response = await axios.post(`${BASE_URL}/createDonation`, formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     console.log("create:"  , response);

  //     if (response?.data?.success) {
  //       alert("Cause created");
  //       fetchDonation();
  //       setToggle(false);
  //     }
  //   } catch (error) {
  //     console.error("Error creating cause:", error);
  //   }
  // };

  // const handleChange = (e) => {
  //   if (e.target.name === "image" && e.target.files.length > 0) {
  //     setData({ ...data, image: e.target.files[0] });
  //   } else if (e.target.name === "category") {
  //     setSelectedCategoryId(e.target.value);
  //   } else {
  //     setData({ ...data, [e.target.name]: e.target.value });
  //   }
  // };

  useEffect(() => {
    fetchDonation();
  }, [token]);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(`${BASE_URL}/getCategory`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     if (response && response?.data?.success === true) {
  //       setCategories(response?.data?.doc);
  //       // console.log("Get :", response);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {

  //   fetchData();
  // }, [token]);

  return (
    <div>
      {!donation.length ? (
        <p>No Cause Found</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">User</th>
              <th scope="col">Cause</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {donation.map((item, index) => (
              <tr key={item._id}>
                <th scope="row">{index + 1}</th>
                <td>{item.userId.name}</td>
                <td>{item.causeId.title}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* <button
        onClick={() => setToggle(!toggle)}
        className="btn btn-success w-100"
      >
        Create Cause
      </button> */}

      {/* {toggle && (
        <div className="input mb-3 mt-3 border-1  border-black  p-2 ">
          <form onSubmit={handleCreateDonation}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Amount
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
           
            <button type="submit" className="btn btn-success w-100   ">
              Submit
            </button>
          </form>
        </div>
      )} */}
    </div>
  );
};

export default Donation;
