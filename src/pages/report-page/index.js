import { Layout } from 'antd';
import Sidebar from '../../components/sidebar/Sidebar'
import HeaderTimeDaily from '../../components/header/HeaderTimeDaily'

function ReportPage() {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <>
      <Layout>
        <Sider><Sidebar /></Sider>
        <Layout>
          <Header><HeaderTimeDaily /></Header>
          <Content>Content</Content>

        </Layout>
      </Layout>

    </>
  )
}

export default ReportPage
