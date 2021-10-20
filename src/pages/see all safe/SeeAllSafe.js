import React from "react";
import { Layout, PageHeader } from "antd";

import Sidebar from "../../components/sidebar/Sidebar";
import Card from "../../components/cards/Card"
import './SeeAllSafe.scss'

const SeeAllSafe = () => {
  const { Header, Sider, Content } = Layout;
  return (
    <div>
      <Layout>
        <Sider theme="light" width={326} className="sidebar">
          <Sidebar />
        </Sider>
        <Layout>
          <PageHeader title="See All Safe" />
          <Content>
            <Card />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default SeeAllSafe;
