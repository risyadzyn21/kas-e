import React, { useState, useEffect } from "react";
import SafeIlustration from "../../../assets/ilustrastion/safe-ilustration.png"
import { Modal, Button } from 'antd';
import "./Opening.scss";

const Opening = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);


  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
      setIsModalVisible(true);
    })

  return (
    <div>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
      <div style={{ display: 'grid', textAlign: 'center'}} className="create-first">
        <h2>Create Your First Safe</h2>
        <p>
          Enter the amount of income into your safe so that your expenses are
          under control
        </p>
        <img
          style={{ height: 200, marginLeft: 150, marginRight: 150 }}
          src={SafeIlustration}
          alt="illus"
        />
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
          }}  onClick={() => navigation.next()}>
          Create New Safe
        </button>
      </div>
      </Modal>
    </div>
  );
};

export default Opening;
