import React from "react";
import { CDBNavbar, CDBBtn } from "cdbreact";
import { useNavigate } from "react-router-dom";
import { Header } from "./Navbar.style";

// import logo1 from "./pages/logo-new-1.png";
const Navbar = () => {
  let navigate = useNavigate();

  const clearSessionStorage = () => {
    sessionStorage.clear();
    navigate("/");
  };
  return (
    <Header style={{ background: "#025B9A", color: "#fff" }}>
      <CDBNavbar expand="md" scrolling className="justify-content-end">
        <div
          className="ml-auto"
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "",
          }}
        >
          TravelEZ
        </div>
      </CDBNavbar>
    </Header>
  );
};

export default Navbar;
