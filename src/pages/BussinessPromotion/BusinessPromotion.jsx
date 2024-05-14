import React, { useEffect, useState } from "react";
import "./BusinessPromotion.css";
import axios from "axios";

const BusinessPromotion = ({ token }) => {
  const [promotion, setpromotion] = useState([]);

  const BASE_URL = "http://137.184.199.153:4016";

  const fetchBusiness = async () => {
    console.log(token);
    try {
      const response = await axios.get(`${BASE_URL}/getBusiness`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("hey", response);
      if (response?.data?.success) {
        setpromotion(response?.data?.doc);
        console.log("Get :", response);
      }
    } catch (error) {
      console.error("Error fetching promotion:", error);
    }
  };

  useEffect(() => {
    fetchBusiness();
  }, [token]);

  return (
    <div className=" container-fluid justify-content-center  align-items-center m-0  p-0   row w-100 ">
      <div className=" p-1  col-12 d-flex flex-column  ">
        {/* <section className="mb-4 d-flex flex-column  gap-5  "> */}
        <h2>Business Lists</h2>

        <div className="  col-12  row d-flex justify-content-evenly   gap-2  ">
          {promotion &&
            promotion.map((item) => (
              <div key={item._id} className=" col-5    promotion-card">
                <h5 className=" mb-3 ">{item.name}</h5>
                <p className="">{item.description}</p>
              </div>
            ))}
        </div>
        {/* </section> */}
      </div>
    </div>
  );
};

export default BusinessPromotion;
