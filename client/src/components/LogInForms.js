import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LogInForm(params) {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const resetForm = () => {
    setLoginUsername("");
    setLoginPassword("");
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const data = {
        username: loginUsername,
        password: loginPassword,
      };

      console.log(data);

      const response = await axios.post(
        "http://localhost:3000/users/login",
        data,
        config
      );

      setUser(response.data);

      resetForm();

      setErrorMessage(false);

      navigate("/user");

      console.log(response.data);
    } catch (error) {
      resetForm();
      setErrorMessage(true);
      console.error(error);
    }
  };

  return (
    <>
      <div className="login-page-container">
        <div className="login-form-container">
          <div className="form-header"></div>

          <form onSubmit={login}>
            <div className="username-container">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
              ></input>
            </div>
            <div className="password-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <input
                className="login-submit"
                type="submit"
                value="SIGN IN"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogInForm;
