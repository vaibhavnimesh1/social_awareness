import React, { useState } from "react";

const CreateCauseForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    targetGoal: "",
    duration: "",
    media: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    e.preventDefault();
    setFormData({
      ...formData,
      media: file,
    });
  };

  const handleSubmit = (e) => {
    console.log("Form submitted:", formData);
  };

  return (
<div className="container py-4  bg-body-tertiary " style={{ maxWidth: "43.75rem" }}>
      <h2 className=" text-center   fw-bolder ">Create Cause</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="targetGoal" className="form-label">
            Target Goal
          </label>
          <input
            type="text"
            className="form-control"
            id="targetGoal"
            name="targetGoal"
            value={formData.targetGoal}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="duration" className="form-label">
            Duration
          </label>
          <input
            type="text"
            className="form-control"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="media" className="form-label">
            Media Upload
          </label>
          <input
            type="file"
            className="form-control"
            id="media"
            name="media"
            onChange={handleMediaChange}
          />
        </div>
        {/* Preview Section */}
        {/* <div className="mb-3">
          <h4>Preview Section</h4>
          <p><strong>Title:</strong> {formData.title}</p>
          <p><strong>Description:</strong> {formData.description}</p>
          <p><strong>Category:</strong> {formData.category}</p>
          <p><strong>Target Goal:</strong> {formData.targetGoal}</p>
          <p><strong>Duration:</strong> {formData.duration}</p>
          {formData.media && (
            <div>
              <strong>Media:</strong> <img src={URL.createObjectURL(formData.media)} alt="Media Preview" style={{ maxWidth: "100px" }} />
            </div>
          )}
        </div> */}
        <button type="submit" className="btn btn-primary w-100 ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateCauseForm;
