import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
// import axios from "axios";
// import swal from "sweetalert";

const Login = (props) => {
  var [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    console.log("in handle change");
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    const obj = {
      email: user.email,
      password: user.password,
    };
    navigate("/manager_dashboard");
    // try {
    //   const resp = await axios.post(
    //     "https://foodcount2.onrender.com/api/users/signin",
    //     obj
    //   );

    //   sessionStorage.setItem("User", JSON.stringify(resp.data.User));
    //   sessionStorage.setItem("token", resp.data.token);
    //   swal("Logged in successfully");
    //   navigate("/profile");
    // } catch (error) {
    //   if (error.code !== 200) {
    //     swal("Wrong credentials, Try again...");
    //   }
    //   console.log("maybe problem in login page");
    // }
  };

  return (
    <div className="App">
      <div className="auth-form-container">
        <h1>Log In</h1>
        <form className="login-form">
          <label className="label-text" htmlFor="email">
            Email
          </label>
          <input
            className="input-text"
            value={user.email}
            onChange={handleChange}
            type="email"
            placeholder="youremail@genzeon.com"
            id="email"
            name="email"
          />
          <label className="label-text" htmlFor="password">
            Password
          </label>
          <input
            className="input-text"
            value={user.password}
            onChange={handleChange}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <br />
          <button className="button1" type="submit" onClick={submitHandler}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
