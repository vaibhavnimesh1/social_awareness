import React from "react";
import "./Hero.css";

import SignUp from "../../Authenticatin/SignUp/SignUp";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* <div
        id="carouselExampleCaptions"
        className="carousel slide"
        
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

      {/* <div className="container">
        {heroData?.map((item) => {
          const { id, title, description, image } = item;

          return (
            <div className=" container bg-black  ">
              <div key={id} className="row mb-5  ">
                <div
                  style={{ background: "#dadadada" }}
                  className="col-lg-6 p-3 rounded   d-flex justify-content-between h-100    flex-column "
                >
                  <h3 className="hero-title mb-3">{title}</h3>
                  <p className="hero-description mb-3">
                    {description.slice(0, 300)}. . .
                  </p>
                  <button className="btn btn-primary btn-lg">Read More</button>
                </div>
                <div className="col-lg-6 img-box">
                  <img src={image} alt={title} className="img-fluid" />
                </div>
              </div>
            </div>
          );
        })}
      </div> */}

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
            <SignUp />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
