import "./MyProfile.scss";
import React from "react";
import { Button, Layout, PageHeader } from "antd";
import { Link } from "react-router-dom";

import Sidebar from "../../components/sidebar/Sidebar";
import ProfileCard from "../../components/cards/profile-card/ProfileCard";
import { useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";

function MyProfile() {
  const userData = useSelector(
    (state) => state.profileReducer.profileData.data
  );
  const { Sider, Content } = Layout;
  return (
    <>
      {userData ? null : <Loading />}
      <Layout>
        <Sider theme="light" width={326} className="sidebar">
          <Sidebar />
        </Sider>
        <Layout className="main-layout">
          <PageHeader title="My Profile" />
          <Content>
            <div className="container">
              <ProfileCard userData={userData} />
              <div className="button-profile">
                <Button type="primary">
                  <Link to="edit-profile">Edit</Link>
                </Button>
                <Button type="danger">
                  <Link to="/" onClick={() => localStorage.clear()}>
                    Logout
                  </Link>
                </Button>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default MyProfile;
