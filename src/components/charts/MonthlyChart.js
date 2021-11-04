import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import NumberFormat from "react-number-format";
import './PieChart.scss'
import { Pie } from 'react-chartjs-2';
import { getReportMonthly, getSafe } from '../../services';
import * as FaIcons from 'react-icons/fa'
import Loading from '../loading/Loading'
import { getReportMonthlyExpenseAsync } from '../../redux/actions';
import { isThisMonth } from 'date-fns';


const MonthlyChart = () => {
  const dispatch = useDispatch()
  const [reportsMonthlyExpense, setReportsMonthlyExpense] = useState([])
  const [reportsMonthlyIncome, setReportsMonthlyIncome] = useState([])
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)
  const [balances, setBalances] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const token = localStorage.getItem('token')


  useEffect(() => {
    setIsLoading(true)
    getReportMonthly()
      .then((res) => {
        setReportsMonthlyExpense(res?.data?.expense)
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
    getReportMonthly()
      .then((res) => {
        setReportsMonthlyIncome(res?.data?.addIncome)
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
    getSafe(token)
      .then((res) => {
        setBalances(res?.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const netIncome = totalIncome - totalExpense


  const data = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        label: '# of Votes',
        // data: [totalIncome, totalExpense],
        data: [2750000, 2150000],
        backgroundColor: [
          '#003F88',
          '#1EAE98',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      {isLoading ? (<Loading />) : ''}

      <div className='chart-container'>
        <div className='title-balance' >Balance</div>
        {/* {balances.map((balance) => { */}
        {/* return ( */}
        <div className='title-value-wrapper'>
          <div className='title-value opening'>
            Opening Balance
            <div className='chart-report-value'>
              <NumberFormat
                // value={balance.openingBalance}
                value={10000000}
                displayType="text"
                thousandSeparator="."
                decimalSeparator=","
                prefix="Rp"
              />
            </div>
          </div >
          <div className='title-value ending'>
            Ending Balance
            <div className='chart-report-value'>
              <NumberFormat
                // value={balance.amount}
                value={10600000}
                displayType="text"
                thousandSeparator="."
                decimalSeparator=","
                prefix="Rp"
              />
            </div>
          </div>
        </div>
        {/* ) */}
        {/* })} */}

        <div className='title-value-wrapper'>
          <div className='title-netincome'>Net Income
            <div className='chart-report-value'>
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
          <div className='right-report'>
            <div className='income-indicator-wrapper'>
              <div className='income-indicator'></div>
              Income
              <div className='chart-indicator-value'>
                <NumberFormat
                  // value={reportsMonthlyIncome.reduce((prev, curr) => {
                  //   return prev + parseInt(curr.totalAddIncome)
                  // }, 0)}
                  value={2750000}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="Rp"
                />
              </div>

            </div>
            <div className='expense-indicator-wrapper'>
              <div className='expense-indicator'></div>
              Expense
              <div className='chart-indicator-value'>
                <NumberFormat
                  // value={reportsMonthlyExpense.reduce((prev, curr) => {
                  //   return prev + parseInt(curr.totalExpense)
                  // }, 0)}
                  value={2150000}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="Rp"
                />
              </div>
            </div>
            <Link to="/report-detail" className="report-btn">
              See Detail
            </Link>
          </div>
        </div>

        <div className='chart-content-wrapper'>
          <div className='title'>Income and Expense</div>
          <div className='pie-chart'>
            <Pie data={data} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default MonthlyChart
