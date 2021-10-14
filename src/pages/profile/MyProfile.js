import "./MyProfile.scss";
import React from "react";
import { Button, Layout } from "antd";
import Sidebar from "../../components/sidebar/Sidebar";
import ProfileCard from "../../components/cards/profile-card/ProfileCard";

function MyProfile() {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Sidebar />
      <Layout className="main-layout">
        <Header>
          <h1 className="header-title">My Profile</h1>
        </Header>
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
