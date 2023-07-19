import React, { useState } from "react";
import Card from "./Card";
import ProfileNavbar from "./ProfileNavbar"; // Import the updated component
import "../css/EmployeeDashboard.css"; // Import your custom CSS file for styling
import Claims from "./Claims";
import ReimbursementForm from "./ReimbursementForm";
import UserGuide from "./UserGuide";

const EmployeeDashboard = () => {
  const [activeCard, setActiveCard] = useState("claims");

  const handleCardClick = (title) => {
    // Handle click event here based on the card title

    console.log(`Clicked on: ${title}`);
  };

  // Dummy data for the table

  const tableData = [
    {
      claimNo: "001",
      claimName: "Business Travel",
      expenses: "$1000",
      approvedBy: "John Doe",
      approvedStatus: "Approved",
      reimbursementStatus: "Paid",
    },

    {
      claimNo: "002",
      claimName: "Medical Expenses",
      expenses: "$500",
      approvedBy: "Jane Smith",
      approvedStatus: "Pending",
      reimbursementStatus: "Not Paid",
    },

    // Add more dummy data as needed
  ];

  return (
    <div className="employee-dashboard">
      <ProfileNavbar />
      <div className="dashboard-content">
        <div className="card-container">
          <Card
            title="Claims"
            onClick={() => handleCardClick(setActiveCard("claims"))}
          />
          <Card
            title="User Guide"
            onClick={() => handleCardClick(setActiveCard("UG"))}
          />

          <Card
            title="Create Trip"
            onClick={() => handleCardClick(setActiveCard("RF"))}
          />
          <Card
            title="Advance Request"
            onClick={() => handleCardClick(setActiveCard("AR"))}
          />
        </div>

        {"claims" === activeCard && <Claims items={tableData} />}
        {"RF" === activeCard && <ReimbursementForm />}
        {"UG" === activeCard && <UserGuide />}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
