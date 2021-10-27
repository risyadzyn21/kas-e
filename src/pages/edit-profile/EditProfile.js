import "./EditProfile.scss";
import React, { useEffect, useState } from "react";
import { Button, Card, Layout, PageHeader, Form } from "antd";
import { Link } from "react-router-dom";

import Sidebar from "../../components/sidebar/Sidebar";
import arrowLeft from "../../assets/icons/arrow-left.png";
import AvatarIcon from "../../components/avatar/AvatarIcon";
import EditProfileForm from "../../components/forms/EditProfileForm";
import { profile } from "../../services";

function EditProfile() {
  const { Sider, Content } = Layout;
  const [userData, setUserData] = useState("");

  useEffect(() => {
    profile().then((result) => {
      setUserData(result.data.data);
    });
  }, []);

  const [form] = Form.useForm();

  const onFinish = () => {
    const formData = form.getFieldsValue([
      "fullName",
      "email",
      "gender",
      "age",
      "password",
    ]);
    alert(JSON.stringify(formData, null, 2));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
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
              <AvatarIcon name={userData.fullName} />
              <Card>
                <EditProfileForm
                  form={form}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  userData={userData}
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
  );
}

export default EditProfile;
