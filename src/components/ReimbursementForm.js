import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

import "../css/ReimbursementForm.css";

const ReimbursementForm = () => {
  const [category, setCategory] = useState("");
  const [projectName, setProjectName] = useState("");
  const [expenditure, setExpenditure] = useState("");
  const [expensesDate, setExpensesDate] = useState("");
  const [currency, setCurrency] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission here, you can submit the form data to the server or perform any necessary action

    console.log({
      category,
      projectName,
      expenditure,
      expensesDate,
      currency,
      comment,
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="trip-form-container">
            <h2 className="trip-form-heading">Reimbursement Claim</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">
                  Upload Bill/Receipt Category:
                </label>

                <input
                  type="text"
                  className="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Project Name:</label>

                <input
                  type="text"
                  className="form-control"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Expenditure:</label>

                <input
                  type="number"
                  className="form-control"
                  value={expenditure}
                  onChange={(e) => setExpenditure(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Expenses Date:</label>

                <input
                  type="date"
                  className="form-control"
                  value={expensesDate}
                  onChange={(e) => setExpensesDate(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Currency:</label>

                <select
                  className="form-select"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  required
                >
                  <option value="">Select Currency</option>

                  <option value="USD">USD</option>

                  <option value="EUR">EUR</option>

                  <option value="GBP">GBP</option>

                  {/* Add more currency options as needed */}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Comment:</label>

                <textarea
                  className="form-control"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReimbursementForm;
