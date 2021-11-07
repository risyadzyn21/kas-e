import React, { useState, useEffect } from "react";
import SafeIlustration from "../../../assets/ilustrastion/safe-ilustration.png";
import { getSafe } from "../../../services";
import { Modal, Button } from "antd";
import "./Opening.scss";

import { useDispatch } from "react-redux";

const Opening = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const token = localStorage.getItem("token");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();
  const [safes, setSafes] = useState([])

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  console.log(isModalVisible);
  useEffect(() => {
    getSafe(token)
      .then((res) => {
        setSafes(res?.data)

        if (res.data && res.data.length) {
          setIsModalVisible(false);
        } else {
          setIsModalVisible(true);
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  
  return (
    <div>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
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
          <div className="open-modal-btn">
            <Button
              htmlType="submit"
              block
              size="large"
              onClick={() => navigation.next()}>
              Create New Safe
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Opening;
