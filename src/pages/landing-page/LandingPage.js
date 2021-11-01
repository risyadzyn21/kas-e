import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/landing-page-images/logo-kas-e.png";
import illustration1 from "../../assets/landing-page-images/illustration1.png";
import illustration2 from "../../assets/landing-page-images/illustration2.png";
import illustration3 from "../../assets/landing-page-images/illustration3.png";
import Footer from "../../components/footer/Footer.js";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <div>
      <div className="header">
        <div className="header-container">
          <Link to="/" className="logo">
            <img src={logo} alt="" />
            <h1 className="logo-text">KAS-E</h1>
          </Link>

          <Link to="/auth" className="login-btn">
            Log in
          </Link>
        </div>
        <div className="hero">
          <div className="hero-text">
            <h1>
              Organize More, Do More. Save More, Earn More With{" "}
              <span>Kas-E</span>
            </h1>
            <p>
              KAS-E helps you to organize your finances, reminds you of
              overspending and keeps your finances stable
            </p>
          </div>
        </div>
      </div>

      <div className="body">
        <div className="body-container">
          <div className="content-first">
            <div className="text-first">
              <h1>Bills and Payment</h1>
              <p>
                Kas-E Help you to list all your bills and payments, so that your
                finances are more organized
              </p>
            </div>
            <div className="img-first">
              <img src={illustration1} alt="" />
            </div>
          </div>
          <div className="content-second">
            <div className="img-second">
              <img src={illustration2} alt="" />
            </div>
            <div className="text-second">
              <h1>No More Unnecessary Expenses</h1>
              <p>
                Kas-E help you to Prevent yourself from spending more by setting
                a limit in each of your spending categories
              </p>
            </div>
          </div>
          <div className="content-third">
            <div className="text-third">
              <h1>See Your Financial Report Monthly or Daily</h1>
              <p>
                {" "}
                Clarify the details of your expenses and income by viewing it
                through the Report menu, you can also print your financial
                report so that you have printed evidence.
              </p>
            </div>
            <div className="img-third">
              <img src={illustration3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
