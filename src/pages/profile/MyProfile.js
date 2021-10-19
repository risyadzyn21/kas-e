import "./MyProfile.scss";
import React from "react";
import { Button, Layout, PageHeader } from "antd";
import Sidebar from "../../components/sidebar/Sidebar";
import ProfileCard from "../../components/cards/profile-card/ProfileCard";

function MyProfile() {
  const { Sider, Content } = Layout;
  return (
    <Layout>
      <Sider theme="light" width={326} className="sidebar">
        <Sidebar />
      </Sider>
      <Layout className="main-layout">
        <PageHeader title="My Profile" />
        <Content>
          <div className="container">
            <ProfileCard />
            <div className="button-profile">
              <Button type="primary">Edit</Button>
              <Button type="danger">Logout</Button>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default MyProfile;
