import React, {  useState } from "react";
import axios from "axios";

const CreatePromotion = ({ token }) => {
  const BASE_URL = "http://192.168.29.39:4016";
  console.log(token);

  const [errorMessage, setErrorMessage] = useState("");
  const [promotionData, setPromotionData] = useState({
    title: "",
    description: "",
    businessId: "",
  });

  const handleChange = (e) => {
    setPromotionData({ ...promotionData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL}/createPromotion`,
        promotionData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success === true) {
        alert(response.data.message);
        setPromotionData({
          ...promotionData,
          title: "",
          description: "",
          businessId: "",
        });
      }

      //   console.log(response.data);
    } catch (error) {
      setErrorMessage("Error");
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className=" w-100  text-center ">Create Promotion</h2>
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={promotionData.title}
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
            type="text"
            className="form-control"
            name="description"
            value={promotionData.description}
            onChange={handleChange}
            required
            placeholder="Write description"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="businessId" className="form-label">
            Business ID
          </label>
          <input
            type="text"
            className="form-control"
            name="businessId"
            value={promotionData.businessId}
            onChange={handleChange}
            required
            placeholder="Write ID"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Promotion
        </button>
      </form>
    </div>
  );
};

export default CreatePromotion;
