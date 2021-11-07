import { PageHeader, Tabs, Dropdown, Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import './HeaderTime.scss'
import KasESmall from '../../assets/logo/Rectangle-9-1.png'
import KasELetterSmall from '../../assets/logo/Kas-E-1.png'
import EmptyPage from '../empty-page/EmptyPage';
import * as IoIcons from 'react-icons/io'
import { getReportDailyExpenseAsync, getReportDailyIncomeAsync, getReportMonthlyExpenseAsync, getReportMonthlyIncomeAsync } from '../../redux/actions';
import { subDays, format, addDays, subMonths, addMonths, endOfMonth } from 'date-fns';
import TabByDay from './TabByDay';
import TabByMonth from './TabByMonth';

function HeaderTimeMonthly() {
  const dispatch = useDispatch()
  const { TabPane } = Tabs;

  const variant = useSelector(state => state.GetTransactionReducer)


  function callback(key) {
    switch (key) {
      case 'today':
        dispatch(getReportDailyExpenseAsync(format(new Date(), 'yyyy-MM-dd')))
        dispatch(getReportDailyIncomeAsync(format(new Date(), 'yyyy-MM-dd')))
        break;
      case 'yesterday':
        dispatch(getReportDailyExpenseAsync(format(subDays(new Date(), 1), 'yyyy-MM-dd')))
        dispatch(getReportDailyIncomeAsync(format(subDays(new Date(), 1), 'yyyy-MM-dd')))
        break;
      case 'tomorrow':
        dispatch(getReportDailyExpenseAsync(format(addDays(new Date(), 1), 'yyyy-MM-dd')))
        dispatch(getReportDailyIncomeAsync(format(addDays(new Date(), 1), 'yyyy-MM-dd')))
        break;
      case 'thisMonth':
        dispatch(getReportMonthlyExpenseAsync(format(new Date(), 'yyyy-MM-dd')))
        dispatch(getReportMonthlyIncomeAsync(format(new Date(), 'yyyy-MM-dd')))
        break;
      case 'lastMonth':
        dispatch(getReportMonthlyExpenseAsync(format(endOfMonth(subMonths(new Date(), 1)), 'yyyy-MM-dd')))
        dispatch(getReportMonthlyIncomeAsync(format(endOfMonth(subMonths(new Date(), 1)), 'yyyy-MM-dd')))
        break;
      case 'nextMonth':
        dispatch(getReportMonthlyExpenseAsync(format(endOfMonth(addMonths(new Date(), 1)), 'yyyy-MM-dd')))
        dispatch(getReportMonthlyIncomeAsync(format(endOfMonth(addMonths(new Date(), 1)), 'yyyy-MM-dd')))
        break;
      default:
        break;
    }
    // dispatch(filterTransactions(key))
    // dispatch(filterReportsDailyExpense(key))
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

        {variant.tabVariant === 'day' ? <TabByDay callback={callback} /> : <TabByMonth callback={callback} />}
      </div>
    </>
  );
}

export default HeaderTimeMonthly
