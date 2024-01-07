import { MdEdit } from "react-icons/md";

import { MdDelete } from "react-icons/md";
import { MdPictureAsPdf } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import "../pages/Projectall.css";

function AllProject() {
  return (
    <section class="content">
      <div class="container-fluid">
        <div class="block-header  pull-left ">
          <a
            className="btn btn-sm btn-info waves-effect"
            href="https://demo.erealestate.eaccount.xyz/project/create"
          >
            Create
          </a>
        </div>
        {/* <ol class="breadcrumb breadcrumb-col-cyan  pull-right ">
                <li><a href="https://demo.erealestate.eaccount.xyz"><i class="material-icons">home</i> Home</a>
                </li>
                <li><a href="https://demo.erealestate.eaccount.xyz/project"><i class="fas fa-project-diagram"></i>
                        &nbsp;Project Manage</a></li>
                <li class="active"><i class="material-icons">archive</i>&nbsp; All
                </li>
            </ol> */}
        {/* <!-- Hover Rows --> */}
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
              <div class="header">
                <a
                  class="btn btn-xs btn-info waves-effect"
                  href="https://demo.erealestate.eaccount.xyz/project"
                >
                  All(41)
                </a>
                {/* <a class="btn btn-xs btn-danger waves-effect text-black"
                                    href="https://demo.erealestate.eaccount.xyz/project/trashed">Trash(24
                                    )</a> */}
                <ul class="header-dropdown m-r--5">
                  <form
                    class="search"
                    action="https://demo.erealestate.eaccount.xyz/project/active/search"
                    method="get"
                  >
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
              <form
                class="actionForm"
                action="https://demo.erealestate.eaccount.xyz/project/active/action"
                method="get"
              >
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
                <div class="body table-responsive w-full">
                  <input
                    type="hidden"
                    name="_token"
                    value="xJvMkzu68ZSQ46blIzm2L8aTbmNmZFpJ48Y"
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
                        <th>Name</th>
                        <th>Location</th>
                        <th>Description</th>
                        <th class="width-140 text-center">Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th class="text-center">
                          <input
                            name=""
                            value="93"
                            type="checkbox"
                            id="md_checkbox_1"
                            class="chk-col-cyan selects "
                          />
                          <label for="md_checkbox_1"></label>
                        </th>
                        <td>Ravi</td>
                        <td>Jagtyal</td>
                        <td>Sales</td>
                        <td class="tdTrashAction text-center">
                          <a
                            class="btn btn-xs btn-info waves-effect"
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
                            class="btn btn-xs btn-success waves-effect ajaxCall dis-none"
                            href=""
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Preview"
                          >
                            {" "}
                            <FaSearch />{" "}
                          </a>
                          <a
                            class="btn btn-xs btn-danger waves-effect"
                            href="https://demo.erealestate.eaccount.xyz/project/destroy/93"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Trash"
                          >
                            {" "}
                            <MdDelete />{" "}
                          </a>
                          <a
                            class="btn btn-xs btn-warning waves-effect"
                            href="https://demo.erealestate.eaccount.xyz/project/pdf/93"
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
                            name=""
                            value="93"
                            type="checkbox"
                            id="md_checkbox_1"
                            class="chk-col-cyan selects "
                          />
                          <label for="md_checkbox_1"></label>
                        </th>
                        <td>Teja</td>
                        <td> Karimnagar</td>
                        <td>excuteive</td>
                        <td class="tdTrashAction text-center">
                          <a
                            class="btn btn-xs btn-info waves-effect"
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
                            class="btn btn-xs btn-success waves-effect ajaxCall dis-none"
                            href=""
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Preview"
                          >
                            {" "}
                            <FaSearch />{" "}
                          </a>
                          <a
                            class="btn btn-xs btn-danger waves-effect"
                            href="https://demo.erealestate.eaccount.xyz/project/destroy/93"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Trash"
                          >
                            {" "}
                            <MdDelete />{" "}
                          </a>
                          <a
                            class="btn btn-xs btn-warning waves-effect"
                            href="https://demo.erealestate.eaccount.xyz/project/pdf/93"
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
                            name=""
                            value="93"
                            type="checkbox"
                            id="md_checkbox_1"
                            class="chk-col-cyan selects "
                          />
                          <label for="md_checkbox_1"></label>
                        </th>
                        <td>Mandaloju</td>
                        <td> Hyd</td>
                        <td>dep</td>
                        <td class="tdTrashAction text-center">
                          <a
                            class="btn btn-xs btn-info waves-effect"
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
                            class="btn btn-xs btn-success waves-effect ajaxCall dis-none"
                            href=""
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Preview"
                          >
                            {" "}
                            <FaSearch />{" "}
                          </a>
                          <a
                            class="btn btn-xs btn-danger waves-effect"
                            href=""
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Trash"
                          >
                            {" "}
                            <MdDelete />{" "}
                          </a>
                          <a
                            class="btn btn-xs btn-warning waves-effect"
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

export default AllProject;
