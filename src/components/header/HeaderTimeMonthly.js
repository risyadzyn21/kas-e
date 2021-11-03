import { PageHeader, Tabs, Menu, Dropdown } from 'antd';
import './HeaderTime.scss'
import KasESmall from '../../assets/logo/Rectangle-9-1.png'
import KasELetterSmall from '../../assets/logo/Kas-E-1.png'
import EmptyPage from '../empty-page/EmptyPage';
import * as IoIcons from 'react-icons/io'
import { useDispatch } from 'react-redux';
import { filterTransactions } from '../../redux/actions';

function HeaderTimeMonthly() {
  const dispatch = useDispatch()
  const { TabPane } = Tabs;

  function callback(key) {
    dispatch(filterTransactions(key))
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

      <Tabs defaultActiveKey="thisMonth" onChange={callback} className="site-page-tab">
        <TabPane tab="Last Month" key="lastMonth">

        </TabPane>
        <TabPane tab="This Month" key="thisMonth">

        </TabPane>
        <TabPane tab="Next Month" key="nextMonth">

        </TabPane>
      </Tabs>
    </>
  )
}

export default HeaderTimeMonthly
