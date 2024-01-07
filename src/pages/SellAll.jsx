import React from "react";
import "../pages/SellAll.css";
import { MdEdit } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { IoMdReturnLeft } from "react-icons/io";
import { MdPictureAsPdf } from "react-icons/md";
function SellAll() {
  return (
    <section class="content">
      <div class="container-fluid">
        <div class="block-header  pull-left ">
          <a href="/" class="btn btn-sm btn-info waves-effect">
            Create
          </a>
        </div>
        {/* <ol class="breadcrumb breadcrumb-col-cyan  pull-right ">
                <li><a href="https://demo.erealestate.eaccount.xyz"><i class="material-icons">home</i> Home</a>
                </li>
                <li><a href="https://demo.erealestate.eaccount.xyz/sell"><i class="fas fa-dolly"></i>
                        &nbsp;Sell Manage</a></li>
                <li class="active"><i
                        class="material-icons">archive</i>&nbsp; All
                </li>
            </ol> */}
        {/* <!-- Hover Rows --> */}
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
              <div class="header">
                <a href="/" class="btn btn-xs btn-info waves-effect">
                  All (6)
                </a>
                {/* <a                                 class="btn btn-xs btn-danger waves-effect text-black"
                                href="">Trash(3)
                            </a> */}
                <ul class="header-dropdown m-r--5">
                  <form class="search" action="" method="get">
                    <input type="hidden" name="_token" value=""></input>
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
                    value="vGBhFqOY5rxau5dchUcpSZp66723eoQ0qMIYxWTb"
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
                        <th>Customer Name</th>
                        <th>Project Name</th>
                        <th>Product ID</th>
                        <th>Seller Name</th>
                        <th>Sells Date</th>
                        <th class="width-160 text-center">Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th class="text-center">
                          <input
                            name="items[id][]"
                            value="30"
                            type="checkbox"
                            id="md_checkbox_1"
                            class="chk-col-cyan selects "
                          />
                          <label for="md_checkbox_1"></label>
                        </th>
                        <td>Rony Talukdar</td>
                        <td>ddgk</td>
                        <td>76-A-1st</td>
                        <td>Vishnu</td>
                        <td>28-Dec-2023</td>
                        <td class="tdTrashAction text-center">
                          <a
                            href="/"
                            class="btn btn-xs btn-info waves-effect  m-b-3"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Edit"
                          >
                            <MdEdit />
                          </a>
                          <a
                            href="/"
                            target="_blank"
                            data-target="#largeModal"
                            class="btn btn-xs btn-success waves-effect ajaxCall dis-none m-b-3"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Preview"
                          >
                            <FaSearch />
                          </a>
                          <a
                            href="/"
                            class="btn btn-xs btn-danger waves-effect m-b-3"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Sales Return"
                          >
                            <IoMdReturnLeft />{" "}
                          </a>
                          <a
                            href="/"
                            class="btn btn-xs btn-warning waves-effect m-b-3"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="PDF Generator"
                          >
                            <MdPictureAsPdf />
                          </a>
                          <a
                            href="/"
                            class="btn btn-xs btn-warning waves-effect m-b-3"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Schedule Manage"
                          >
                            <MdOutlineAccessTimeFilled />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th class="text-center">
                          <input
                            name="items[id][]"
                            value="26"
                            type="checkbox"
                            id="md_checkbox_2"
                            class="chk-col-cyan selects "
                          />
                          <label for="md_checkbox_2"></label>
                        </th>
                        <td>Roman</td>
                        <td>Lago Condo</td>
                        <td>56-A-1st</td>
                        <td>JOSE</td>
                        <td>01-Dec-2023</td>
                        <td class="tdTrashAction text-center">
                          <a
                            href="/"
                            class="btn btn-xs btn-info waves-effect  m-b-3"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Edit"
                          >
                            <MdEdit />
                          </a>
                          <a
                            href="/"
                            target="_blank"
                            data-target="#largeModal"
                            class="btn btn-xs btn-success waves-effect ajaxCall dis-none m-b-3"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Preview"
                          >
                            <FaSearch />
                          </a>
                          <a
                            class="btn btn-xs btn-danger waves-effect m-b-3"
                            href="6"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Sales Return"
                          >
                            <IoMdReturnLeft />
                          </a>
                          <a
                            href="/"
                            class="btn btn-xs btn-warning waves-effect m-b-3"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="PDF Generator"
                          >
                            <MdPictureAsPdf />
                          </a>
                          <a
                            href="/"
                            class="btn btn-xs btn-warning waves-effect m-b-3"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Schedule Manage"
                          >
                            <MdOutlineAccessTimeFilled />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th class="text-center">
                          <input
                            name="items[id][]"
                            value="25"
                            type="checkbox"
                            id="md_checkbox_3"
                            class="chk-col-cyan selects "
                          />
                          <label for="md_checkbox_3"></label>
                        </th>
                        <td>Real</td>
                        <td>loteamento teste</td>
                        <td>55-A-20th</td>
                        <td>JOSE</td>
                        <td>12-Dec-2023</td>
                        <td class="tdTrashAction text-center">
                          <a
                            href="/"
                            class="btn btn-xs btn-info waves-effect  m-b-3"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Edit"
                          >
                            <MdEdit />
                          </a>
                          <a
                            href="/"
                            target="_blank"
                            data-target="#largeModal"
                            class="btn btn-xs btn-success waves-effect ajaxCall dis-none m-b-3"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Preview"
                          >
                            <FaSearch />
                          </a>
                          <a
                            href="/"
                            class="btn btn-xs btn-danger waves-effect m-b-3"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Sales Return"
                          >
                            <IoMdReturnLeft />
                          </a>
                          <a
                            href="/"
                            class="btn btn-xs btn-warning waves-effect m-b-3"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="PDF Generator"
                          >
                            <MdPictureAsPdf />
                          </a>
                          <a
                            href="/"
                            class="btn btn-xs btn-warning waves-effect m-b-3"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Schedule Manage"
                          >
                            <MdOutlineAccessTimeFilled />
                          </a>
                        </td>
                      </tr>
                      {/* <thead>
                                                <tr>
                                                    <th class="checkbox_custom_style text-center width-100">
                                                        <input name="selectBottom" type="checkbox" id="md_checkbox_footer"
                                                            class="chk-col-cyan" />
                                                        <label for="md_checkbox_footer"></label>
                                                    </th>
                                                    <th>Customer Name</th>
                                                    <th>Project Name</th>
                                                    <th>Product ID</th>
                                                    <th>Seller Name</th>
                                                    <th>Sells Date</th>
                                                    <th class="width-160 text-center">Options</th>
                                                </tr>
                                            </thead> */}
                    </tbody>
                  </table>
                </div>
                <div class="pagination-and-action-area body">
                  <div>
                    <div class="select-and-apply-area">
                      <div class="form-group width-300">
                        <div class="form-line">
                          <select
                            class="form-control"
                            name="apply_comand_bottom"
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SellAll;
