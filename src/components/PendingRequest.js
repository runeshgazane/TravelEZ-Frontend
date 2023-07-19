import "../css/Table.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PendingRequest = (props) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Claim No</th>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Application Date</th>
            <th>Claim Name</th>
            <th>Claim Details</th>
            <th>Project Name</th>
            <th>Amount</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {props.items.map((data, index) => (
            <tr key={index}>
              <td>{data.claimNo}</td>
              <td>{data.empID}</td>
              <td>{data.empName}</td>
              <td>{data.applicationDate}</td>
              <td>{data.claimName}</td>
              <td>{data.claimDetails}</td>
              <td>{data.projectName}</td>
              <td>{data.amount}</td>
              <td>
                <button className="btn btn-success">Accept</button>
              </td>
              <td>
                <button className="btn btn-danger">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingRequest;
