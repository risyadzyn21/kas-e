import { useState, useEffect, forwardRef } from "react";
import "./Print.scss";
import SafeIcon from "../../assets/icons/brangkas.svg";
import MinusLine from '../../assets/indicators/short-line.svg'
import { getReportMonthly, getSafe } from '../../services';
import NumberFormat from "react-number-format";
import * as AiIcons from 'react-icons/ai'

const ReportDetailMonth = forwardRef((props, ref) => {
  const [incomes, setIncomes] = useState([])
  const [expenseNet, setExpenseNet] = useState([])
  const [incomeNet, setIncomeNet] = useState([])
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)
  const [safes, setSafes] = useState([])
  const token = localStorage.getItem('token')

  useEffect(() => {
    getReportMonthly()
      .then((res) => {
        setIncomes(res?.data?.addIncome)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    getReportMonthly()
      .then((res) => {
        setIncomeNet(res?.data?.addIncome)
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
    getReportMonthly()
      .then((res) => {
        setExpenseNet(res?.data?.expense)
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
    getSafe(token)
      .then((res) => {
        setSafes(res?.data)

      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const netIncome = totalIncome - totalExpense

  return (
    <>
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
                <hr />
                {incomes.map((income) => {
                  return (
                    <NumberFormat
                      value={income.totalAddIncome}
                      displayType="text"
                      thousandSeparator="."
                      decimalSeparator=","
                      prefix="Rp"
                    />
                  )
                })}
              </div>
              <div><hr /></div>
              <div className='income-content'>
                <div className='income-title-value'>
                  <img src={SafeIcon} alt='Safe Name' />
                  {safes?.map((safe) => {
                    return (
                      <div>To {safe.safeName}</div>
                    )
                  })}
                </div>
                {incomes.map((income) => {
                  return (
                    <NumberFormat
                      value={income.totalAddIncome}
                      displayType="text"
                      thousandSeparator="."
                      decimalSeparator=","
                      prefix="Rp"
                    />
                  )
                })}
              </div>
            </div>

            {/* Expense */}
            <div className='expense-wrapper'>
              <div className='section-title'>
                <div>Expense</div>
                <hr />
                {incomes.map((income) => {
                  return (
                    <NumberFormat
                      value={income.totalAddIncome}
                      displayType="text"
                      thousandSeparator="."
                      decimalSeparator=","
                      prefix="Rp"
                    />
                  )
                })}
              </div>
              <div><hr /></div>
              <div className='income-content'>
                <div className='income-title-value'>
                  <img src={SafeIcon} alt='Safe Name' />
                  {safes?.map((safe) => {
                    return (
                      <div>To {safe.safeName}</div>
                    )
                  })}
                </div>
                {incomes.map((income) => {
                  return (
                    <NumberFormat
                      value={income.totalAddIncome}
                      displayType="text"
                      thousandSeparator="."
                      decimalSeparator=","
                      prefix="Rp"
                    />
                  )
                })}
              </div>
            </div>

            {/* Net Income */}
            <div className='net-income-wrapper'>
              <div className='section-title'>
                <div>Net Income</div>
                <hr />
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
                  value={incomeNet.reduce((prev, curr) => {
                    return prev + parseInt(curr.totalAddIncome)
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
                  value={expenseNet.reduce((prev, curr) => {
                    return prev + parseInt(curr.totalExpense)
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
              <NumberFormat
                className='minus-result'
                value={netIncome}
                displayType="text"
                thousandSeparator="."
                decimalSeparator=","
                prefix="Rp"
              />
            </div>

            {/* Ending Balance */}
            <div className='ending-balance-wrapper'>
              <div className='section-title'>
                <div>Ending Balance</div>
                <hr />
                {incomes.map((income) => {
                  return (
                    <NumberFormat
                      value={income.totalAddIncome}
                      displayType="text"
                      thousandSeparator="."
                      decimalSeparator=","
                      prefix="Rp"
                    />
                  )
                })}
              </div>
              <div><hr /></div>
              <div className='income-content'>
                <div className='income-title-value'>
                  <img src={SafeIcon} alt='Safe Name' />
                  {safes?.map((safe) => {
                    return (
                      <div>To {safe.safeName}</div>
                    )
                  })}
                </div>
                {incomes.map((income) => {
                  return (
                    <NumberFormat
                      value={income.totalAddIncome}
                      displayType="text"
                      thousandSeparator="."
                      decimalSeparator=","
                      prefix="Rp"
                    />
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
});

export default ReportDetailMonth