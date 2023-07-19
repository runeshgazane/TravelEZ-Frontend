import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "../css/UserGuide.css"; // Import your custom CSS file for additional styling

const UserGuide = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="reimbursement-guide">
            <h2 className="guide-heading">
              Employee Guide for Reimbursement Process
            </h2>

            <p>
              <strong>Overview</strong>
              <br />
              The reimbursement process allows employees to claim expenses they
              have incurred on behalf of the company for business purposes. It's
              essential to follow the guidelines and procedures outlined below
              to ensure a smooth and efficient reimbursement process.
            </p>

            <p>
              <strong>Eligible Expenses</strong>
              <br />
              Only business-related expenses that are pre-approved by the
              company are eligible for reimbursement. Common eligible expenses
              include travel expenses, meal expenses during business trips,
              accommodation, and other authorized expenses.
            </p>

            <p>
              <strong>Keep Receipts</strong>
              <br />
              Always keep and provide original receipts for all expenses
              claimed. The receipts should include details such as the date,
              vendor name, item description, and the amount paid. Electronic
              receipts are acceptable as long as they are clear and legible.
            </p>

            <p>
              <strong>Claim Submission</strong>
              <br />
              Submit reimbursement claims in a timely manner. Generally, claims
              should be submitted within 30 days from the date the expense was
              incurred. Late submissions may result in delays in processing or
              rejection of the claim.
            </p>

            <p>
              <strong>Expense Report Form</strong>
              <br />
              Complete the company's official expense report form accurately.
              Provide all necessary information, including the category of the
              expense, project name or code (if applicable), expenses date, and
              any other required details.
            </p>

            <p>
              <strong>Currency Conversion</strong>
              <br />
              For expenses incurred in foreign currencies, convert the amounts
              to the company's base currency using the applicable exchange rate
              on the date of the expense. Provide both the original currency
              amount and the converted amount in the expense report.
            </p>

            <p>
              <strong>Manager Approval</strong>
              <br />
              Obtain approval from the respective manager or supervisor for the
              claimed expenses. Managers will review the claim to ensure
              compliance with company policies and budget guidelines before
              approving.
            </p>

            <p>
              <strong>Submission of Claim</strong>
              <br />
              Once the expense report is complete and approved, submit it to the
              finance or HR department. Include all supporting documents, such
              as receipts and approvals, along with the claim.
            </p>

            <p>
              <strong>Submission of Claim</strong>
              <br />
              Once the expense report is complete and approved, submit it to the
              finance or HR department. Include all supporting documents, such
              as receipts and approvals, along with the claim.
            </p>

            <p>
              <strong>Reimbursement Process</strong>
              <br />
              For expenses incurred in foreign currencies, convert the amounts
              to the company's base currency using the applicable exchange rate
              on the date of the expense. Provide both the original currency
              amount and the converted amount in the expense report.
            </p>

            <p>
              <strong>Reimbursement Period</strong>
              <br />
              The time taken for reimbursement may vary depending on the
              company's policies and workload. However, every effort will be
              made to process reimbursements promptly.
            </p>

            {/* Include other sections of the guide here */}

            <p>
              <strong>Compliance with Policy</strong>
              <br />
              Ensure compliance with the company's reimbursement policy at all
              times. Any misuse or fraudulent claims may result in disciplinary
              action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGuide;
