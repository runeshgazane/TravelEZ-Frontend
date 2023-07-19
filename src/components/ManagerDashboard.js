import React, { useState } from "react";
import Card from "./Card";
import ProfileNavbar from "./ProfileNavbar"; // Import the updated component
import "../css/EmployeeDashboard.css"; // Import your custom CSS file for styling
import PendingRequest from "./PendingRequest";
import ApprovalHistory from "./ApprovalHistory";
import PaymentStatus from "./PaymentStatus";
import ReimbursementForm from "./ReimbursementForm";

const ManagerDashboard = () => {
  const [activeCard, setActiveCard] = useState("PR");
  const handleCardClick = (title) => {
    // Handle click event here based on the card title
    console.log(`Clicked on: ${title}`);
  };

  const tableData = [
    {
      claimNo: "001",
      empID: "10920",
      empName: "Rahul Muttanawar",
      applicationDate: "20-06-2023",
      claimName: "Business Travel",
      claimDetails: "Travelling from Pune to Bangalore",
      projectName: "iEmployee",
      amount: "$1000",
    },

    {
      claimNo: "002",
      empID: "10925",
      empName: "Runesh Gazane",
      applicationDate: "25-06-2023",
      claimName: "Medical Expenses",
      claimDetails: "First Aid Kit",
      projectName: "Admin",
      amount: "$500",
    },

    // Add more dummy data as needed
  ];

  return (
    <div className="employee-dashboard">
      <ProfileNavbar />
      <div className="dashboard-content">
        <div className="card-container">
          <Card
            title="Pending Requests"
            onClick={() => handleCardClick(setActiveCard("PR"))}
          />
          <Card
            title="Approval History"
            onClick={() => handleCardClick(setActiveCard("AH"))}
          />
          <Card
            title="Payment Status"
            onClick={() => handleCardClick(setActiveCard("PS"))}
          />

          <Card
            title="Create Trip"
            onClick={() => handleCardClick(setActiveCard("RF"))}
          />
        </div>

        {"PR" === activeCard && <PendingRequest items={tableData} />}
        {"AH" === activeCard && <ApprovalHistory items={tableData} />}
        {"PS" === activeCard && <PaymentStatus items={tableData} />}
        {"RF" === activeCard && <ReimbursementForm />}
      </div>
    </div>
  );
};

export default ManagerDashboard;
