import React from "react";
import Print from "../../components/print/Print";
import { Layout, PageHeader } from "antd";
import Sidebar from "../../components/sidebar/Sidebar";

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
            <div style={{ display: "flex", justifyContent: 'space-between'}} className="header-report">
              <h2 style={{ fontWeight: "bold"}}>Report Detail</h2>
              <button style={{ width: 150, background: 'transparent',  border: '1px solid rgb(65, 65, 146)'}}>Print</button>
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
