import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className=" container-fluid  row">
      <div className=" p-5  col-12 d-flex flex-column  ">
        <section className="mb-4 d-flex flex-column  gap-5  ">
          <h2>User Profile</h2>

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
      </div>
    </div>
  );
};

export default Profile;
