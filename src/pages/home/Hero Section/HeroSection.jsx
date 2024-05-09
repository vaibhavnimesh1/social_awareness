import React, { useEffect } from "react";
import "./Hero.css";

import SignUp from "../../Authenticatin/SignUp/SignUp";

const HeroSection = () => {
  const isAuthenticated = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (!userData) {
      return false;
    } else {
      return true;
    }
  };
  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <section className="hero-section">
      <div className=" container ">
        <div className=" row">
          <div className=" col-12 col-lg-6  d-flex  justify-content-center align-items-center flex-column ">
            <h3 className=" text-start w-100">Home Page</h3>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className=" col-12 col-lg-6 ">
            {isAuthenticated() ? null : <SignUp />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
