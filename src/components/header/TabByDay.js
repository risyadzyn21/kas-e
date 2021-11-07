import { Tabs } from 'antd';

const TabByDay = ({ callback }) => {
  const { TabPane } = Tabs;
  return (
    <Tabs defaultActiveKey="today" onChange={callback} className="site-page-tab">
      <TabPane tab="Yesterday" key="yesterday" />

      <TabPane tab="Today" key="today" />

      <TabPane tab="Tomorrow" key="tomorrow" />
    </Tabs>
  )
}

export default TabByDay