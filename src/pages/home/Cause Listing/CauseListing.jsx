import React from "react";
import { Link } from "react-router-dom";
import "./CauseListing.css";

const CauseListing = () => {

  const click = ()=>{
    console.log("clicke");

  }
  return (
    <div className=" container-fluid  row">
      <div className=" p-5  col-12 d-flex flex-column  ">
        <section className="mb-4 d-flex flex-column  gap-5  ">
          <h2>Cause List</h2>

          <div className=" d-flex flex-wrap gap-5 justify-content-evenly ">
            <Link
              to="/causeDetails"
              className=" col-5 border-black d-flex flex-column  gap-2 p-2 "
              style={{ border: "1px solid black" }}
              onClick={click}
            >
              <div className=" d-flex gap-3 ">
                <p className="  text-info text-decoration-underline   ">
                  Business Names |
                </p>
                <p className="  text-info text-decoration-underline   ">
                  Promotions |
                </p>
                <p className="  text-info   text-decoration-underline ">
                  visit Website |
                </p>
              </div>

              <p className=" w-75 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis quod sunt ab quisquam provident eum, velit quas. Error,
                a non.
              </p>

              <p className="  text-info text-decoration-underline  text-end ">
                Redeem Offer
              </p>
            </Link>
            <Link
              to="/causeDetails"
              className=" col-5 border-black d-flex flex-column  gap-2 p-2 "
              style={{ border: "1px solid black" }}
              onClick={click}
            >
              <div className=" d-flex gap-3 ">
                <p className="  text-info text-decoration-underline   ">
                  Business Names |
                </p>
                <p className="  text-info text-decoration-underline   ">
                  Promotions |
                </p>
                <p className="  text-info   text-decoration-underline ">
                  visit Website |
                </p>
              </div>

              <p className=" w-75 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis quod sunt ab quisquam provident eum, velit quas. Error,
                a non.
              </p>

              <p className="  text-info text-decoration-underline  text-end ">
                Redeem Offer
              </p>
            </Link>
            <Link
              to="/causeDetails"
              className=" col-5 border-black d-flex flex-column  gap-2 p-2 "
              style={{ border: "1px solid black" }}
              onClick={click}
            >
              <div className=" d-flex gap-3 ">
                <p className="  text-info text-decoration-underline   ">
                  Business Names |
                </p>
                <p className="  text-info text-decoration-underline   ">
                  Promotions |
                </p>
                <p className="  text-info   text-decoration-underline ">
                  visit Website |
                </p>
              </div>

              <p className=" w-75 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis quod sunt ab quisquam provident eum, velit quas. Error,
                a non.
              </p>

              <p className="  text-info text-decoration-underline  text-end ">
                Redeem Offer
              </p>
            </Link>
            <Link
              to="/causeDetails"
              className=" col-5 border-black d-flex flex-column  gap-2 p-2 "
              style={{ border: "1px solid black" }}
              onClick={click}
            >
              <div className=" d-flex gap-3 ">
                <p className="  text-info text-decoration-underline   ">
                  Business Names |
                </p>
                <p className="  text-info text-decoration-underline   ">
                  Promotions |
                </p>
                <p className="  text-info   text-decoration-underline ">
                  visit Website |
                </p>
              </div>

              <p className=" w-75 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis quod sunt ab quisquam provident eum, velit quas. Error,
                a non.
              </p>

              <p className="  text-info text-decoration-underline  text-end ">
                Redeem Offer
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CauseListing;
