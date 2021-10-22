import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import { getSafe } from "../../../services/index";
import "./CreateAcc.scss";
import SafeIcon from "../../../assets/icons/brangkas.png";


const CreateAcc = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [safe, setSafe] = useState([]);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
        <div
          className="create-form"
        >
          <h2>Create Your First Safe</h2>
          <p>
            Enter the amount of income into your safe so that your expenses are
            under control
          </p>
          <img
            src={SafeIcon}
            alt="illus"
          />
          <form style={{ marginTop: 20}}>
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
              <input type="text" className="text-input" placeholder="IDR. 00(Your Income)" />
            </div>
            <div className="create-second">
              <button
                type="submit"
                className="submit-btn"
                onClick={() => navigation.next()}
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CreateAcc;
