import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Modal, Button } from "antd";
import "./Card.scss";
import { BsSafeFill, BsTrash } from "react-icons/bs";

const Card = () => {
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
        <div
          style={{ display: "grid", textAlign: "center" }}
          className="create-form"
        >
          <h2>Create Other Safe</h2>
          <p>
            Enter the amount of income into your safe so that your expenses are
            under control
          </p>
          <div
            style={{ color: "#003F88", marginLeft: 100, marginRight: 100 }}
            className="card-logo"
          >
            <BsSafeFill />
          </div>
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
            <div className="create-second">
              <button
                style={{
                  background: "#003F88",
                  border: "none",
                  color: "white",
                  borderRadius: 5,
                  marginTop: 20,
                  marginBottom: 20,
                  width: 300,
                  marginLeft: 50,
                  marginRight: 50,
                }}
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
        <div className="card-list">
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className="card-icons"
          >
            <div style={{ color: "#003F88", marginLeft: 120 }} className="card">
              <BsSafeFill />
            </div>
            <div style={{ color: "#003F88", marginRight: 50 }} className="card">
              <BsTrash />
            </div>
          </div>
          <div style={{ marginLeft: 50, marginTop: 20 }} className="card-text">
            <Row className="card-content1">
              <Col xs="auto">
                <h5>Safe Name</h5>
                <p>Jalan-jalan</p>
              </Col>
              <Col xs="auto">
                <h5>Income</h5>
                <p>Rp 3.000.000</p>
              </Col>
            </Row>
            <div className="card-content3">
              <h5>Currency</h5>
              <p>Rupiah</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
