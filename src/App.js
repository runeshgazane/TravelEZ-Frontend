import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ManagerDashboard from "./components/ManagerDashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Login} />
          {/* <Route path="/employee_dashboard" Component={EmployeeDashboard} /> */}
          <Route path="/manager_dashboard" Component={ManagerDashboard} />
          {/* <Route path="/finance_dashboard" Component={FinanceDashboard} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
