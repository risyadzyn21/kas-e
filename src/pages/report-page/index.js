import { Layout } from 'antd';
import './ReportPage.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import HeaderTimeDaily from '../../components/header/HeaderTimeDaily'
import EmptyPage from '../../components/empty-page/EmptyPage';
import DailyChart from '../../components/charts/DailyChart'
import SafeCard from '../../components/cards/safe-card/SafeCard';

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
            <div className='page-title-wrapper'>
              <h2 className='page-title'>Report</h2>
              <SafeCard />
            </div>
            <DailyChart />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default ReportPage

// style={{ background: 'none' }}
