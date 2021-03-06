import { useEffect, forwardRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./Print.scss";
import SafeIcon from "../../assets/icons/brangkas.svg";
import NumberFormat from "react-number-format";
import * as AiIcons from 'react-icons/ai'
import Loading from '../loading/Loading'
import {
  getReportDailyExpenseAsync,
  getReportDailyIncomeAsync,
  getReportMonthlyExpenseAsync,
  getReportMonthlyIncomeAsync,
  getSafesAsc2
} from "../../redux/actions";
import { format } from "date-fns";

const PrintPage = forwardRef((props, ref) => {
  const token = localStorage.getItem('token')
  const dispatch = useDispatch()

  const { tabVariant, reportsExpense, reportsIncome, isLoading } = useSelector(
    (state) => state.GetReportReducer
  );

  const totalInc = reportsIncome.reduce((prev, curr) => {
    return prev + (curr.expense)
  }, 0)

  const totalExp = reportsExpense.reduce((prev, curr) => {
    return prev + (curr.expense)
  }, 0)

  const totalIncomeEnd = reportsIncome.map((income) => {
    return income.Safe.openingBalance + totalInc
  })


  const totalEndingBalance = parseInt(totalIncomeEnd) - totalExp

  useEffect(() => {
    if (tabVariant === 'day') {
      dispatch(getReportDailyExpenseAsync(format(new Date(), 'yyyy-MM-dd')))
      dispatch(getReportDailyIncomeAsync(format(new Date(), 'yyyy-MM-dd')))
      // dispatch(getReportDailyExpenseAsync(format(subDays(new Date(), 1), 'yyyy-MM-dd')))
      // dispatch(getReportDailyIncomeAsync(format(subDays(new Date(), 1), 'yyyy-MM-dd')))
    } else {
      dispatch(getReportMonthlyExpenseAsync(format(new Date(), 'yyyy-MM-dd')))
      dispatch(getReportMonthlyIncomeAsync(format(new Date(), 'yyyy-MM-dd')))
    }
  }, [tabVariant])


  // const safes = useSelector(
  //   (state) => state.GetSafeReducer.safes.map(safe => ({ ...safe, createdAt: new Date(safe.createdAt) }))
  //     .filter(safe => isThisMonth(safe.createdAt))
  // );


  useEffect(() => {
    dispatch(getSafesAsc2(token))
  }, [])

  const netIncome = totalInc - totalExp

  return (
    <>
      {isLoading ? (<Loading />) : ''}
      <div className='print-report-detail' ref={ref}>
        <div className='print-card-container-result'>
          <div className='print-card-content'>
            <div className='time-range-wrapper'>
              <div className='time-range-title'>
                Time Range
              </div>
              <div className='time-range-content'>
                {tabVariant === 'day' ? (<div>Daily</div>) : (<div>Monthly</div>)}
                {tabVariant === 'day' ? (<div>{format(new Date(), 'dd LLLL yyyy')}</div>)
                  : (<div>{format(new Date(), 'LLLL yyyy')}</div>)}

              </div>
              <div><hr /></div>
            </div>

            {/* Income */}
            <div className='income-wrapper'>
              <div className='section-title'>
                <div>Income</div>

                <NumberFormat
                  value={reportsIncome.reduce((prev, curr) => {
                    return prev + (curr.expense)
                  }, 0)}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="Rp"
                />

              </div>
              <div><hr /></div>
              <div className='income-content'>
                <div className='income-title-value'>
                  <img src={SafeIcon} alt='Safe Name' />
                  <div>To {reportsIncome[0]?.Safe?.safeName}</div>
                </div>

                <NumberFormat
                  value={reportsIncome.reduce((prev, curr) => {
                    return prev + (curr.expense)
                  }, 0)}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="Rp"
                />

              </div>
            </div>

            {/* Expense */}
            <div className='expense-wrapper'>
              <div className='section-title'>
                <div>Expense</div>
                <NumberFormat
                  value={reportsExpense.reduce((prev, curr) => {
                    return prev + (curr.expense)
                  }, 0)}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="Rp"
                />
              </div>
              <div><hr /></div>
              <div className='expense-content'>
                {reportsExpense.map((transaction) => {
                  return transaction.type === 'expense' ? (
                    <div className='expense-content-wrapper'>
                      <img src={transaction.Categories.image_url} alt='Safe Name' />
                      <div className='expense-content-value'>
                        <div className='expense-title-value'>
                          <div style={{ fontWeight: 'bold' }}>{transaction.Categories.categoryName}</div>
                          <div>{transaction.detailExpense}</div>
                        </div>
                        <div>
                          <NumberFormat
                            value={transaction.expense}
                            displayType="text"
                            thousandSeparator="."
                            decimalSeparator=","
                            prefix="Rp"
                          />
                        </div>
                      </div>
                    </div>
                  ) : ''
                })}
              </div>
            </div>

            {/* Net Income */}
            <div className='net-income-wrapper'>
              <div className='section-title'>
                <div>Net Income</div>
                <NumberFormat
                  value={netIncome}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="Rp"
                />
              </div>
              <div><hr /></div>
              <div className='net-income-content-income'>
                <div className='net-income-title-value'>
                  Income
                </div>
                <NumberFormat
                  value={reportsIncome.reduce((prev, curr) => {
                    return prev + (curr.expense)
                  }, 0)}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="Rp"
                />
              </div>
              <div className='net-income-content-expense'>
                <div className='net-income-title-value'>
                  Expense
                </div>
                <NumberFormat
                  value={reportsExpense.reduce((prev, curr) => {
                    return prev + (curr.expense)
                  }, 0)}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="Rp"
                />
              </div>
              <div className='indicator-wrapper'>
                <div className='minus-indicator'>
                  <AiIcons.AiOutlineMinus />
                </div>
                <div className='line-indicator'></div>
              </div>
              <div className='minus-result'>
                <div>Net Income</div>
                <NumberFormat
                  value={netIncome}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="Rp"
                />
              </div>

            </div>

            {/* Ending Balance */}
            <div className='ending-balance-wrapper'>
              <div className='section-title'>
                <div>Ending Balance</div>
                <NumberFormat
                  value={totalEndingBalance}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="Rp"
                />
              </div>
              <div><hr /></div>
              <div className='ending-balance-content-op'>
                <div className='ending-balance-title-value'>
                  Opening Balance
                </div>

                <NumberFormat
                  value={reportsIncome[0]?.Safe?.openingBalance}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="Rp"
                />
              </div>
              <div className='ending-balance-content-income'>
                <div className='ending-balance-title-value'>
                  Income
                </div>
                <NumberFormat
                  value={reportsIncome.reduce((prev, curr) => {
                    return prev + (curr.expense)
                  }, 0)}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="Rp"
                />
              </div>
              <div className='indicator-wrapper'>
                <div className='minus-indicator'>
                  <AiIcons.AiOutlinePlus />
                </div>
                <div className='line-indicator'></div>
              </div>
              <div className='net-income-content-expense'>
                <div className='net-income-title-value'>
                  Total Income
                </div>
                <NumberFormat
                  value={parseInt(totalIncomeEnd)}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="Rp"
                />
              </div>
              <div className='net-income-content-expense'>
                <div className='net-income-title-value'>
                  Expense
                </div>
                <NumberFormat
                  value={reportsExpense.reduce((prev, curr) => {
                    return prev + (curr.expense)
                  }, 0)}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="Rp"
                />
              </div>
              <div className='indicator-wrapper'>
                <div className='minus-indicator'>
                  <AiIcons.AiOutlineMinus />
                </div>
                <div className='line-indicator'></div>
              </div>
              <div className='minus-result'>
                <div>Ending Balance</div>
                <NumberFormat
                  value={totalEndingBalance}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="Rp"
                />
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
});

export default PrintPage