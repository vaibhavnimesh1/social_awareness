import React from "react";
import { Link } from "react-router-dom";
import "./CauseListing.css";

const CauseListing = () => {
  // Dummy data for causes
  const causes = [
    {
      id: 1,
      title: "Cause 1",
      description: "Description for Cause 1",
      image:
        "https://images.pexels.com/photos/20988659/pexels-photo-20988659/free-photo-of-yellow-flower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 2,
      title: "Cause 2",
      description: "Description for Cause 2",
      image:
        "https://images.pexels.com/photos/20988659/pexels-photo-20988659/free-photo-of-yellow-flower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 3,
      title: "Cause 3",
      description: "Description for Cause 3",
      image:
        "https://images.pexels.com/photos/20988659/pexels-photo-20988659/free-photo-of-yellow-flower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 4,
      title: "Cause 4",
      description: "Description for Cause 4",
      image:
        "https://images.pexels.com/photos/20988659/pexels-photo-20988659/free-photo-of-yellow-flower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 5,
      title: "Cause 5",
      description: "Description for Cause 5",
      image:
        "https://images.pexels.com/photos/20988659/pexels-photo-20988659/free-photo-of-yellow-flower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 6,
      title: "Cause 6",
      description: "Description for Cause 6",
      image:
        "https://images.pexels.com/photos/20988659/pexels-photo-20988659/free-photo-of-yellow-flower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];

  return (
    <div className="container">
      <h1 className="text-center">Causes List</h1>
      <div className="row">
        {causes.map((cause) => (
          <div key={cause.id} className="col-md-4 col-lg-4 col-12 mb-4  ">
            <div className="card">
              <img
                src={cause.image}
                className="card-img-top"
                alt={cause.title}
              />
              <div className="card-body">
                <h5 className="card-title">{cause.title}</h5>
                <p className="card-text">{cause.description}</p>
                <div
                  className="progress my-3 "
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar" style={{ width: "25%" }}>
                    25%
                  </div>
                </div>

                <div className=" col-12  gx-3 d-flex  justify-content-between  ">
                  <Link to="/" className="btn btn-primary col-5 ">
                    Donate
                  </Link>
                  <Link to="/" className="btn btn-primary col-5 ">
                    Share
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CauseListing;
