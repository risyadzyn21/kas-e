import { PageHeader, Tabs } from 'antd';
import './HeaderTime.scss'
import KasESmall from '../../assets/logo/Rectangle-9-1.png'
import KasELetterSmall from '../../assets/logo/Kas-E-1.png'
import EmptyPage from '../empty-page/EmptyPage';

function HeaderTimeDaily() {
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }
  return (
    <>
      <div className='header-wrapper'>
        <PageHeader
          className="site-page-header"
          title={<img src={KasESmall} />}
          subTitle={<img src={KasELetterSmall} />}>
        </PageHeader>

        <Tabs defaultActiveKey="2" onChange={callback} className="site-page-tab">
          <TabPane tab="Yesterday" key="1">

          </TabPane>
          <TabPane tab="Today" key="2">

          </TabPane>
          <TabPane tab="Tomorrow" key="3">

          </TabPane>
        </Tabs>
      </div>
    </>
  );
}

export default HeaderTimeDaily
