import { PageHeader, Tabs } from 'antd';
import './HeaderTime.scss'
import KasESmall from '../../assets/logo/Rectangle-9-1.png'
import KasELetterSmall from '../../assets/logo/Kas-E-1.png'

function HeaderTime() {
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
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </PageHeader>

    </>
  )
}

export default HeaderTime
