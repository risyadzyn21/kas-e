import { Layout } from 'antd';
import Sidebar from '../../components/sidebar/Sidebar'
import HeaderTimeDaily from '../../components/header/HeaderTimeDaily'

function ReportPage() {
  const { Header, Sider, Content } = Layout;

  return (
    <>
      <Layout>
        <Sider theme="light" width={326} className="sidebar">
          <Sidebar />
        </Sider>

        <Layout>
          <HeaderTimeDaily />
          <Content style={{ padding: 40 }} >
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default ReportPage

// style={{ background: 'none' }}
