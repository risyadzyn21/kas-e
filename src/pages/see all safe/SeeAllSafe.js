import React from "react";
import { Layout, PageHeader } from "antd";
import { Link } from "react-router-dom";

import Sidebar from "../../components/sidebar/Sidebar";
import SeeCard from "../../components/cards/card-see-all/SeeCard";
import './SeeAllSafe.scss'

import ArrowLeft from "../../assets/icons/arrow-left.png";

const SeeAllSafe = () => {
  const { Header, Sider, Content } = Layout;
  return (
    <div>
      <Layout>
        <Sider theme="light" width={326} className="sidebar">
          <Sidebar />
        </Sider>
        <Layout>
          <PageHeader>
            <div className="header-detail">
                <Link to="/my-profile">
              <img src={ArrowLeft} alt="back" />
              </Link>
              <h2 style={{ fontWeight: "bold" }}>See All Safe</h2>
              </div>
            </PageHeader>
          <Content>
            <SeeCard />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default SeeAllSafe;
