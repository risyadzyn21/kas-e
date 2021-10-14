import { PageHeader, Tabs, Layout } from "antd";
import "./HeaderTime.scss";
import KasESmall from "../../assets/logo/Rectangle-9-1.png";
import KasELetterSmall from "../../assets/logo/Kas-E-1.png";
import Sidebar from "../sidebar/Sidebar";

function HeaderTime() {
  const { Header, Footer, Sider, Content } = Layout;
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }
  return (
    <>
      <Layout>
        <PageHeader
          className="site-page-header"
          title={<img src={KasESmall} />}
          subTitle={<img src={KasELetterSmall} />}
        >
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Yesterday" key="1"></TabPane>
            <TabPane tab="Today" key="2"></TabPane>
            <TabPane tab="Tomorrow" key="3"></TabPane>
          </Tabs>
        </PageHeader>

        <Content>
          <div style={{ fontWeight: "bold", fontSize: 20 }}>Transaction</div>
          <div style={{ marginTop: 100 }} className="logo-center">
            <img src={KasESmall} />
          </div>
        </Content>
      </Layout>
    </>
  );
}

export default HeaderTime;
