import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import { getSafe } from "../../../services/index";
import "./CreateAcc.scss";
import Card from "../../../assets/icons/card-logo.png";


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
          style={{ display: "grid", textAlign: "center" }}
          className="create-form"
        >
          <h2>Create Your First Safe</h2>
          <p>
            Enter the amount of income into your safe so that your expenses are
            under control
          </p>
          <img
            style={{ background:"#003F88", marginLeft: 200, marginRight: 200 }}
            src={Card}
            alt="illus"
          />
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
                  background: "grey",
                  border: "none",
                  color: "white",
                  borderRadius: 5,
                  marginTop: 20,
                  marginBottom: 20,
                  width: 300,
                  marginLeft: 50,
                  marginRight: 50,
                  cursor: 'pointer',
                }}
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
