import { Tabs } from 'antd';

const TabByMonth = ({ callback }) => {
  const { TabPane } = Tabs;
  return (
    <Tabs defaultActiveKey="thisMonth" onChange={callback} className="site-page-tab">
      <TabPane tab="Last Month" />

      <TabPane tab="This Month" key="thisMonth" />

      <TabPane tab="Next Month" />
    </Tabs>
  )
}

export default TabByMonth