// @ts-nocheck
import React from "react";
import "../styles/Login.scss";
import logo from "../../public/assets/logos/logo_yard_sale.svg";

const Login = () => {
  return (
    // In React, class becomes className
    <div className="login">
      <div className="form-container">
        <img src={logo} alt="logo" className="logo" />

        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>

        <form action="/" className="form">
          {/* In React, for becomes htmlFor */}
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className="input input-password"
          />

          {/* In React, for becomes htmlFor */}
          <label htmlFor="new-password" className="label">
            Password
          </label>
          <input
            type="password"
            id="new-password"
            placeholder="*********"
            className="input input-password"
          />

          <input
            type="submit"
            value="Confirm"
            className="primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
