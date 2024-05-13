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
      if (response?.data?.success) {
        setpromotion(response?.data?.doc);
        console.log("Get :", response);
      }
    } catch (error) {
      console.error("Error fetching promotion:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchBusiness();
    }
  }, [token]);

  return (
    <div className=" container-fluid justify-content-center  align-items-center m-0  p-0   row w-100 ">
      <div className=" p-1  col-12 d-flex flex-column  ">
        <section className="mb-4 d-flex flex-column  gap-5  ">
          <h2>Business List</h2>

          <div className=" w-100   d-flex flex-wrap gap-5 justify-content-evenly ">
            {promotion &&
              promotion.map((item) => (
                <div key={item._id} className="w-100 card-body promotion-card">
                  <h5 className="card-title mb-3 ">{item.name}</h5>
                  <p className="card-text">
                    {item.description}
                    {/* "Card titles are used by adding .card-title to a tag. In the
                    same way, links are added and placed next to each other by
                    adding .card-link to an tag. Subtitles are used by adding a
                    .card-subtitle to a tag. If the .card-title and the
                    .card-subtitle items are placed in a .card-body item, the
                    card title and subtitle are aligned nicely." */}
                  </p>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BusinessPromotion;
