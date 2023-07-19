import React, { useState } from "react";
import "../css/ProfileNavbar.css"; // Import your custom CSS file for styling

const ProfileNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Implement your logout functionality here
    console.log("Logged out!");
  };

  return (
    <div className="profile-navbar">
      <h3>Employee Name</h3>
      <div className="dropdown-container">
        <button className="dropdown-button" onClick={handleDropdownClick}>
          &#9776;
        </button>
        {showDropdown && (
          <div className="dropdown-content">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileNavbar;
