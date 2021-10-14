import "./LoginRegister.scss";
import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import LoginForm from "../../components/forms/LoginForm";
import RegisterForm from "../../components/forms/RegisterForm";
import ForgotPassForm from "../../components/forms/ForgotPassForm";

function LoginRegister() {
  const [page, setPage] = useState("login");
  return (
    <div className="background">
      <div className="container">
        <div className="left-container">
          <div className="wrapper">
            <div className="logo">
              <img src={Logo} alt="Logo" />
              <h1>Kas-E</h1>
            </div>
            <div className="text">
              <p>Plan your finances regularly and wisely, for your future</p>
            </div>
          </div>
        </div>
        <div className="right-container">
          {page === "login" ? (
            <LoginForm setPage={setPage} />
          ) : page === "register" ? (
            <RegisterForm setPage={setPage} />
          ) : page === "forgot" ? (
            <ForgotPassForm setPage={setPage} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
