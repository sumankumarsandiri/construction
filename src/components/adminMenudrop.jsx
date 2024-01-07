// src/components/AdminMenuDropdown.js
import React, { useState } from "react";
import "../components/adminmenudrop.css";

const AdminMenuDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="admin-menu-dropdown">
      <button onClick={toggleDropdown}>Products</button>
      {isDropdownOpen && (
        <ul>
          <li>Dashboard</li>
          <li>Users</li>
          <li>Settings</li>
          {/* Add more menu items as needed */}
        </ul>
      )}
    </div>
  );
};

export default AdminMenuDropdown;
