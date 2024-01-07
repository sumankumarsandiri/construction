import React from "react";
// import "../pages/ProjectCreate.css";
import "../App.css";

function ProjectCreate() {
  return (
    <div className="project-manage-container">
      <div className="project-manage-header">
        <h2>Project Manage</h2>
      </div>
      <div className="project-manage-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}
export default ProjectCreate;
