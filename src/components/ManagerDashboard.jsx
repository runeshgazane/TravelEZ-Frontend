import React from "react";
import { CDBTable, CDBTableHeader, CDBTableBody, CDBInput } from "cdbreact";
import { CDBBtn } from "cdbreact";
import Navbar from "./Navbar";
import "../css/Dashboard.css";
import Card from "./Card";

export const MnagerDashboard = () => {
  return (
    <div className="dashboard d-flex">
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexFlow: "column",
          height: "100vh",
          overflowY: "hidden",
        }}
      >
        <Navbar />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "20px",
          }}
        >
          <Card title={"Pending Requests"} />
          <Card title={"Claim History"} />
          <Card title={"Create your trip"} />
        </div>
        <div style={{ height: "100%" }}>
          <div style={{ height: "calc(100% - 64px)", overflowY: "scroll" }}>
            <div className="d-flex card-section">
              <div className="cards-container">
                <div className="card-bg w-100 border d-flex flex-column">
                  <CDBTable bordered responsive>
                    <CDBTableHeader>
                      <tr>
                        <th>Claim No.</th>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Date of application</th>
                        <th>Claim Details</th>
                        <th>Project Name</th>
                        <th>Amount</th>
                        <th>Remarks</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </CDBTableHeader>
                    <CDBTableBody></CDBTableBody>
                  </CDBTable>
                </div>
              </div>
            </div>
            <footer className="footer">
              <div className="d-flex align-items-center">
                <small className="ml-2 mt-1">
                  &copy; TravelEZ, 2023. All rights reserved.
                </small>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MnagerDashboard;
