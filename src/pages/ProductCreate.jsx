import React from "react";
import "../pages/ProductCreate.css";

function ProductCreate() {
  return (
    <div className="project-manage-container">
      <div className="project-manage-header">
        <h2>Project Manage</h2>
      </div>
      <div className="project-manage-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Project Name *</label>

            <select name="" id="">
              <option value="0">Select Project Name</option>
              <option value="101">aparna enclave</option>
              <option value="93">my home boojjaa</option>
              <option value="89">plamvidows</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Flat Type</label>
            <select name="" id="">
              <option value="0">Select Flat Type</option>
              <option value="A">1bhk</option>
              <option value="B">2bhk</option>
              <option value="C">3bhk</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="location">Floor Number</label>
            <select>
              <option value="0">Select Floor Number</option>
              <option value="1st ">1st</option>
              <option value="2nd ">2nd</option>
              <option value="3rd ">3rd</option>
              <option value="4th ">4th</option>
              <option value="5th ">5th</option>
              <option value="6th ">6th</option>
              <option value="7th ">7th</option>
              <option value="8th ">8th</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="name"> Flat Size</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="name"> Unite Price</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="name"> Total Flat Price</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="name"> Car Parking Charge</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Utility Charge</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="name"> Additional Work Charge</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="name"> Other Charge</label>
            <input type="text" />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
      {/* <section class="content">
        <div class="container-fluid">
          {/* <ol class="breadcrumb breadcrumb-col-cyan  pull-right ">
                    <li><a href=""><i class="material-icons">home</i>
                        Home</a></li>
                    <li><a href=""><i class="fas fa-boxes"></i>
                        &nbsp;Product Manage</a>
                    </li>
                    <li class="active"><i class="material-icons">archive</i>&nbsp;
                        Create
                    </li>
                </ol> */}
      {/* <!-- Inline Layout | With Floating Label --> */}
      {/* <div class="row clearfix">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="card">
                <div class="header">
                  <div class="body">
                    <form
                      enctype="multipart/form-data"
                      class="form"
                      id="form_validation"
                      method="post"
                      action=""
                    >
                      <div class="block-header  pull-left ">
                        <a class="btn btn-sm btn-info waves-effect" href="">
                          Back
                        </a>
                      </div>
                      <h2>Create Product Manage</h2>
                      <input type="hidden" name="_token" value=""></input>
                      <div class="row clearfix">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 field_area">
                          <div class="form-group form-float">
                            <label class="form-label">
                              Project Name <span class="text-danger">*</span>
                            </label>
                            <div class="form-line">
                              <select
                                data-live-search="true"
                                class="form-control show-tick"
                                name="branch_id"
                              >
                                <option value="0">Select Project Name</option>
                                <option value="101"> aparna enclave</option>
                                <option value="93">my home boojjaa</option>
                                <option value="89">plamvidows</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <div class="form-group form-float">
                            <label class="form-label">
                              Flat Type <span class="text-danger">*</span>
                            </label>
                            <div class="form-line">
                              <select
                                data-live-search="true"
                                class="form-control show-tick"
                                name="flat_type"
                              >
                                <option value="0">Select Flat Type</option>
                                <option value="A ">1bhk</option>
                                <option value="B ">2bhk</option>
                                <option value="C ">3bhk</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <div class="form-group form-float">
                            <label class="form-label">
                              Floor Number <span class="text-danger">*</span>
                            </label>
                            <div class="form-line">
                              <select
                                data-live-search="true"
                                class="form-control show-tick"
                                name="floor_number"
                              >
                                <option value="0">Select Floor Number</option>
                                <option value="1st ">1st</option>
                                <option value="2nd ">2nd</option>
                                <option value="3rd ">3rd</option>
                                <option value="4th ">4th</option>
                                <option value="5th ">5th</option>
                                <option value="6th ">6th</option>
                                <option value="7th ">7th</option>
                                <option value="8th ">8th</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <div class="form-group form-float">
                            <label class="form-label">
                              Flat Size <span class="text-danger">*</span>
                            </label>
                            <div class="form-line">
                              <input
                                value=""
                                name="flat_size"
                                type="number"
                                class="form-control"
                              ></input>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <div class="form-group form-float">
                            <label class="form-label">
                              Unite Price <span class="text-danger">*</span>
                            </label>
                            <div class="form-line">
                              <input
                                value=""
                                name="unite_price"
                                type="number"
                                class="form-control"
                              ></input>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <div class="form-group form-float">
                            <label class="form-label">Total Flat Price</label>
                            <div class="form-line">
                              <input
                                readonly
                                value=""
                                name="total_flat_price"
                                type="number"
                                class="form-control"
                              ></input>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <div class="form-group form-float">
                            <div class="form-line">
                              <label class="form-label">
                                Car Parking Charge
                              </label>
                              <input
                                value=""
                                name="car_parking_charge"
                                type="number"
                                class="form-control"
                              ></input>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <div class="form-group form-float">
                            <div class="form-line">
                              <label class="form-label">Utility Charge</label>
                              <input
                                value=""
                                name="utility_charge"
                                type="number"
                                class="form-control"
                              ></input>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <div class="form-group form-float">
                            <div class="form-line">
                              <label class="form-label">
                                Additional Work Charge
                              </label>
                              <input
                                value=""
                                name="additional_work_charge"
                                type="number"
                                class="form-control"
                              ></input>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <div class="form-group form-float">
                            <div class="form-line">
                              <label class="form-label">Other Charge</label>
                              <input
                                value=""
                                name="other_charge"
                                type="number"
                                class="form-control"
                              ></input>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <div class="form-group form-float">
                            <div class="form-line">
                              <label class="form-label">
                                Discount Or Deduction
                              </label>
                              <input
                                value=""
                                name="discount_or_deduction"
                                type="number"
                                class="form-control"
                              ></input>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <div class="form-group form-float">
                            <div class="form-line">
                              <label class="form-label">
                                Refund Additional Work Charge
                              </label>
                              <input
                                value=""
                                name="refund_additional_work_charge"
                                type="number"
                                class="form-control"
                              ></input>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <div class="form-group form-float">
                            <label class="form-label">Net Sells Price</label>
                            <div class="form-line">
                              <input
                                readonly
                                value=""
                                name="net_sells_price"
                                type="number"
                                class="form-control"
                              ></input>
                            </div>
                          </div>
                        </div>{" "}
                        &nbsp;
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-6">
                          <div class="form-group ">
                            <div class="form-line">
                              <input
                                name="product_img"
                                type="file"
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
                        </div>
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
            </div> */}
      {/* <!-- #END# Inline Layout | With Floating Label --> */}
      {/* </div>
        </div>
      </section> */}{" "}
      {/* */}
    </div>
  );
}
export default ProductCreate;
