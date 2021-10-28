import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import { getCreateAcc, getSafe } from "../../../services/index";
import { setcreateSafe } from "../../../redux/actions/CreateSafeAction";
import "./CreateAcc.scss";
import SafeIcon from "../../../assets/icons/brangkas.png";
import { useDispatch, useSelector } from "react-redux";

const CreateAcc = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const createAccount = useSelector((state) => state.dataSafe)
  const [safeName, setsafeName] = useState('')
  const [amount, setAmount] = useState('')
  const token = localStorage.getItem('token')
  const [ status, setStatus] = useState('')
const handleChange = (e) => {
  setsafeName(e.target.value)
  
 }

 const handleClick = (e) => {
  setAmount(e.target.value)
 }

 const handleSubmit = (e) => {
  e.preventDefault()
  navigation.next()
  getCreateAcc( safeName, amount, token )
  .then((res) => {
    console.log(res)
  })
  .catch((error) => {
    console.log(error)
  })
 }

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    getSafe(token)
    .then((res) => {
      setStatus(res.success)
      console.log(res.success)
    })

    })

    useEffect(() => {
      if(status === "This is the list of safes") {
        return setIsModalVisible(false)

      } else {
        return setIsModalVisible(true)
      }
    })
 
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
          <form onSubmit={handleSubmit} style={{ marginTop: 20}}>
            <div className="form">
              <input
                type="text"
                className="text-input"
                placeholder="Safe Name"
                name="safeName"
                value={safeName}
                onChange={handleChange}
              />
            </div>
            <div className="form">
              <input 
                type="text" 
                className="text-input" 
                placeholder="IDR. 00(Your Income)" 
                name="amount"
                value={amount}
                onChange={handleClick}
                />
            </div>
            <div className="create-second">
              <button
                type="submit"
                className="submit-btn"
                onClick={handleSubmit}

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
