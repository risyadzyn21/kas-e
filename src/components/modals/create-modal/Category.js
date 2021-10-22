import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import { getSafe } from "../../../services/index";
import "./Category.scss";
import "antd/dist/antd.css";
import Fun from "../../../assets/icons/FunAndRelax.png";
import BillPay from "../../../assets/icons/bill-payment.png";
import DailyNeed from "../../../assets/icons/daily-need.png";
import UrgentNeed from "../../../assets/icons/urgent-need.png";

const Category = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [safe, setSafe] = useState([]);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  useEffect(() => {
    getSafe().then((res) => {
      setSafe(res.data);
      setIsModalVisible(true);
    });
  }, []);

  return (
    <div>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div style={{ margin: 0 }} className="category">
          <div className="category-title">
            <h2 style={{ fontWeight: 'bold'}}>Set your spending limit</h2>
            <p>
              Make your spending more controlled, by setting your spending limit
            </p>
          </div>
          <div className="category-form">
            <div className="fun-relax">
              <div
                style={{
                  display: "flex",
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 10,
                  gap: 10,
                }}
                className="fun"
              >
                <img src={Fun} alt="fun" />
                <h4 style={{ fontWeight: "bold" }}>Fun and Relax</h4>
              </div>
              <div
                style={{ marginLeft: 50, marginRight: 50 }}
                className="relax"
              >
                <p style={{ fontSize: 12 }}>
                  Your expenses related to entertainment, vacation, leisure,
                  snack or hangout with friends and shop
                </p>
                <input type="text" placeholder="RP" />
              </div>
            </div>

            <div className="bill-pay">
              <div
                style={{
                  display: "flex",
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 10,
                  gap: 10,
                }}
                className="fun"
              >
                <img src={BillPay} alt="bill" />
                <h4 style={{ fontWeight: "bold" }}>Bill and Payment</h4>
              </div>
              <div
                style={{ marginLeft: 50, marginRight: 50 }}
                className="relax"
              >
                <p style={{ fontSize: 12 }}>
                  Your rent bills, insurance, payments for electricity, water,
                  gas and other arrears
                </p>
                <input type="text" placeholder="RP" />
              </div>
            </div>
            <div className="daily-needs">
              <div
                style={{
                  display: "flex",
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 10,
                  gap: 10,
                }}
                className="fun"
              >
                <img src={DailyNeed} alt="daily" />
                <h4 style={{ fontWeight: "bold" }}>Daily Needs</h4>
              </div>
              <div
                style={{ marginLeft: 50, marginRight: 50 }}
                className="relax"
              >
                <p style={{ fontSize: 12 }}>
                  This category is for your daily needs, such as toiletries,
                  household and others
                </p>
                <input type="text" placeholder="RP" />
              </div>
            </div>
            <div className="urgent-needs">
              <div
                style={{
                  display: "flex",
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 10,
                  gap: 10,
                }}
                className="fun"
              >
                <img src={UrgentNeed} alt="daily" />
                <h4 style={{ fontWeight: "bold" }}>Urgent Need</h4>
              </div>
              <div
                style={{ marginLeft: 50, marginRight: 50 }}
                className="relax"
              >
                <p style={{ fontSize: 12 }}>
                  This category is intended for funds in case of an emergency
                </p>
                <input type="text" placeholder="RP" />
              </div>
            </div>
            </div>
            <button>Create</button>
          </div>
      </Modal>
    </div>
  );
};

export default Category;
