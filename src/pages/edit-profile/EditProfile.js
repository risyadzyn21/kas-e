import "./EditProfile.scss";
import { useState } from "react";
import { Button, Card, Layout, PageHeader, Form, Modal } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";

import Sidebar from "../../components/sidebar/Sidebar";
import arrowLeft from "../../assets/icons/arrow-left.png";
import AvatarIcon from "../../components/avatar/AvatarIcon";
import EditProfileForm from "../../components/forms/EditProfileForm";
import Loading from "../../components/loading/Loading";
import { getProfileAsync } from "../../redux/actions/profileAction";

function EditProfile() {
  const { Sider, Content } = Layout;
  const [form] = Form.useForm();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const userData = useSelector(
    (state) => state.profileReducer.profileData.data
  );

  const onFinish = () => {
    const fullName = form.getFieldValue("fullName");
    const email = form.getFieldValue("email");
    const gender = form.getFieldValue("gender");
    const age = form.getFieldValue("age");
    const password = form.getFieldValue("password");

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("gender", gender);
    formData.append("age", age);
    formData.append("password", password);

    setLoading(true);

    axios({
      method: "PUT",
      url: "https://kas-e.herokuapp.com/api/v1/profile/edit",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((res) => {
        // console.log(res.data);
        setMessage(res.data.message);
        dispatch(getProfileAsync(token));
        setLoading(false);
        setIsModalVisible(true);
      })
      .catch((error) => {
        // console.log(error);
        setMessage(error.message);
        setLoading(false);
        setIsModalVisible(true);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {loading === true ? <Loading /> : userData ? null : <Loading />}
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        closable={false}
      >
        <div className="modal-edit">
          <h2>{message}</h2>
          <Button
            type="primary"
            onClick={(e) => {
              e.preventDefault();
              handleCancel();
            }}
          >
            Ok
          </Button>
        </div>
      </Modal>
      <Layout>
        <Sider theme="light" width={326} className="sidebar">
          <Sidebar />
        </Sider>
        <Layout className="main-layout">
          <PageHeader
            className="site-page-header"
            onBack={() => null}
            title="Edit Profile"
            backIcon={
              <Link to="my-profile">
                <img src={arrowLeft} alt="Back" />
              </Link>
            }
          />
          <Content>
            <div className="container">
              <div className="main-edit">
                <AvatarIcon name={userData ? userData.fullName : null} />
                <Card>
                  <EditProfileForm
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    userData={userData}
                    loading={loading}
                  />
                </Card>
              </div>
              <div className="button-profile">
                <Button type="primary" onClick={() => form.submit()}>
                  Save
                </Button>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default EditProfile;
