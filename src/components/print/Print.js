import React from "react";
import "./Print.scss";
import { AiOutlineLeft } from "react-icons/ai";
import SafeIcon from "../../assets/icons/brangkas.png";
import Fun from "../../assets/icons/FunAndRelax.png";
import BillPay from "../../assets/icons/bill-payment.png";
import DailyNeed from "../../assets/icons/daily-need.png";
import UrgentNeed from "../../assets/icons/urgent-need.png";

const Print = () => {

  return (
    <>
      <div style={{ margin: "24px 16px 0" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <div style={{ paddingLeft: 20 }} className="report-detail">
            <div style={{ marginBottom: 20, fontWeight: 'bold' }} className="report-list">
              Time Range
            </div>
            <div className="report-list">
              Daily <span style={{ marginLeft: 350 }}>31 agustus 2021</span>
              <hr></hr>
            </div>
            <div className="report-list">
              <h4>Income<span style={{ marginLeft: 350}}>Rp. 1.000.000</span></h4> 
              <hr></hr>
              <div className='report-content'>
              <img style={{ height: 25}} src={SafeIcon} alt="safe" />
              <p style={{marginLeft: 12}}>
                To Jalan-jalan{" "}
                <span style={{ marginLeft: 290 }}>Rp. 500.000</span>
              </p>
            </div>
            </div>
            <div style={{ marginTop: 40 }} className="report-list">
              <h4>Expense</h4>
              <hr></hr>
              <div className="report-content">
              <img style={{ height: 13}} src={BillPay} alt="bill" />
              <p style={{ marginLeft: 11}}> 
                Bill and Payments{" "}
                <span style={{ marginLeft: 250 }}>Rp. 500.000</span>
              </p>
              </div>
              <div className="report-text">
              <p>Electricity Tokers</p>
              </div>
              <div className="report-content">
              <img style={{ height: 25}} src={Fun} alt="fun" />
              <p style={{ marginLeft: 15}}>
                Fun and Relax{" "}
                <span style={{ marginLeft: 280 }}>Rp. 500.000</span>
              </p>
              </div>
              <div className="report-text">
              <p>For Snacks</p>
              </div>
              <div className="report-content">
              <img style={{ height: 25}} src={DailyNeed} alt="fun" />
              <p style={{ marginLeft: 15}}>
               Daily Needs{" "}
                <span style={{ marginLeft: 297 }}>Rp. 500.000</span>
              </p>
            </div>
            <div className="report-text">
              <p>For Gas</p>
              </div>
            </div>
            <div style={{ marginTop: 40 }} className="report-list">
              <h4>Net Income</h4>
              <hr></hr>
              <p>
                Income <span style={{ marginLeft: 365 }}>Rp. 500.000</span>
              </p>
              <p>
                Expense <span style={{ marginLeft: 360 }}>Rp. 500.000</span>
              </p>
              <hr style={{ width: 10, marginRight: 10}}></hr>
              <hr style={{ width: 90, marginRight: 20}}></hr>
              <p>
                Net Income <span style={{ marginLeft: 340 }}>Rp. 500.000</span>
              </p>
            </div>
            <div style={{ marginTop: 40 }} className="report-list">
             <h4> Ending Balance </h4>
              <hr></hr>
              <p>
                Opening Balance{" "}
                <span style={{ marginLeft: 300 }}>Rp. 500.000</span>
              </p>
              <p>
                Income <span style={{ marginLeft: 365 }}>Rp. 500.000</span>
              </p>
              <p>
                Total Income{" "}
                <span style={{ marginLeft: 330 }}>Rp. 500.000</span>
              </p>
              <p>
                Expense <span style={{ marginLeft: 360 }}>Rp. 500.000</span>
              </p>
              <p>
                Ending Balance{" "}
                <span style={{ marginLeft: 320, paddingBottom: 200 }}>
                  Rp. 500.000
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Print;
