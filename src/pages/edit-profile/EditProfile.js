import "./EditProfile.scss";
import React from "react";
import { Button, Card, Layout, PageHeader, Form } from "antd";
import Sidebar from "../../components/sidebar/Sidebar";
import { Content } from "antd/lib/layout/layout";
import arrowLeft from "../../assets/icons/arrow-left.png";
import AvatarIcon from "../../components/avatar/AvatarIcon";
import EditProfileForm from "../../components/forms/EditProfileForm";

function EditProfile() {
  const { Sider, Content } = Layout;

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
          backIcon={<img src={arrowLeft} alt="Back" />}
        />
        <Content>
          <div className="container">
            <div className="main-edit">
              <AvatarIcon />
              <Card>
                <EditProfileForm
                  form={form}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
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
