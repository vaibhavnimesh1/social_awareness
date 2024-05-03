import React from "react";

const CauseDetailsPage = () => {
  // Mock data for comments
  const comments = [
    { id: 1, user: "User1", comment: "Great cause! I fully support it." },
    { id: 2, user: "User2", comment: "Keep up the good work!" },
    { id: 3, user: "User3", comment: "I donated, hope it helps!" },
  ];

  // Mock data for related causes
  const relatedCauses = [
    { id: 1, title: "Related Cause 1" },
    { id: 2, title: "Related Cause 2" },
    { id: 3, title: "Related Cause 3" },
  ];

  return (
    <div className=" container row">
      <div className=" p-5  col-8 d-flex flex-column  gap-2 ">
        <section className=" d-flex flex-column  gap-5 ">
          <h2>Cause Details</h2>
          <p>
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nullam eget neque vel felis finibus tempus. Integer dapibus
            purus nec sapien tempus, ac pharetra nisi ultrices.
          </p>
          <p>Target Goal: $1000</p>
          {/* Progress bar for current progress */}
          {/* <div className="progress mb-3">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              50%
            </div>
          </div> */}
          {/* Image or video related to the cause */}
          {/* <div
            className=" bg-black "
            style={{ width: "300px", height: " 250px" }}
          >
            <img
              style={{ width: "100%", height: " 100%" }}
              src="https://images.pexels.com/photos/22805758/pexels-photo-22805758/free-photo-of-a-border-collie-sitting-in-front-of-a-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Cause"
              className="img-fluid mb-3"
            />
          </div> */}
        </section>

        {/* Call-to-Action */}
        <section className="mb-4 w-100  d-flex justify-content-evenly ">
          <button className="btn border-black p-2  ">Donate for this Cause </button>
          <button className="btn border-black p-2   ">Share</button>
          <button className="btn border-black p-2  ">Participate in discussion</button>
        </section>

        {/* <section className="mb-4">
          <h3>Comments</h3>
          {comments.map((comment) => (
            <div key={comment.id} className="card mb-2">
              <div className="card-body">
                <h5 className="card-title">{comment.user}</h5>
                <p className="card-text">{comment.comment}</p>
              </div>
            </div>
          ))}
        </section> */}
      </div>
      <div className=" col-4 mx-auto mt-5 ">
        <nav className="navbar w-100 mx-auto my-auto  ">
          <div className="container-fluid  p-0  ">
            <form
              className="d-flex align-items-center justify-content-evenly  w-100 border-black "
              role="search"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <i className="fa-solid fa-microphone"></i>
            </form>
          </div>

          <ul className="list-group py-3 w-100 ">
            <li className="list-group-item">Related Cause</li>
            <li className="list-group-item">Cause 1</li>
            <li className="list-group-item">Cause 2</li>
            <li className="list-group-item">Cause 3</li>
            <li className="list-group-item">-----------</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CauseDetailsPage;

