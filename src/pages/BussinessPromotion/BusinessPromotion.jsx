import React, { useEffect, useState } from "react";
import "./BusinessPromotion.css";
import axios from "axios";

const BusinessPromotion = ({ token }) => {
  const [promotion, setpromotion] = useState([]);

  const BASE_URL = "http://137.184.199.153:4016";

  const fetchBusiness = async () => {
    // console.log(token);
    try {
      const response = await axios.get(`${BASE_URL}/getBusiness`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log("hey", response);
      if (response?.data?.success) {
        setpromotion(response?.data?.doc);
        // console.log("Get :", response);
      }
    } catch (error) {
      console.error("Error fetching promotion:", error);
    }
  };

  useEffect(() => {
    fetchBusiness();
  }, [token]);

  return (
    <div className=" container-fluid justify-content-center  align-items-center m-0 p-0     row w-100 ">
      <div className=" p-lg-5 p-md-3 p-4  col-12 d-flex flex-column  justify-content-center  align-items-center  ">
        {/* <section className="mb-4 d-flex flex-column  gap-5  "> */}
        <h2 className=" w-100  text-start  ">Business Lists</h2>

        <div className="  col-12   row d-flex justify-content-evenly   gap-2  my-4  ">
          {promotion &&
            promotion.map((item) => (
              <div
                key={item._id}
                className=" col-md-5  col-12    promotion-card"
              >
                <div className=" d-flex business justify-content-evenly  align-items-center ">
                  <a  href="#" className=" mb-3 business-1 fw-bold   ">{item.name} </a >{" "}
                  <a  href="#" className=" mb-3 business-1 fw-bold  ">Promotions </a >
                  <a  href="#" className=" mb-3  fw-bold ">visit website </a >
                </div>
                <p className="">{item.description}</p>
                <p className=" w-100  text-end ">
                  <a href="#">Redeem offer</a>
                </p>
              </div>
            ))}
        </div>
        {/* </section> */}
      </div>
    </div>
  );
};

export default BusinessPromotion;
