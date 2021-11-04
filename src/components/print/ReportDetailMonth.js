import { useState, useEffect, forwardRef } from "react";
import "./Print.scss";
import SafeIcon from "../../assets/icons/brangkas.svg";
import MinusLine from '../../assets/indicators/short-line.svg'
import { getReportMonthly, getSafe, getTransaction } from '../../services';
import NumberFormat from "react-number-format";
import * as AiIcons from 'react-icons/ai'
import Loading from '../loading/Loading'

const ReportDetailMonth = forwardRef((props, ref) => {
  const [transactions, setTransactions] = useState([])
  const [incomes, setIncomes] = useState([])
  const [expenseNet, setExpenseNet] = useState([])
  const [incomeNet, setIncomeNet] = useState([])
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)
  const [safes, setSafes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const token = localStorage.getItem('token')

  useEffect(() => {
    setIsLoading(true)
    getReportMonthly()
      .then((res) => {
        setIncomes(res?.data?.addIncome)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    setIsLoading(true)
    getReportMonthly()
      .then((res) => {
        setTransactions(res?.data?.expense)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


  useEffect(() => {
    setIsLoading(true)
    getReportMonthly()
      .then((res) => {
        setIncomeNet(res?.data?.addIncome)
        setIsLoading(false)
        const total = res?.data?.addIncome?.reduce((prev, curr) => {
          return prev + parseInt(curr.totalAddIncome)
        }, 0)
        setTotalIncome(total)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    setIsLoading(true)
    getReportMonthly()
      .then((res) => {
        setExpenseNet(res?.data?.expense)
        setIsLoading(false)
        const total = res?.data?.expense?.reduce((prev, curr) => {
          return prev + parseInt(curr.totalExpense)
        }, 0)
        setTotalExpense(total)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    setIsLoading(true)
    getSafe(token)
      .then((res) => {
        setSafes(res?.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  // useEffect(() => {
  //   setIsLoading(true)
  //   getTransaction()
  //     .then((res) => {
  //       setTransactions(res?.data?.data?.transactions)
  //       setIsLoading(false)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       setIsLoading(false)
  //     })
  // }, [])

  const netIncome = totalIncome - totalExpense



  return (
    <>
      {isLoading ? (<Loading />) : ''}

      <div className='print-report-detail' ref={ref}>
        <div className='print-card-container'>
          <div className='print-card-content'>
            <div className='time-range-wrapper'>
              <div className='time-range-title'>
                Time Range
              </div>
              <div className='time-range-content'>
                <div>Monthly</div>
                <div>November 2021</div>
              </div>
              <div><hr /></div>
            </div>

            {/* Income */}
            <div className='income-wrapper'>
              <div className='section-title'>
                <div>Income</div>
                {/* {incomes.map((income) => {
                  return ( */}
                <NumberFormat
                  // value={income.totalAddIncome}
                  value={2750000}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="Rp"
                />
                {/* )
                })} */}
              </div>
              <div><hr /></div>
              <div className='income-content'>
                <div className='income-title-value'>
                  <img src={SafeIcon} alt='Safe Name' />
                  {/* {safes?.map((safe) => { */}
                  {/* return ( */}
                  {/* // <div>To {safe.safeName}</div> */}
                  <div>To hedon</div>
                  {/* ) */}
                  {/* })} */}
                </div>
                {/* {incomes.map((income) => {
                  return ( */}
                <NumberFormat
                  // value={income.expense}
                  value={2750000}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="Rp"
                />
                {/* )
                })} */}
              </div>
            </div>

            {/* Expense */}
            <div className='expense-wrapper'>
              <div className='section-title'>
                <div>Expense</div>
                <NumberFormat
                  // value={expenseNet.reduce((prev, curr) => {
                  //   return prev + parseInt(curr.totalExpense)
                  // }, 0)}
                  value={2150000}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="Rp"
                />
              </div>
              <div><hr /></div>
              <div className='expense-content'>
                {transactions.map((transaction) => {
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
                  // value={netIncome}
                  value={600000}
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
                  // value={incomeNet.reduce((prev, curr) => {
                  //   return prev + parseInt(curr.totalAddIncome)
                  // }, 0)}
                  value={2750000}
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
                  // value={expenseNet.reduce((prev, curr) => {
                  //   return prev + parseInt(curr.totalExpense)
                  // }, 0)}
                  value={2150000}
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
                  // value={netIncome}
                  value={600000}
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
                  // value={netIncome}
                  value={10600000}
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
                {/* {safes?.map((safe) => {
                  return ( */}
                <NumberFormat
                  // value={safe.openingBalance}
                  value={10000000}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="Rp"
                />
                {/* )
                })} */}
              </div>
              <div className='ending-balance-content-income'>
                <div className='ending-balance-title-value'>
                  Income
                </div>
                <NumberFormat
                  // value={incomeNet.reduce((prev, curr) => {
                  //   return prev + parseInt(curr.totalAddIncome)
                  // }, 0)}
                  value={2750000}
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
                  // value={expenseNet.reduce((prev, curr) => {
                  //   return prev + parseInt(curr.totalExpense)
                  // }, 0)}
                  value={12750000}
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
                  // value={expenseNet.reduce((prev, curr) => {
                  //   return prev + parseInt(curr.totalExpense)
                  // }, 0)}
                  value={2150000}
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
                  // value={netIncome}
                  value={10600000}
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

export default ReportDetailMonth