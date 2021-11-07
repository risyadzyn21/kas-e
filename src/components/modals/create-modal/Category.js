import React, { useState, useEffect } from "react";
import { Modal, Form, Input, Button, Checkbox } from "antd";
import {  getCategory, getSafe } from "../../../services/index";
import "./Category.scss";
import "antd/dist/antd.css";
import Fun from "../../../assets/icons/FunAndRelax.png";
import BillPay from "../../../assets/icons/bill-payment.png";
import DailyNeed from "../../../assets/icons/daily-need.png";
import UrgentNeed from "../../../assets/icons/urgent-need.png";
import { useDispatch, useSelector } from "react-redux";
import { limitFirstAsync } from "../../../redux/actions";

const Category = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const token = localStorage.getItem("token");
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const limitsFirst = useSelector(state => state.LimitFirstReducer)
  const [safes, setSafes] = useState([])

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };
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

  useEffect(() => {
    getCategory()
      .then((res) => {
        setCategories(res?.data?.data)

      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  

const item = [{
  "category_id": 1,
  "limit": 500000
},
{
  "category_id": 2,
  "limit": 400000
},
{
  "category_id": 3,
  "limit": 300000
},
{
  "category_id": 4,
  "limit": 100000
}]

  const onFinish = (values) => {
    console.log("Success:", values);
   const params = Object.keys(values).map(item => ({ category_id: item, limit: values[item]}))
    dispatch(limitFirstAsync(params))
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
            <h2 style={{ fontWeight: "bold" }}>Set your spending limit</h2>
            <p>
              Make your spending more controlled, by setting your spending limit
            </p>
          </div>
        </div>
        <div className="category-container">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="fun-relax">
              <div
                style={{ display: "flex", margin: 10, gap: 15 }}
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
              </div>
              {/* {categories?.map((category) = > {
                return (
                  <div key={category.id}className="category-limit-first">
                )
              })} */}
              <Form.Item
                name="1"
                rules={[
                  {
                    required: true,
                    pattern: new RegExp(/^[0-9]+$/),
                    message: "Please set your new limit!",
                  },
                ]}
              >
                <Input
                  style={{ marginLeft: 45 }}
                  size="large"
                  prefix="Rp"
                  type="number"
                  min="0"
                />
              </Form.Item>
            </div>
            <div className="bill-pay">
              <div
                style={{ display: "flex", margin: 10, gap: 15 }}
                className="bill"
              >
                <img src={BillPay} alt="bill" />
                <h4 style={{ fontWeight: "bold" }}>Bill and Payment</h4>
              </div>
              <div
                style={{ marginLeft: 50, marginRight: 50 }}
                className="bill-text"
              >
                <p style={{ fontSize: 12 }}>
                  Your rent bills, insurance, payments for electricity, water,
                  gas and other arrears
                </p>
              </div>
              <Form.Item
                name="2"
                rules={[
                  {
                    required: true,
                    pattern: new RegExp(/^[0-9]+$/),
                    message: "Please set your new limit!",
                  },
                ]}
              >
                <Input
                  style={{ marginLeft: 45 }}
                  size="large"
                  prefix="Rp"
                  type="number"
                  min="0"
                />
              </Form.Item>
            </div>
            <div className="daily-needs">
              <div
                style={{ display: "flex", margin: 10, gap: 15 }}
                className="daily"
              >
                <img src={DailyNeed} alt="daily" />
                <h4 style={{ fontWeight: "bold" }}>Daily Needs</h4>
              </div>
              <div
                style={{ marginLeft: 50, marginRight: 50 }}
                className="daily-text"
              >
                <p style={{ fontSize: 12 }}>
                  This category is for your daily needs, such as toiletries,
                  household and others
                </p>
              </div>
              <Form.Item
                name="3"
                rules={[
                  {
                    required: true,
                    pattern: new RegExp(/^[0-9]+$/),
                    message: "Please set your new limit!",
                  },
                ]}
              >
                <Input
                  style={{ marginLeft: 45 }}
                  size="large"
                  prefix="Rp"
                  type="number"
                  min="0"
                />
              </Form.Item>
            </div>
            <div className="urgent-needs">
              <div
                style={{ display: "flex", margin: 10, gap: 15 }}
                className="urgent"
              >
                <img src={UrgentNeed} alt="urgent" />
                <h4 style={{ fontWeight: "bold" }}>Urgent Needs</h4>
              </div>
              <div
                style={{ marginLeft: 50, marginRight: 50 }}
                className="urgent-text"
              >
                <p style={{ fontSize: 12 }}>
                  This category is intended for funds in case of an emergency
                </p>
              </div>
              <Form.Item
                name="4"
                rules={[
                  {
                    required: true,
                    pattern: new RegExp(/^[0-9]+$/),
                    message: "Please set your new limit!",
                  },
                ]}
              >
                <Input
                  style={{ marginLeft: 45 }}
                  size="large"
                  prefix="Rp"
                  type="number"
                  min="0"
                />
              </Form.Item>
              {/* </div> */}
            </div>
            <div className="category-modal-btn">
              <Button htmlType="submit" block size="large" onClick={closeModal}>
                Create
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default Category;
