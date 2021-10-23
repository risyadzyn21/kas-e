import React, { useState } from "react";
import { Row, Col } from 'antd';
import { Modal, Button } from "antd";
import "./SeeCard.scss";
import { BsSafeFill, BsTrash } from "react-icons/bs";
import { Card } from 'antd';
import SafeIcon from "../../../assets/icons/brangkas.png";
import Trash from '../../../assets/icons/trash.png';

const SeeCard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  return (
    <div>
      <Button
        style={{
          border: "none",
          background: "#003F88",
          color: "white",
          height: 40,
          width: 150,
          borderRadius: 8,
          marginLeft: 800,
          marginTop: 30,
        }}
        type="primary"
        onClick={showModal}
      >
        Add New Safe
      </Button>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="create-form">
          <h2>Create Other Safe</h2>
          <p>
            Enter the amount of income into your safe so that your expenses are
            under control
          </p>
           <img src={SafeIcon} alt="safe" />
          <form>
            <div className="form">
              <input
                type="text"
                className="text-input"
                placeholder="Safe Name"
              />
            </div>
            <div className="form">
              <input
                type="text"
                className="text-input"
                placeholder="Currency"
              />
            </div>
            <div className="form">
              <input type="text" className="text-input" placeholder="Income" />
            </div>
            <div className="create-see">
              <button
                type="submit"
                className="submit-btn"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <div className="cards">
        <Card>
        <div className="card-list">
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className="card-icons"
          >
            <div style={{ color: "#003F88", marginLeft: 110 }} className="card">
            <img src={SafeIcon} alt="safe" />
            </div>
            <div style={{ color: "#003F88"}} className="card">
            <img src={Trash} alt="sampah" />
            </div>
          </div>
          <div style={{ marginTop: 20 }} className="card-text">
            <Row className="card-content1">
              <Col xs="auto">
                <h4>Safe Name</h4>
                <p>Jalan-jalan</p>
              </Col>
              <Col style={{ marginLeft: 70}} xs="auto">
                <h4>Income</h4>
                <p>Rp 3.000.000</p>
              </Col>
            </Row>
            <div className="card-content3">
              <h4>Currency</h4>
              <p>Rupiah</p>
            </div>
          </div>
        </div>
        </Card>
      </div>
    </div>
  );
};

export default SeeCard;
