import React from "react";
import "../pages/ProductAll.css";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdPictureAsPdf } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

function ProductAll() {
  return (
    <section class="content">
      <div class="container-fluid">
        <div class="block-header  pull-left ">
          <a
            class="btn btn-sm btn-info waves-effect"
            href="https://demo.erealestate.eaccount.xyz/product/create"
          >
            Create
          </a>
        </div>
        {/* <ol class="breadcrumb breadcrumb-col-cyan  pull-right ">
                <li><a href="https://demo.erealestate.eaccount.xyz"><i class="material-icons">home</i> Home</a>
                </li>
                <li><a href="https://demo.erealestate.eaccount.xyz/product"><i class="fas fa-boxes"></i>
                        &nbsp;Product Manage</a></li>
                <li class="active"><i
                        class="material-icons">archive</i>&nbsp; All
                </li>
            </ol> */}
        {/* <!-- Hover Rows --> */}
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
              <div class="header">
                <a class="btn btn-xs btn-info waves-effect" href="">
                  All (4)
                </a>
                <a
                  class="btn btn-xs btn-danger waves-effect text-black"
                  href=""
                >
                  Trash (4)
                </a>
                <ul class="header-dropdown m-r--5">
                  <form class="search" action="" method="get">
                    <input
                      type="hidden"
                      name="_token"
                      value="xJvMkzu68ZSQ46blIzm2L8aTbmNmZFpJ48YkhEe8"
                    ></input>
                    <input
                      autofocus
                      type="search"
                      name="search"
                      class="form-control input-sm "
                      placeholder="Search "
                    />
                  </form>
                </ul>
              </div>
              <form class="actionForm" action="" method="get">
                <div class="pagination-and-action-area body">
                  <div>
                    <div class="select-and-apply-area">
                      <div class="form-group width-300">
                        <div class="form-line">
                          <select
                            class="form-control"
                            name="apply_comand_top"
                            id=""
                          >
                            <option value="0">Select Action</option>
                            <option value="3">Move To trash</option>
                            <option value="2">Permanently Delete</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group">
                        <input
                          class="btn btn-sm btn-info waves-effect"
                          type="submit"
                          value="Apply"
                          name="ApplyTop"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="custom-paginate"></div>
                  </div>
                </div>
                <div class="body table-responsive">
                  <input
                    type="hidden"
                    name="_token"
                    value="xJvMkzu68ZSQ46blIzm2L8aTbmNmZFpJ48YkhEe8"
                  ></input>
                  <table class="table table-hover table-bordered table-sm">
                    <thead>
                      <tr>
                        <th class="checkbox_custom_style text-center width-100">
                          <input
                            name="selectTop"
                            type="checkbox"
                            id="md_checkbox_p"
                            class="chk-col-cyan"
                          />
                          <label for="md_checkbox_p"></label>
                        </th>
                        <th
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Product Unique ID ( Project ID, Flat Type,Floor Number )"
                        >
                          ID
                        </th>
                        <th
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Project Name"
                        >
                          Name
                        </th>
                        <th
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Unite Price"
                        >
                          Size
                        </th>
                        <th
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Net Sells Price ( BDT )"
                        >
                          Price
                        </th>
                        <th
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Total Flat Price ( BDT )"
                        >
                          Total
                        </th>
                        <th
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Car Parking Charge ( BDT )"
                        >
                          Parking
                        </th>
                        <th
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Utility Charge ( BDT ) "
                        >
                          Utility
                        </th>
                        <th
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Additional Work Charge ( BDT )"
                        >
                          Additional
                        </th>
                        <th
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Other Charge ( BDT ) "
                        >
                          Other
                        </th>
                        <th
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Discount Or Deduction ( BDT )"
                        >
                          Deduction
                        </th>
                        <th
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Refund Additional Work Charge ( BDT )"
                        >
                          Refund
                        </th>
                        <th
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Net Sells Price ( BDT )"
                        >
                          Price
                        </th>
                        <th class="width-160 text-center">Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th class="text-center">
                          <input
                            name="items[id][]"
                            value="35"
                            type="checkbox"
                            id="md_checkbox_1"
                            class="chk-col-cyan selects "
                          />
                          <label for="md_checkbox_1"></label>
                        </th>
                        <td>89-A-4th</td>
                        <td>fgcnb</td>
                        <td>5</td>
                        <td>499,998 </td>
                        <td class="text-bold">2,499,990</td>
                        <td>1,400</td>
                        <td>800</td>
                        <td>700</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td class="text-bold">2,502,890</td>
                        <td class="tdTrashAction text-center">
                          <a
                            class="btn btn-xs btn-info waves-effect m-b-3"
                            href=""
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Edit"
                          >
                            {" "}
                            <MdEdit />{" "}
                          </a>
                          <a
                            target="_blank"
                            data-target="#largeModal"
                            class="btn btn-xs btn-success waves-effect ajaxCall m-b-3"
                            href=""
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Preview"
                          >
                            {" "}
                            <FaSearch />{" "}
                          </a>
                          <a
                            class="btn btn-xs btn-danger waves-effect m-b-3"
                            href=""
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Trash"
                          >
                            {" "}
                            <MdDelete />{" "}
                          </a>
                          <a
                            class="btn btn-xs btn-warning waves-effect m-b-3"
                            href=""
                            data-toggle="tooltip"
                            data-placement="top"
                            title="PDF Generator"
                          >
                            {" "}
                            <MdPictureAsPdf />{" "}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th class="text-center">
                          <input
                            name="items[id][]"
                            value="34"
                            type="checkbox"
                            id="md_checkbox_2"
                            class="chk-col-cyan selects "
                          />
                          <label for="md_checkbox_2"></label>
                        </th>
                        <td>76-A-1st</td>
                        <td>ddgk</td>
                        <td>25</td>
                        <td>1,000 </td>
                        <td class="text-bold">25,000</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td class="text-bold">25,000</td>
                        <td class="tdTrashAction text-center">
                          <a
                            class="btn btn-xs btn-info waves-effect m-b-3"
                            href=""
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Edit"
                          >
                            {" "}
                            <MdEdit />{" "}
                          </a>
                          <a
                            target="_blank"
                            data-target="#largeModal"
                            class="btn btn-xs btn-success waves-effect ajaxCall m-b-3"
                            href=""
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Preview"
                          >
                            {" "}
                            <FaSearch />{" "}
                          </a>
                          <a
                            class="btn btn-xs btn-danger waves-effect m-b-3"
                            href=""
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Trash"
                          >
                            {" "}
                            <MdDelete />{" "}
                          </a>
                          <a
                            class="btn btn-xs btn-warning waves-effect m-b-3"
                            href=""
                            data-toggle="tooltip"
                            data-placement="top"
                            title="PDF Generator"
                          >
                            {" "}
                            <MdPictureAsPdf />{" "}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th class="text-center">
                          <input
                            name="items[id][]"
                            value="32"
                            type="checkbox"
                            id="md_checkbox_3"
                            class="chk-col-cyan selects "
                          />
                          <label for="md_checkbox_3"></label>
                        </th>
                        <td>64-A-2nd</td>
                        <td>4axiz Bullding</td>
                        <td>1400</td>
                        <td>4,000 </td>
                        <td class="text-bold">5,600,000</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td class="text-bold">5,600,000</td>
                        <td class="tdTrashAction text-center">
                          <a
                            class="btn btn-xs btn-info waves-effect m-b-3"
                            href=""
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Edit"
                          >
                            {" "}
                            <MdEdit />{" "}
                          </a>
                          <a
                            target="_blank"
                            data-target="#largeModal"
                            class="btn btn-xs btn-success waves-effect ajaxCall m-b-3"
                            href=""
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Preview"
                          >
                            {" "}
                            <FaSearch />{" "}
                          </a>
                          <a
                            class="btn btn-xs btn-danger waves-effect m-b-3"
                            href=""
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Trash"
                          >
                            {" "}
                            <MdDelete />{" "}
                          </a>
                          <a
                            class="btn btn-xs btn-warning waves-effect m-b-3"
                            href=""
                            data-toggle="tooltip"
                            data-placement="top"
                            title="PDF Generator"
                          >
                            {" "}
                            <MdPictureAsPdf />{" "}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProductAll;
