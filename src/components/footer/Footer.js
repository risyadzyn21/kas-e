import React from "react";
import "./Footer.scss";

import apple from "../../assets/landing-page-images/apple.png";
import google from "../../assets/landing-page-images/google.png";
import Vector from "../../assets/landing-page-images/Vector.png";

const Footer = () => {
  return (
    <div>
      <div style={{ background: "#003F88" }} className="footer">
        <div style={{ color: "white" }} className="footer-container">
          <div className="footer-wrapper">
            <div className="info">
              <ul>
                <li>About</li>
                <li>Support</li>
              </ul>
            </div>
            <div className="row-detail">
              <div className="info-detail">
                <ul>
                  <li>Company</li>
                  <li>Report</li>
                </ul>
              </div>
              <div className="info-detail">
                <ul>
                  <li>Help Center</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="download">
            <h3>Download</h3>
            <ul>
              <li className="download-img">
                <a href="https://play.google.com/">
                  <img style={{ height: "70px" }} src={google} alt="" />{" "}
                </a>
                <a href="https://www.apple.com/app-store/">
                  <img style={{ height: "65px" }} src={apple} alt="" />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr style={{ color: "white" }}></hr>
        <div style={{ color: "white" }} className="bottom">
          <div style={{ padding: "15px" }} className="bahasa">
            <img src={Vector} alt="" /> <span>English</span>
          </div>
          <div className="copyright">
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>

            </ul>
          </div>
          <div style={{ padding: "15px" }} className="cr">
            © Copyright 2021. All right reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
