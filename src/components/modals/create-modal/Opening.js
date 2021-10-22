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
      <div className="create-first">
        <h2>Create Your First Safe</h2>
        <p>
        KAS-E help you to keep in track the money you are spending from safe
        </p>
        <img
          style={{ height: 200, marginLeft: 150, marginRight: 150 }}
          src={SafeIlustration}
          alt="illus"
        />
        <button
          onClick={() => navigation.next()}>
          Create New Safe
        </button>
      </div>
      </Modal>
    </div>
  );
};

export default Opening;
