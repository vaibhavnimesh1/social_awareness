import React from "react";

import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div className=" container py-5  ">
      <div className=" row d-flex  justify-content-between ">
        <div className=" col-12 col-lg-6 ">
          <h3>About Page</h3>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className=" col-12 col-lg-6 img-box ">
          <img
            src=" https://images.pexels.com/photos/18320116/pexels-photo-18320116/free-photo-of-wooden-hut-of-lifeguards.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
