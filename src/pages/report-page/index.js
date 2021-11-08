import { Layout } from 'antd';
import './ReportPage.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import SafeCard from '../../components/cards/safe-card/SafeCard';
import MonthlyChart from '../../components/charts/MonthlyChart';
import HeaderTimeMonthly from '../../components/header/HeaderTimeMonthly';

function ReportPage() {
  const { Sider, Content } = Layout;

  return (
    <>
      <Layout>
        <Sider theme="light" width={326} className="sidebar">
          <Sidebar />
        </Sider>

        <Layout>
          <HeaderTimeMonthly />
          <div className='page-title-wrapper'>
            <div className='page-title'>
              Report
            </div>
            <SafeCard />
          </div>
          <Content >
            {/* <DailyChart /> */}
            <MonthlyChart />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default ReportPage

// style={{ background: 'none' }}
