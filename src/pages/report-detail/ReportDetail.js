import React from "react";
import ReportDetailMonth from "../../components/print/ReportDetailMonth";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import './ReportDetail.scss';
import HeaderReportDetail from "../../components/header/HeaderReportDetail";

const ReportDetail = () => {

  const { Sider, Content } = Layout;

  return (
    <div>
      <Layout>
        <Sider theme="light" width={326} className="sidebar">
          <Sidebar />
        </Sider>

        <Layout>
          <HeaderReportDetail />

          <Content className="container-report-detail-page">
            <ReportDetailMonth />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default ReportDetail;
