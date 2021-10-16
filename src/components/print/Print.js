import React from "react";
import { Layout } from "antd";
import "./Print.scss";
import { AiOutlineLeft } from "react-icons/ai";

const Print = () => {
  const { Header, Content, Footer, Sider } = Layout;

  return (
    <Layout>
      <Header
        className="site-layout-sub-header-background"
        style={{
          padding: 0,
          marginTop: 30,
          background: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="sub-header">
          <a
            style={{ color: "black", marginLeft: 100, marginTop: 30 }}
            href="#"
            class="previous"
          >
            <AiOutlineLeft />
          </a>
          <span style={{ marginLeft: 15 }}>Report Detail</span>
        </div>
        <div style={{ paddingRight: 80, marginTop: 10 }} className="print-btn">
          <button style={{ width: 150, height: 50}}>Print</button>
        </div>
      </Header>
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <div style={{ paddingLeft: 20 }} className="report-detail">
            <div style={{ marginBottom: 20 }} className="report-list">
              Time Range
            </div>
            <div className="report-list">
              Daily <span style={{ marginLeft: 350 }}>31 agustus 2021</span>
              <hr></hr>
            </div>
            <div className="report-list">
              Income <span style={{ marginLeft: 350 }}>Rp. 1.000.000</span>
              <hr></hr>
              <p>
                To Jalan-jalan{" "}
                <span style={{ marginLeft: 320 }}>Rp. 500.000</span>
              </p>
            </div>
            <div style={{ marginTop: 40 }} className="report-list">
              Expense
              <hr></hr>
              <p>
                Bill and Payments{" "}
                <span style={{ marginLeft: 290 }}>Rp. 500.000</span>
              </p>
              <p>
                Bill and Payments{" "}
                <span style={{ marginLeft: 290 }}>Rp. 500.000</span>
              </p>
              <p>
                Bill and Payments{" "}
                <span style={{ marginLeft: 290 }}>Rp. 500.000</span>
              </p>
            </div>
            <div style={{ marginTop: 40 }} className="report-list">
              Net Income
              <hr style={{ color: "red" }}></hr>
              <p>
                Income <span style={{ marginLeft: 365 }}>Rp. 500.000</span>
              </p>
              <p>
                Expense <span style={{ marginLeft: 360 }}>Rp. 500.000</span>
              </p>
              <p>
                Net Income <span style={{ marginLeft: 340 }}>Rp. 500.000</span>
              </p>
            </div>
            <div style={{ marginTop: 40 }} className="report-list">
              Ending Balance
              <hr></hr>
              <p>
                Opening Balance{" "}
                <span style={{ marginLeft: 300 }}>Rp. 500.000</span>
              </p>
              <p>
                Income <span style={{ marginLeft: 370 }}>Rp. 500.000</span>
              </p>
              <p>
                Total Income{" "}
                <span style={{ marginLeft: 330 }}>Rp. 500.000</span>
              </p>
              <p>
                Expense <span style={{ marginLeft: 360 }}>Rp. 500.000</span>
              </p>
              <p>
                Ending Balance{" "}
                <span style={{ marginLeft: 310, paddingBottom: 200 }}>
                  Rp. 500.000
                </span>
              </p>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Print;
