import "./MyProfile.scss";
import React from "react";
import { Button, Layout, PageHeader } from "antd";
import Sidebar from "../../components/sidebar/Sidebar";
import ProfileCard from "../../components/cards/profile-card/ProfileCard";

function MyProfile() {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Sidebar />
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
