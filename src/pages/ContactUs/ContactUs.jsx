import React from "react";

const ContactUs = ({ token }) => {
  // console.log("constant :", token);
  return (
    <div className="container p-lg-5 p-4 mb-3  ">
      <div className="row">
        <div className="col-md-6">
          <div className=" mt-5 ">
            <h2 className=" fw-bolder ">Contact</h2>
            <span className=" fs-3 fw-semibold ">Phone :</span>
            <p> 123456789</p>
            <span className=" fs-3 fw-semibold ">Email:</span> <p> example@example.com</p>
            <span className=" fs-3 fw-semibold ">Address:</span>
            <p> 123, Street Name, City, Country</p>
          </div>
        </div>
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="company" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                className="form-control"
                id="company"
                placeholder="Enter your company name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100 ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
