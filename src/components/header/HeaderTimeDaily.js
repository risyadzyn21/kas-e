import { PageHeader, Tabs, Dropdown, Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import './HeaderTime.scss'
import KasESmall from '../../assets/logo/Rectangle-9-1.png'
import KasELetterSmall from '../../assets/logo/Kas-E-1.png'
import EmptyPage from '../empty-page/EmptyPage';
import * as IoIcons from 'react-icons/io'
import TransactionCard from '../cards/transaction-card/TransactionCard';
import SafeCard from '../cards/safe-card/SafeCard';
import { filterTransactions, filterReportsDailyExpense } from '../../redux/actions';
import GetTransactionReducer from '../../redux/reducers/GetTransactionReducer';
import TabByDay from './TabByDay';
import TabByMonth from './TabByMonth';

function HeaderTimeDaily() {
  const dispatch = useDispatch()
  const { TabPane } = Tabs;

  const variant = useSelector(state => state.GetTransactionReducer)


  function callback(key) {
    dispatch(filterTransactions(key))
    dispatch(filterReportsDailyExpense(key))
    console.log(key);
  }

  const menu = (
    <Menu className='notification-dropdown-content'>
      hahahahaha
      <Menu.Divider />
    </Menu>
  );
  console.log(variant)
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


        {/* <Tabs defaultActiveKey="today" onChange={callback} className="site-page-tab"> */}
        {variant.tabVariant === 'day' ? <TabByDay callback={callback} /> : <TabByMonth callback={callback} />}
        {/* <TabByDay /> */}
        {/* </Tabs> */}
      </div>
    </>
  );
}

export default HeaderTimeDaily





