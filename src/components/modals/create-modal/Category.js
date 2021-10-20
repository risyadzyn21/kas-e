import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import { getSafe } from "../../../services/index";
import "./Category.scss";
import 'antd/dist/antd.css'
import Fun from "../../../assets/icons/FunAndRelax.png";

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
    getSafe()
    .then((res) => {
      setSafe(res.data);
      setIsModalVisible(true);
    })
  }, []);

  return (
    <div>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <div style={{margin: 0}}className="category">
          <div className="category-title">
            <h2 style={{ fontSize: 25 }}>Set your spending limit</h2>
            <p>
              Make your spending more controlled, by setting your spending limit
            </p>
          </div>
          <div className="category-form">
            <div className="fun-relax">
              <div style={{ display: "flex", marginLeft: 10, marginRight: 10, marginTop: 10, gap: 10 }} className="fun">
              <img src={Fun} alt="fun" />
              <h5>Fun and Relax</h5>
              </div>
              <div style={{ marginLeft: 50, marginRight: 50}} className="relax">
              <p>
                Your expenses related to entertainment, vacation, leisure, snack
                or hangout with friends and shop
              </p>
              <input style={{ width: 350}} type="text" placeholder="RP" />
              </div>
            </div>
        
    
        <div className="fun-relax">
              <div style={{ display: "flex", marginLeft: 10, marginRight: 10, marginTop: 10, gap: 10 }} className="fun">
              <img src={Fun} alt="fun" />
              <h5>Fun and Relax</h5>
              </div>
              <div style={{ marginLeft: 50, marginRight: 50}} className="relax">
              <p>
                Your expenses related to entertainment, vacation, leisure, snack
                or hangout with friends and shop
              </p>
              <input style={{ width: 350}} type="text" placeholder="RP" />
              </div>
            </div>
            <div className="fun-relax">
              <div style={{ display: "flex", marginLeft: 10, marginRight: 10, marginTop: 10, gap: 10 }} className="fun">
              <img src={Fun} alt="fun" />
              <h5>Fun and Relax</h5>
              </div>
              <div style={{ marginLeft: 50, marginRight: 50}} className="relax">
              <p>
                Your expenses related to entertainment, vacation, leisure, snack
                or hangout with friends and shop
              </p>
              <input style={{ width: 350}} type="text" placeholder="RP" />
              </div>
            </div>
            <div className="fun-relax">
              <div style={{ display: "flex", marginLeft: 10, marginRight: 10, marginTop: 10, gap: 10 }} className="fun">
              <img src={Fun} alt="fun" />
              <h5>Fun and Relax</h5>
              </div>
              <div style={{ marginLeft: 50, marginRight: 50}} className="relax">
              <p>
                Your expenses related to entertainment, vacation, leisure, snack
                or hangout with friends and shop
              </p>
              <input style={{ width: 350}} type="text" placeholder="RP" />
              </div>
            </div>
            <button
              style={{
                background: "#003F88",
                border: "none",
                color: "white",
                borderRadius: 5,
                marginTop: 20,
                marginBottom: 20,
                width: 400,
                marginLeft: 50,
                marginRight: 50,
                cursor: 'pointer',
              }}
            >
              Create
            </button>
            </div>
            </div>
      </Modal>
    </div>
  );
};

export default Category;
