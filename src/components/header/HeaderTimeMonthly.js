import { PageHeader, Tabs } from 'antd';
import './HeaderTime.scss'
import KasESmall from '../../assets/logo/Rectangle-9-1.png'
import KasELetterSmall from '../../assets/logo/Kas-E-1.png'
import EmptyPage from '../empty-page/EmptyPage';

function HeaderTimeMonthly() {
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }
  return (
    <>
      <PageHeader
        className="site-page-header"
        title={<img src={KasESmall} />}
        subTitle={<img src={KasELetterSmall} />}>
      </PageHeader>

      <Tabs defaultActiveKey="2" onChange={callback} className="site-page-tab">
        <TabPane tab="Last Month" key="1">
          <EmptyPage />
        </TabPane>
        <TabPane tab="This Month" key="2">
          <EmptyPage />
        </TabPane>
        <TabPane tab="Next Month" key="3">
          <EmptyPage />
        </TabPane>
      </Tabs>
    </>
  )
}

export default HeaderTimeMonthly
