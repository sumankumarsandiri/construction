import React from "react";
// import "../pages/ProjectCreate.css";

function ProjectCreate() {
  return (
    // <div>
    // <div>
    //     <label className="form-group">Name:</label>
    //     <input type="text" className="form-control"></input>
    // </div>
    // <div>
    //     <label className="form-group">role</label>
    //     <input type="text" className="form-control" ></input>
    // </div>
    // <div>
    //     <label className="form-group">Description</label>
    //     <input type="text" className="form-control" ></input>
    // </div>
    // </div>

    <div class="row clearfix">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="card">
          <div className="header">
            <div className="body">
              <form
                className="form"
                id="form_validation"
                method="post"
                action=""
              >
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-line">
                    <button
                      type="submit"
                      class="btn btn-primary m-t-15 waves-effect"
                    >
                      Back
                    </button>
                  </div>
                </div>
                <h2>Create Project Manage Information</h2>
                <input
                  type="hidden"
                  name="_token"
                  value="xJvMkzu68ZSQ46blIzm2L8aTbmNmZFpJ48YkhEe8"
                ></input>
                <div className="row clearfix">
                  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                    <div class="form-group form-float">
                      <div class="form-line">
                        <label class="form-label">
                          Name <span class="text-danger">*</span>
                        </label>
                        <input
                          autofocus
                          value=""
                          name="name"
                          type="text"
                          class="form-control"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                    <div class="form-group form-float">
                      <div class="form-line">
                        <label class="form-label">Location</label>
                        <input
                          value=""
                          name="location"
                          type="text"
                          class="form-control"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="form-group form-float">
                      <div class="form-line">
                        <label class="form-label">Description</label>
                        <textarea
                          class="form-control"
                          name="description"
                          id=""
                        ></textarea>
                      </div>
                    </div>
                  </div>{" "}
                  &nbsp;
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="form-line">
                      <button
                        type="submit"
                        class="btn btn-primary m-t-15 waves-effect"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCreate;
