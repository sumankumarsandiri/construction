import React from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";

const icons = () => {
  return icons;
};

export default icons;

<div className="btnx">
  <BsFillArchiveFill className="icon btn" />
  <button className="btnx" onClick={toggleDropdown}>
    Project
  </button>
  {/* <button className="btnx" onClick={() => demo1("Item 1")}>
            products
          </button> */}
  {isDropdownOpen && (
    <ul>
      <a href="/">
        <li>All</li>
      </a>
      <a href="/">
        <li>Create</li>
      </a>
      <a href="/">
        <li>Trashed</li>
      </a>
    </ul>
  )}
</div>;
