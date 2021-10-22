import React from "react";
import Print from "../../components/print/Print";
import { Layout, PageHeader } from "antd";
import { Link } from "react-router-dom";

import Sidebar from "../../components/sidebar/Sidebar";

import './ReportDetail.scss';
import ArrowLeft from "../../assets/icons/arrow-left.png";

const ReportDetail = () => {
  const { Header, Sider, Content } = Layout;

  return (
    <div>
      <Layout>
        <Sider theme="light" width={326} className="sidebar">
          <Sidebar />
        </Sider>
        <Layout>
          <PageHeader>
            <div
              style={{ display: "flex", justifyContent: "space-between"}}
              className="header-report"
            >
              <div className="header-detail">
                <Link to="/report-page">
              <img src={ArrowLeft} alt="back" />
              </Link>
              <h2 style={{ fontWeight: "bold" }}>Report Detail</h2>
              </div>
              <div className="print-btn">
              <button>
                Print
              </button>
            </div>
            </div>
          </PageHeader>
          <Content>
            <Print />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default ReportDetail;
