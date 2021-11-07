import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import NumberFormat from "react-number-format";
import './PieChart.scss'
import { Pie } from 'react-chartjs-2';
import Loading from '../loading/Loading'
import {
  getReportDailyExpenseAsync,
  getReportDailyIncomeAsync,
  getReportMonthlyExpenseAsync,
  getReportMonthlyIncomeAsync,
  getSafesAsc2
} from '../../redux/actions';
import { format, isThisMonth, subDays } from 'date-fns';


const MonthlyChart = () => {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')

  const { tabVariant, reportsExpense, reportsIncome, isLoading } = useSelector(
    (state) => state.GetReportReducer
  );

  const totalInc = reportsIncome.reduce((prev, curr) => {
    return prev + (curr.expense)
  }, 0)

  const totalExp = reportsExpense.reduce((prev, curr) => {
    return prev + (curr.expense)
  }, 0)

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


  const safes = useSelector(
    (state) => state.GetSafeReducer.safes.map(safe => ({ ...safe, createdAt: new Date(safe.createdAt) }))
      .filter(safe => isThisMonth(safe.createdAt))
  );


  useEffect(() => {
    dispatch(getSafesAsc2(token))
  }, [])

  const netIncome = totalInc - totalExp

  const data = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        label: '# of Votes',
        data: [totalInc, totalExp],
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
        {safes.map((balance) => {
          return (
            <div className='title-value-wrapper'>
              <div className='title-value opening'>
                Opening Balance
                <div className='chart-report-value'>
                  <NumberFormat
                    value={balance.openingBalance}
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
                    value={balance.amount}
                    displayType="text"
                    thousandSeparator="."
                    decimalSeparator=","
                    prefix="Rp"
                  />
                </div>
              </div>
            </div>
          )
        })}

        <div className='title-value-wrapper'>
          <div className='title-netincome'>Net Income
            <div className='chart-report-value'>
              <NumberFormat
                value={netIncome}
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
            <div className='expense-indicator-wrapper'>
              <div className='expense-indicator'></div>
              Expense
              <div className='chart-indicator-value'>
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
