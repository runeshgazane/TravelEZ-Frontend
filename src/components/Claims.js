import "../css/Table.css";

const Claims = (props) => {
  console.log(props);
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Claim No</th>
            <th>Claim Name</th>
            <th>Expenses</th>
            <th>Approved By</th>
            <th>Approved Status</th>
            <th>Reimbursement Status</th>
          </tr>
        </thead>

        <tbody>
          {props.items.map((data, index) => (
            <tr key={index}>
              <td>{data.claimNo}</td>
              <td>{data.claimName}</td>
              <td>{data.expenses}</td>
              <td>{data.approvedBy}</td>
              <td>{data.approvedStatus}</td>
              <td>{data.reimbursementStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Claims;
