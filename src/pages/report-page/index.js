import { Layout } from 'antd';
import Sidebar from '../../components/sidebar/Sidebar'
import HeaderTimeDaily from '../../components/header/HeaderTimeDaily'
import EmptyPage from '../../components/empty-page/EmptyPage';
import DailyChart from '../../components/charts/DailyChart'

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
            <h2 className='page-title'>Report</h2>
            <DailyChart />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default ReportPage

// style={{ background: 'none' }}
