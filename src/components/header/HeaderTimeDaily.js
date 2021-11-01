import { PageHeader, Tabs, Dropdown, Menu } from 'antd';
import './HeaderTime.scss'
import KasESmall from '../../assets/logo/Rectangle-9-1.png'
import KasELetterSmall from '../../assets/logo/Kas-E-1.png'
import EmptyPage from '../empty-page/EmptyPage';
import * as IoIcons from 'react-icons/io'

function HeaderTimeDaily() {
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  const menu = (
    <Menu className='notification-dropdown-content'>
      hahahahaha
      <Menu.Divider />
    </Menu>
  );

  return (
    <>
      <div className='header-wrapper'>
        <PageHeader
          className="site-page-header"
          title={<img src={KasESmall} alt='Kas-E' />}
          subTitle={<img src={KasELetterSmall} alt='Kas-E' />}>
          <Dropdown overlay={menu} trigger={['click']} className='notification-dropdown' placement="bottomRight" >
            <a className="ant-dropdown-notification" onClick={e => e.preventDefault()}>
              <IoIcons.IoMdNotifications />
            </a>
          </Dropdown>
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
